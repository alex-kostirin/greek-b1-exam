import { BASE_VOCABULARY_DATASET } from '../shared/data/vocabularyDataset';
import { VocabularyItem, WordStatusMap } from '../shared/types/vocabulary';
import { AppState } from './appState';

export const SMART_MIX_MODULE = '🔥 Умный микс';
export const REVIEW_HARD_MODULE = '❗️ Повторить';
export const ALL_WORDS_MODULE = 'Все подряд';
export const CUSTOM_WORDS_MODULE = '⭐️ Мои слова';

export function selectAllVocabulary(customWords: VocabularyItem[]): VocabularyItem[] {
  return [...customWords, ...BASE_VOCABULARY_DATASET];
}

export function selectModuleList(customWords: VocabularyItem[]): string[] {
  const allVocabulary = selectAllVocabulary(customWords);
  const dynamicModules = Array.from(new Set(allVocabulary.map((item) => item.module)));
  return [SMART_MIX_MODULE, REVIEW_HARD_MODULE, ...dynamicModules, ALL_WORDS_MODULE];
}

export function selectActiveDeck(
  activeModule: string,
  statusMap: WordStatusMap,
  customWords: VocabularyItem[]
): VocabularyItem[] {
  const allVocabulary = selectAllVocabulary(customWords);

  if (activeModule === REVIEW_HARD_MODULE) {
    const hardItems = allVocabulary.filter((item) => statusMap[item.greek] === 'hard');
    if (hardItems.length > 0) return hardItems;
    const unlearnedItems = allVocabulary.filter((item) => statusMap[item.greek] !== 'known');
    return unlearnedItems.length > 0 ? unlearnedItems : allVocabulary;
  }

  if (activeModule === SMART_MIX_MODULE) {
    const hardItems = allVocabulary.filter((item) => statusMap[item.greek] === 'hard');
    const freshItems = allVocabulary.filter((item) => !statusMap[item.greek]);
    const knownItems = allVocabulary.filter((item) => statusMap[item.greek] === 'known');
    return [...hardItems, ...freshItems, ...knownItems];
  }

  if (activeModule === ALL_WORDS_MODULE) {
    return allVocabulary;
  }

  const moduleFiltered = allVocabulary.filter((item) => item.module === activeModule);
  return moduleFiltered.length > 0 ? moduleFiltered : allVocabulary;
}

export function selectCurrentCard(state: AppState): VocabularyItem {
  const deck = selectActiveDeck(state.activeModule, state.statusMap, state.customWords);
  return deck[state.cardCursor % deck.length];
}

export function selectVocabularyStats(state: AppState): {
  knownCount: number;
  hardCount: number;
  totalCount: number;
  knownPercent: number;
  hardPercent: number;
} {
  const allVocabulary = selectAllVocabulary(state.customWords);
  let knownCount = 0;
  let hardCount = 0;

  allVocabulary.forEach((item) => {
    const status = state.statusMap[item.greek];
    if (status === 'known') knownCount += 1;
    else if (status === 'hard') hardCount += 1;
  });

  const totalCount = allVocabulary.length;
  return {
    knownCount,
    hardCount,
    totalCount,
    knownPercent: totalCount > 0 ? (knownCount / totalCount) * 100 : 0,
    hardPercent: totalCount > 0 ? (hardCount / totalCount) * 100 : 0,
  };
}

export function selectFilteredDictionaryList(state: AppState): VocabularyItem[] {
  const allVocabulary = selectAllVocabulary(state.customWords);
  const query = state.searchQuery.trim().toLowerCase();

  return allVocabulary.filter((item) => {
    if (!query) {
      if (state.activeModule === SMART_MIX_MODULE || state.activeModule === ALL_WORDS_MODULE) {
        return true;
      }
      if (state.activeModule === REVIEW_HARD_MODULE) {
        return state.statusMap[item.greek] === 'hard';
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
