import { VocabularyItem, WordStatusMap } from '../types/vocabulary';
import { computeWordHash } from './hashService';
import { telegramService } from './telegramService';

const STATUS_STORAGE_KEY = 'ucy_b1_status_v2';
const CUSTOM_VOCAB_STORAGE_KEY = 'ucy_b1_custom_v1';
const CLOUD_STATUS_KEY = 'ucy_b1_cloud_v1';

interface RawLegacyVocabItem {
  m?: string;
  g?: string;
  f?: string;
  r?: string;
  e?: string;
  module?: string;
  greek?: string;
  grammarHint?: string;
  russian?: string;
  example?: string;
}

function normalizeCustomItems(items: RawLegacyVocabItem[]): VocabularyItem[] {
  return items
    .map((item) => ({
      module: item.module ?? item.m ?? '⭐️ Мои слова',
      greek: item.greek ?? item.g ?? '',
      grammarHint: item.grammarHint ?? item.f ?? 'свое слово',
      russian: item.russian ?? item.r ?? '',
      example: item.example ?? item.e ?? '',
    }))
    .filter((item) => item.greek.length > 0 && item.russian.length > 0);
}

export const storageService = {
  loadLocalStatusMap(): WordStatusMap {
    try {
      const raw = localStorage.getItem(STATUS_STORAGE_KEY);
      return raw ? (JSON.parse(raw) as WordStatusMap) : {};
    } catch {
      return {};
    }
  },

  loadLocalCustomWords(): VocabularyItem[] {
    try {
      const raw = localStorage.getItem(CUSTOM_VOCAB_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as RawLegacyVocabItem[];
      return Array.isArray(parsed) ? normalizeCustomItems(parsed) : [];
    } catch {
      return [];
    }
  },

  persistState(
    statusMap: WordStatusMap,
    customWords: VocabularyItem[],
    allVocabulary: VocabularyItem[]
  ): void {
    const legacyCompatibleCustom = customWords.map((item) => ({
      m: item.module,
      g: item.greek,
      f: item.grammarHint,
      r: item.russian,
      e: item.example,
    }));

    try {
      localStorage.setItem(STATUS_STORAGE_KEY, JSON.stringify(statusMap));
      localStorage.setItem(CUSTOM_VOCAB_STORAGE_KEY, JSON.stringify(legacyCompatibleCustom));
    } catch {
      return;
    }

    const cloud = telegramService.getCloudStorage();
    if (!cloud) return;

    try {
      const knownHashes: string[] = [];
      const hardHashes: string[] = [];

      allVocabulary.forEach((word) => {
        const status = statusMap[word.greek];
        if (status === 'known') knownHashes.push(computeWordHash(word.greek));
        else if (status === 'hard') hardHashes.push(computeWordHash(word.greek));
      });

      cloud.setItem(CLOUD_STATUS_KEY, JSON.stringify({ k: knownHashes, h: hardHashes }));
      cloud.setItem(
        CUSTOM_VOCAB_STORAGE_KEY,
        JSON.stringify(legacyCompatibleCustom.slice(0, 40))
      );
    } catch {
      return;
    }
  },

  fetchCloudState(
    baseVocabulary: VocabularyItem[],
    onHydrate: (payload: { statusMap: WordStatusMap; customWords: VocabularyItem[] }) => void
  ): void {
    const cloud = telegramService.getCloudStorage();
    if (!cloud) return;

    try {
      cloud.getItems([CLOUD_STATUS_KEY, CUSTOM_VOCAB_STORAGE_KEY], (error, values) => {
        if (error || !values) return;

        let cloudCustomWords: VocabularyItem[] = [];
        if (values[CUSTOM_VOCAB_STORAGE_KEY]) {
          try {
            const parsedCustom = JSON.parse(values[CUSTOM_VOCAB_STORAGE_KEY]) as RawLegacyVocabItem[];
            if (Array.isArray(parsedCustom)) {
              cloudCustomWords = normalizeCustomItems(parsedCustom);
            }
          } catch {
            cloudCustomWords = [];
          }
        }

        const hydratedStatus: WordStatusMap = {};
        if (values[CLOUD_STATUS_KEY]) {
          try {
            const compact = JSON.parse(values[CLOUD_STATUS_KEY]) as {
              k?: string[];
              h?: string[];
            };
            const knownSet = new Set(compact.k ?? []);
            const hardSet = new Set(compact.h ?? []);
            const combinedVocab = [...cloudCustomWords, ...baseVocabulary];

            combinedVocab.forEach((word) => {
              const id = computeWordHash(word.greek);
              if (knownSet.has(id)) hydratedStatus[word.greek] = 'known';
              else if (hardSet.has(id)) hydratedStatus[word.greek] = 'hard';
            });
          } catch {
            return;
          }
        }

        if (Object.keys(hydratedStatus).length > 0 || cloudCustomWords.length > 0) {
          onHydrate({ statusMap: hydratedStatus, customWords: cloudCustomWords });
        }
      });
    } catch {
      return;
    }
  },

  encodeBackupCode(statusMap: WordStatusMap, customWords: VocabularyItem[]): string {
    const legacyCompatibleCustom = customWords.map((item) => ({
      m: item.module,
      g: item.greek,
      f: item.grammarHint,
      r: item.russian,
      e: item.example,
    }));
    const rawJson = JSON.stringify({ s: statusMap, c: legacyCompatibleCustom });
    return btoa(unescape(encodeURIComponent(rawJson)));
  },

  decodeBackupCode(
    code: string
  ): { statusMap: WordStatusMap; customWords: VocabularyItem[] } | null {
    try {
      const decoded = JSON.parse(decodeURIComponent(escape(atob(code.trim())))) as {
        s?: WordStatusMap;
        c?: RawLegacyVocabItem[];
      };
      if (!decoded || typeof decoded !== 'object') return null;
      return {
        statusMap: decoded.s ?? {},
        customWords: Array.isArray(decoded.c) ? normalizeCustomItems(decoded.c) : [],
      };
    } catch {
      return null;
    }
  },
};
