import {
  MASTERY_THRESHOLD,
  VocabularyItem,
  WordSrsMap,
  WordSrsRecord,
} from '../types/vocabulary';
import { computeWordHash } from './hashService';
import { telegramService } from './telegramService';

const SRS_STORAGE_KEY = 'ucy_b1_srs_v3';
const LEGACY_STATUS_STORAGE_KEY = 'ucy_b1_status_v2';
const CUSTOM_VOCAB_STORAGE_KEY = 'ucy_b1_custom_v1';
const CLOUD_SRS_KEY = 'ucy_b1_cloud_srs_v3';
const LEGACY_CLOUD_STATUS_KEY = 'ucy_b1_cloud_v1';

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

type CompactCloudSrsEntry = [string, number, number, number];

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

function migrateLegacyStatusMap(rawLegacy: Record<string, string>): WordSrsMap {
  const now = Date.now();
  const migrated: WordSrsMap = {};
  Object.entries(rawLegacy).forEach(([greek, status]) => {
    if (status === 'known') {
      migrated[greek] = {
        box: MASTERY_THRESHOLD,
        lapses: 0,
        nextReviewAt: now + 86400000,
        lastReviewedAt: now,
      };
    } else if (status === 'hard') {
      migrated[greek] = {
        box: 0,
        lapses: 1,
        nextReviewAt: now,
        lastReviewedAt: now,
      };
    }
  });
  return migrated;
}

export const storageService = {
  loadLocalSrsMap(): WordSrsMap {
    try {
      const rawSrs = localStorage.getItem(SRS_STORAGE_KEY);
      if (rawSrs) {
        return JSON.parse(rawSrs) as WordSrsMap;
      }
      const rawLegacy = localStorage.getItem(LEGACY_STATUS_STORAGE_KEY);
      if (rawLegacy) {
        const migrated = migrateLegacyStatusMap(
          JSON.parse(rawLegacy) as Record<string, string>
        );
        localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(migrated));
        return migrated;
      }
      return {};
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
    srsMap: WordSrsMap,
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
      localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(srsMap));
      localStorage.setItem(CUSTOM_VOCAB_STORAGE_KEY, JSON.stringify(legacyCompatibleCustom));
    } catch {
      return;
    }

    const cloud = telegramService.getCloudStorage();
    if (!cloud) return;

    try {
      const compactEntries: CompactCloudSrsEntry[] = [];
      allVocabulary.forEach((word) => {
        const record = srsMap[word.greek];
        if (!record) return;
        compactEntries.push([
          computeWordHash(word.greek),
          record.box,
          record.lapses,
          Math.floor(record.nextReviewAt / 60000),
        ]);
      });

      cloud.setItem(CLOUD_SRS_KEY, JSON.stringify(compactEntries));
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
    onHydrate: (payload: { srsMap: WordSrsMap; customWords: VocabularyItem[] }) => void
  ): void {
    const cloud = telegramService.getCloudStorage();
    if (!cloud) return;

    try {
      cloud.getItems(
        [CLOUD_SRS_KEY, LEGACY_CLOUD_STATUS_KEY, CUSTOM_VOCAB_STORAGE_KEY],
        (error, values) => {
          if (error || !values) return;

          let cloudCustomWords: VocabularyItem[] = [];
          if (values[CUSTOM_VOCAB_STORAGE_KEY]) {
            try {
              const parsedCustom = JSON.parse(
                values[CUSTOM_VOCAB_STORAGE_KEY]
              ) as RawLegacyVocabItem[];
              if (Array.isArray(parsedCustom)) {
                cloudCustomWords = normalizeCustomItems(parsedCustom);
              }
            } catch {
              cloudCustomWords = [];
            }
          }

          const combinedVocab = [...cloudCustomWords, ...baseVocabulary];
          const hashToGreek = new Map<string, string>();
          combinedVocab.forEach((word) => {
            hashToGreek.set(computeWordHash(word.greek), word.greek);
          });

          const hydratedSrs: WordSrsMap = {};

          if (values[CLOUD_SRS_KEY]) {
            try {
              const entries = JSON.parse(values[CLOUD_SRS_KEY]) as CompactCloudSrsEntry[];
              entries.forEach(([hash, box, lapses, nextMin]) => {
                const greek = hashToGreek.get(hash);
                if (greek) {
                  hydratedSrs[greek] = {
                    box,
                    lapses,
                    nextReviewAt: nextMin * 60000,
                    lastReviewedAt: Date.now(),
                  };
                }
              });
            } catch {
              return;
            }
          } else if (values[LEGACY_CLOUD_STATUS_KEY]) {
            try {
              const compactLegacy = JSON.parse(values[LEGACY_CLOUD_STATUS_KEY]) as {
                k?: string[];
                h?: string[];
              };
              const now = Date.now();
              (compactLegacy.k ?? []).forEach((hash) => {
                const greek = hashToGreek.get(hash);
                if (greek) {
                  hydratedSrs[greek] = {
                    box: MASTERY_THRESHOLD,
                    lapses: 0,
                    nextReviewAt: now + 86400000,
                    lastReviewedAt: now,
                  };
                }
              });
              (compactLegacy.h ?? []).forEach((hash) => {
                const greek = hashToGreek.get(hash);
                if (greek) {
                  hydratedSrs[greek] = {
                    box: 0,
                    lapses: 1,
                    nextReviewAt: now,
                    lastReviewedAt: now,
                  };
                }
              });
            } catch {
              return;
            }
          }

          if (Object.keys(hydratedSrs).length > 0 || cloudCustomWords.length > 0) {
            onHydrate({ srsMap: hydratedSrs, customWords: cloudCustomWords });
          }
        }
      );
    } catch {
      return;
    }
  },

  encodeBackupCode(srsMap: WordSrsMap, customWords: VocabularyItem[]): string {
    const legacyCompatibleCustom = customWords.map((item) => ({
      m: item.module,
      g: item.greek,
      f: item.grammarHint,
      r: item.russian,
      e: item.example,
    }));
    const rawJson = JSON.stringify({ srs: srsMap, c: legacyCompatibleCustom });
    return btoa(unescape(encodeURIComponent(rawJson)));
  },

  decodeBackupCode(
    code: string
  ): { srsMap: WordSrsMap; customWords: VocabularyItem[] } | null {
    try {
      const decoded = JSON.parse(decodeURIComponent(escape(atob(code.trim())))) as {
        srs?: WordSrsMap;
        s?: Record<string, string>;
        c?: RawLegacyVocabItem[];
      };
      if (!decoded || typeof decoded !== 'object') return null;

      const srsMap: WordSrsMap = decoded.srs
        ? decoded.srs
        : decoded.s
        ? migrateLegacyStatusMap(decoded.s)
        : {};

      return {
        srsMap,
        customWords: Array.isArray(decoded.c) ? normalizeCustomItems(decoded.c) : [],
      };
    } catch {
      return null;
    }
  },

  mergeSrsMaps(localMap: WordSrsMap, incomingMap: WordSrsMap): WordSrsMap {
    const merged: WordSrsMap = { ...localMap };
    Object.entries(incomingMap).forEach(([greek, incomingRecord]) => {
      const existing: WordSrsRecord | undefined = merged[greek];
      if (!existing || incomingRecord.lastReviewedAt >= existing.lastReviewedAt) {
        merged[greek] = incomingRecord;
      }
    });
    return merged;
  },
};
