import { BASE_VOCABULARY_DATASET } from '../shared/data/vocabularyDataset';
import { srsService } from '../shared/services/srsService';
import { GroupingMode, MASTERY_THRESHOLD, VocabularyItem, WordSrsMap } from '../shared/types/vocabulary';
import { AppState } from './appState';

export const SMART_MIX_MODULE = 'Умный микс';
export const REVIEW_HARD_MODULE = 'На повторе';
export const ALL_WORDS_MODULE = 'Все слова';
export const CUSTOM_WORDS_MODULE = 'Мои слова';

export const CLICK_CHAPTER_LABELS: Record<number, string> = {
  1: 'Κεφ. 1: Характер и семья',
  2: 'Κεφ. 2: Дом и переезд',
  3: 'Κεφ. 3: Время и досуг',
  4: 'Κεφ. 4: Дружба и характер',
  5: 'Κεφ. 5: Путешествия и отели',
  6: 'Κεφ. 6: Покупки и скидки',
  7: 'Κεφ. 7: Здоровье и медицина',
  8: 'Κεφ. 8: Επανάληψη 5-7 (Ловушки)',
  9: 'Κεφ. 9: Экология и среда',
  10: 'Κεφ. 10: Технологии и СМИ',
  11: 'Κεφ. 11: Город, службы, работа',
  12: 'Κεφ. 12: Επανάληψη 7-11',
};

const TOP_VERBS_MODULE = '11. Топ-Глаголы B1';

const MODULE_CLICK_CHAPTERS: Record<string, readonly number[]> = {
  '1. Характер': [1, 4],
  '2. Жилье и переезд': [2],
  '3. Время и досуг': [3],
  '12. Связки и Штампы': [12],
  '13. Чтение №3 (Формы)': [12],
  '4. Путешествия': [5],
  '5. Покупки и жалобы': [6],
  '6. Здоровье и ЗОЖ': [7],
  '14. Ловушки Аудирования': [8, 12],
  '7. Экология и Кипр': [9, 12],
  '9. Технологии и СМИ': [10, 12],
  '8. Работа и учеба': [11],
  '10. Город и службы': [11],
};

const TOP_VERB_DISTRIBUTION_CHAPTERS = [1, 2, 3, 5, 6, 7, 9, 10, 11, 12] as const;

function hashTextForChapterDistribution(text: string): number {
  let hash = 2166136261;

  for (let charIndex = 0; charIndex < text.length; charIndex += 1) {
    hash ^= text.charCodeAt(charIndex);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function resolveTopVerbClickChapters(item: VocabularyItem, index?: number): number[] {
  const hashSource = item.greek.length > 0 ? item.greek : String(index ?? 0);
  const hash = hashTextForChapterDistribution(hashSource);
  const distributionIndex = hash % TOP_VERB_DISTRIBUTION_CHAPTERS.length;
  const primaryChapter = TOP_VERB_DISTRIBUTION_CHAPTERS[distributionIndex] ?? 12;
  const chapters: number[] = [primaryChapter];

  if (primaryChapter === 5 || primaryChapter === 6 || primaryChapter === 7) {
    chapters.push(8);
  }

  if (
    primaryChapter === 7 ||
    primaryChapter === 9 ||
    primaryChapter === 10 ||
    primaryChapter === 11
  ) {
    chapters.push(12);
  }

  return chapters;
}

export function resolveItemClickChapters(item: VocabularyItem, index?: number): number[] {
  if (item.clickChapter !== undefined) {
    return [item.clickChapter];
  }

  if (item.module === TOP_VERBS_MODULE) {
    return resolveTopVerbClickChapters(item, index);
  }

  const mappedChapters = MODULE_CLICK_CHAPTERS[item.module];
  return mappedChapters ? [...mappedChapters] : [];
}

export function matchesClickChapter(item: VocabularyItem, chapter: number): boolean {
  return resolveItemClickChapters(item).includes(chapter);
}

export function normalizeGreekText(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

export function splitGreekArticle(greekText: string): {
  article: 'ο' | 'η' | 'το' | 'οι' | 'τα' | null;
  word: string;
  extra: string | null;
} {
  const match = greekText.match(/^(ο|η|το|οι|τα)\s+(.+?)(\s*\(.+\))?$/i);
  if (!match) {
    const parenMatch = greekText.match(/^(.+?)(\s*\(.+\))$/);
    return {
      article: null,
      word: parenMatch ? parenMatch[1].trim() : greekText.trim(),
      extra: parenMatch ? parenMatch[2].trim() : null,
    };
  }

  return {
    article: match[1].toLowerCase() as 'ο' | 'η' | 'το' | 'οι' | 'τα',
    word: match[2].trim(),
    extra: match[3] ? match[3].trim() : null,
  };
}

export function selectAllVocabulary(customWords: VocabularyItem[]): VocabularyItem[] {
  return [...customWords, ...BASE_VOCABULARY_DATASET];
}

export function selectModuleList(customWords: VocabularyItem[]): string[] {
  const allVocabulary = selectAllVocabulary(customWords);
  const dynamicModules = Array.from(new Set(allVocabulary.map((item) => item.module)));
  return [SMART_MIX_MODULE, REVIEW_HARD_MODULE, ...dynamicModules, ALL_WORDS_MODULE];
}

export function selectCandidatePool(
  activeModule: string,
  srsMap: WordSrsMap,
  customWords: VocabularyItem[],
  groupingMode: GroupingMode = 'exam',
  activeClickChapter: number | null = null
): VocabularyItem[] {
  const allVocabulary = selectAllVocabulary(customWords);

  if (groupingMode === 'click' && activeClickChapter !== null) {
    const chapterPool = allVocabulary.filter((item) =>
      matchesClickChapter(item, activeClickChapter)
    );
    const safeChapterPool = chapterPool.length > 0 ? chapterPool : allVocabulary;

    if (activeModule === SMART_MIX_MODULE) {
      return safeChapterPool;
    }

    if (activeModule === REVIEW_HARD_MODULE) {
      const learningOrHard = safeChapterPool.filter((item) =>
        srsService.isHardOrLearning(srsMap[item.greek])
      );
      if (learningOrHard.length > 0) return learningOrHard;

      const unmastered = safeChapterPool.filter(
        (item) => !srsService.isMastered(srsMap[item.greek])
      );
      return unmastered.length > 0 ? unmastered : safeChapterPool;
    }

    const moduleItems = safeChapterPool.filter((item) => item.module === activeModule);
    return moduleItems.length > 0 ? moduleItems : safeChapterPool;
  }

  if (activeModule === REVIEW_HARD_MODULE) {
    const learningOrHard = allVocabulary.filter((item) =>
      srsService.isHardOrLearning(srsMap[item.greek])
    );
    if (learningOrHard.length > 0) return learningOrHard;

    const unmastered = allVocabulary.filter(
      (item) => !srsService.isMastered(srsMap[item.greek])
    );
    return unmastered.length > 0 ? unmastered : allVocabulary;
  }

  if (activeModule === SMART_MIX_MODULE || activeModule === ALL_WORDS_MODULE) {
    return allVocabulary;
  }

  const moduleItems = allVocabulary.filter((item) => item.module === activeModule);
  return moduleItems.length > 0 ? moduleItems : allVocabulary;
}

export function selectVocabularyStats(state: AppState): {
  masteredCount: number;
  learningCount: number;
  totalCount: number;
  masteredPercent: number;
  learningPercent: number;
} {
  const allVocabulary = selectAllVocabulary(state.customWords);
  let vocabularyForStats = allVocabulary;

  if (state.groupingMode === 'click' && state.activeClickChapter !== null) {
    const chapterVocabulary = allVocabulary.filter((item) =>
      matchesClickChapter(item, state.activeClickChapter as number)
    );

    if (chapterVocabulary.length > 0) {
      vocabularyForStats = chapterVocabulary;
    }
  }

  let masteredCount = 0;
  let learningCount = 0;

  vocabularyForStats.forEach((item) => {
    const record = state.srsMap[item.greek];
    if (!record) return;

    if (record.box >= MASTERY_THRESHOLD) {
      masteredCount += 1;
    } else {
      learningCount += 1;
    }
  });

  const totalCount = vocabularyForStats.length;
  return {
    masteredCount,
    learningCount,
    totalCount,
    masteredPercent: totalCount > 0 ? (masteredCount / totalCount) * 100 : 0,
    learningPercent: totalCount > 0 ? (learningCount / totalCount) * 100 : 0,
  };
}

export function selectFilteredDictionaryList(state: AppState): VocabularyItem[] {
  const allVocabulary = selectAllVocabulary(state.customWords);
  const query = normalizeGreekText(state.searchQuery.trim());

  return allVocabulary.filter((item) => {
    if (state.groupingMode === 'click' && state.activeClickChapter !== null) {
      if (!matchesClickChapter(item, state.activeClickChapter)) {
        return false;
      }
    }

    if (!query) {
      if (state.activeModule === SMART_MIX_MODULE || state.activeModule === ALL_WORDS_MODULE) {
        return true;
      }
      if (state.activeModule === REVIEW_HARD_MODULE) {
        return srsService.isHardOrLearning(state.srsMap[item.greek]);
      }
      return item.module === state.activeModule;
    }

    return (
      normalizeGreekText(item.greek).includes(query) ||
      item.russian.toLowerCase().includes(query) ||
      normalizeGreekText(item.example).includes(query) ||
      normalizeGreekText(item.grammarHint || '').includes(query)
    );
  });
}
