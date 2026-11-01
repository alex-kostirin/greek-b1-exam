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
  4: 'Κεφ. 4: Επανάληψη 1-3 (Связки)',
  5: 'Κεφ. 5: Путешествия и отели',
  6: 'Κεφ. 6: Покупки и скидки',
  7: 'Κεφ. 7: Здоровье и медицина',
  8: 'Κεφ. 8: Επανάληψη 5-7 (Ловушки)',
  9: 'Κεφ. 9: Экология и среда',
  10: 'Κεφ. 10: Технологии и СМИ',
  11: 'Κεφ. 11: Город, службы, работа',
  12: 'Κεφ. 12: Επανάληψη 7-11',
};

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

  // If in click mode and a chapter is selected, base pool is filtered by chapter
  if (groupingMode === 'click' && activeClickChapter !== null) {
    const chapterPool = allVocabulary.filter(
      (item) => item.clickChapter === activeClickChapter
    );

    if (activeModule === SMART_MIX_MODULE) {
      return chapterPool;
    }

    if (activeModule === REVIEW_HARD_MODULE) {
      const learningOrHard = chapterPool.filter((item) =>
        srsService.isHardOrLearning(srsMap[item.greek])
      );
      if (learningOrHard.length > 0) return learningOrHard;
      const unmastered = chapterPool.filter(
        (item) => !srsService.isMastered(srsMap[item.greek])
      );
      return unmastered.length > 0 ? unmastered : chapterPool;
    }

    // For any other module (e.g., specific module name), filter within chapter
    const moduleItems = chapterPool.filter((item) => item.module === activeModule);
    return moduleItems.length > 0 ? moduleItems : chapterPool;
  }

  // Original exam mode behavior
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
  let masteredCount = 0;
  let learningCount = 0;

  allVocabulary.forEach((item) => {
    const record = state.srsMap[item.greek];
    if (!record) return;
    if (record.box >= MASTERY_THRESHOLD) {
      masteredCount += 1;
    } else {
      learningCount += 1;
    }
  });

  const totalCount = allVocabulary.length;
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
  const query = state.searchQuery.trim().toLowerCase();

  return allVocabulary.filter((item) => {
    // Apply chapter filter if in click mode with a chapter selected
    if (state.groupingMode === 'click' && state.activeClickChapter !== null) {
      if (item.clickChapter !== state.activeClickChapter) {
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
      item.greek.toLowerCase().includes(query) ||
      item.russian.toLowerCase().includes(query) ||
      item.example.toLowerCase().includes(query)
    );
  });
}
