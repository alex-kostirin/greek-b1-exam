import {
  GroupingMode,
  MASTERY_THRESHOLD,
  NavigationTab,
  VocabularyItem,
  WordSrsMap,
  WordSrsRecord,
} from '../types/vocabulary';
import { EssayUserProgress } from '../types/essay';
import { computeWordHash } from './hashService';
import { telegramService } from './telegramService';

const SRS_STORAGE_KEY = 'ucy_b1_srs_v3';
const LEGACY_STATUS_STORAGE_KEY = 'ucy_b1_status_v2';
const CUSTOM_VOCAB_STORAGE_KEY = 'ucy_b1_custom_v1';
const CLOUD_SRS_KEY = 'ucy_b1_cloud_srs_v3';
const LEGACY_CLOUD_STATUS_KEY = 'ucy_b1_cloud_v1';
const ESSAY_STORAGE_KEY = 'ucy_b1_essays_v1';
const CLOUD_ESSAY_KEY = 'ucy_b1_cloud_essays_v1';
const SETTINGS_STORAGE_KEY = 'ucy_b1_settings_v1';
const CLOUD_SETTINGS_KEY = 'ucy_b1_cloud_settings_v1';

export interface UserAppSettings {
  activeTab: NavigationTab;
  activeModule: string;
  groupingMode: GroupingMode;
  activeClickChapter: number | null;
  directionGreekToRussian: boolean;
  autoTtsEnabled: boolean;
  updatedAt: number;
}

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
          JSON.parse(rawLegacy) as Record<string, string>,
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

  loadLocalEssayProgress(): EssayUserProgress {
    try {
      const raw = localStorage.getItem(ESSAY_STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw) as EssayUserProgress;
      }

      return { pinnedIds: [], completedIds: [], hintLevels: {} };
    } catch {
      return { pinnedIds: [], completedIds: [], hintLevels: {} };
    }
  },

  loadLocalSettings(): Partial<UserAppSettings> {
    try {
      const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (!raw) return {};

      const parsed = JSON.parse(raw) as Partial<UserAppSettings>;
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        return {};
      }

      return parsed;
    } catch {
      return {};
    }
  },

  mergeEssayProgress(
    local: EssayUserProgress,
    incoming?: EssayUserProgress,
  ): EssayUserProgress {
    if (!incoming) return local;

    return {
      pinnedIds: [...new Set([...local.pinnedIds, ...incoming.pinnedIds])],
      completedIds: [...new Set([...local.completedIds, ...incoming.completedIds])],
      hintLevels: { ...local.hintLevels, ...incoming.hintLevels },
    };
  },

  persistState(
    srsMap: WordSrsMap,
    customWords: VocabularyItem[],
    allVocabulary: VocabularyItem[],
    essayProgress?: EssayUserProgress,
    settings?: UserAppSettings,
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
      localStorage.setItem(
        CUSTOM_VOCAB_STORAGE_KEY,
        JSON.stringify(legacyCompatibleCustom),
      );

      if (essayProgress) {
        localStorage.setItem(ESSAY_STORAGE_KEY, JSON.stringify(essayProgress));
      }

      if (settings) {
        localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
      }
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
        JSON.stringify(legacyCompatibleCustom.slice(0, 40)),
      );

      if (essayProgress) {
        cloud.setItem(CLOUD_ESSAY_KEY, JSON.stringify(essayProgress));
      }

      if (settings) {
        cloud.setItem(CLOUD_SETTINGS_KEY, JSON.stringify(settings));
      }
    } catch {
      return;
    }
  },

  fetchCloudState(
    baseVocabulary: VocabularyItem[],
    onHydrate: (payload: {
      srsMap: WordSrsMap;
      customWords: VocabularyItem[];
      essayProgress?: EssayUserProgress;
      settings?: Partial<UserAppSettings>;
    }) => void,
  ): void {
    const cloud = telegramService.getCloudStorage();
    if (!cloud) return;

    try {
      cloud.getItems(
        [
          CLOUD_SRS_KEY,
          LEGACY_CLOUD_STATUS_KEY,
          CUSTOM_VOCAB_STORAGE_KEY,
          CLOUD_ESSAY_KEY,
          CLOUD_SETTINGS_KEY,
        ],
        (error, values) => {
          if (error || !values) return;

          let cloudCustomWords: VocabularyItem[] = [];

          if (values[CUSTOM_VOCAB_STORAGE_KEY]) {
            try {
              const parsedCustom = JSON.parse(
                values[CUSTOM_VOCAB_STORAGE_KEY],
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
              const entries = JSON.parse(
                values[CLOUD_SRS_KEY],
              ) as CompactCloudSrsEntry[];

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
              const compactLegacy = JSON.parse(
                values[LEGACY_CLOUD_STATUS_KEY],
              ) as {
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

          let essayProgress: EssayUserProgress | undefined;

          if (values[CLOUD_ESSAY_KEY]) {
            try {
              essayProgress = JSON.parse(
                values[CLOUD_ESSAY_KEY],
              ) as EssayUserProgress;
            } catch {
              essayProgress = undefined;
            }
          }

          let cloudSettings: UserAppSettings | undefined;

          if (values[CLOUD_SETTINGS_KEY]) {
            try {
              const parsedSettings = JSON.parse(
                values[CLOUD_SETTINGS_KEY],
              ) as UserAppSettings;

              if (
                parsedSettings &&
                typeof parsedSettings === 'object' &&
                !Array.isArray(parsedSettings)
              ) {
                cloudSettings = parsedSettings;
              }
            } catch {
              cloudSettings = undefined;
            }
          }

          if (
            Object.keys(hydratedSrs).length > 0 ||
            cloudCustomWords.length > 0 ||
            essayProgress ||
            cloudSettings
          ) {
            onHydrate({
              srsMap: hydratedSrs,
              customWords: cloudCustomWords,
              essayProgress,
              settings: cloudSettings,
            });
          }
        },
      );
    } catch {
      return;
    }
  },

  encodeBackupCode(
    srsMap: WordSrsMap,
    customWords: VocabularyItem[],
    essayProgress?: EssayUserProgress,
  ): string {
    const legacyCompatibleCustom = customWords.map((item) => ({
      m: item.module,
      g: item.greek,
      f: item.grammarHint,
      r: item.russian,
      e: item.example,
    }));
    const payload: any = { srs: srsMap, c: legacyCompatibleCustom };

    if (essayProgress) {
      payload.essays = essayProgress;
    }

    const rawJson = JSON.stringify(payload);
    return btoa(unescape(encodeURIComponent(rawJson)));
  },

  decodeBackupCode(
    code: string,
  ): {
    srsMap: WordSrsMap;
    customWords: VocabularyItem[];
    essayProgress?: EssayUserProgress;
  } | null {
    try {
      const decoded = JSON.parse(
        decodeURIComponent(escape(atob(code.trim()))),
      ) as {
        srs?: WordSrsMap;
        s?: Record<string, string>;
        c?: RawLegacyVocabItem[];
        essays?: EssayUserProgress;
      };

      if (!decoded || typeof decoded !== 'object') return null;

      const srsMap: WordSrsMap = decoded.srs
        ? decoded.srs
        : decoded.s
        ? migrateLegacyStatusMap(decoded.s)
        : {};

      return {
        srsMap,
        customWords: Array.isArray(decoded.c)
          ? normalizeCustomItems(decoded.c)
          : [],
        essayProgress: decoded.essays,
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
