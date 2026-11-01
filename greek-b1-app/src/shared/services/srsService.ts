import { MASTERY_THRESHOLD, VocabularyItem, WordSrsMap, WordSrsRecord } from '../types/vocabulary';

const MINUTE_MS = 60 * 1000;
const HOUR_MS = 60 * MINUTE_MS;
const DAY_MS = 24 * HOUR_MS;

const BOX_INTERVALS_MS: Record<number, number> = {
  0: 2 * MINUTE_MS,
  1: 10 * MINUTE_MS,
  2: 1 * HOUR_MS,
  3: 8 * HOUR_MS,
  4: 4 * DAY_MS,
};

const LAPSE_PENALTY_INTERVAL_MS = 1 * MINUTE_MS;

export const srsService = {
  gradeWord(
    currentRecord: WordSrsRecord | undefined,
    isKnown: boolean,
    now: number = Date.now()
  ): WordSrsRecord {
    const prevBox = currentRecord?.box ?? 0;
    const prevLapses = currentRecord?.lapses ?? 0;

    if (!isKnown) {
      const hadProgress = prevBox > 0;
      const updatedLapses = hadProgress ? prevLapses + 1 : prevLapses;
      const interval =
        updatedLapses > 0 ? LAPSE_PENALTY_INTERVAL_MS : BOX_INTERVALS_MS[0];

      return {
        box: 0,
        lapses: updatedLapses,
        nextReviewAt: now + interval,
        lastReviewedAt: now,
      };
    }

    const nextBox = Math.min(MASTERY_THRESHOLD, prevBox + 1);
    const baseInterval = BOX_INTERVALS_MS[nextBox] ?? BOX_INTERVALS_MS[MASTERY_THRESHOLD];
    const lapseFactor = prevLapses > 0 ? Math.max(0.4, 1 - prevLapses * 0.2) : 1;
    const adjustedInterval = Math.round(baseInterval * lapseFactor);

    return {
      box: nextBox,
      lapses: prevLapses,
      nextReviewAt: now + adjustedInterval,
      lastReviewedAt: now,
    };
  },

  isMastered(record: WordSrsRecord | undefined): boolean {
    return (record?.box ?? 0) >= MASTERY_THRESHOLD;
  },

  isHardOrLearning(record: WordSrsRecord | undefined): boolean {
    if (!record) return false;
    return record.box < MASTERY_THRESHOLD;
  },

  formatNextIntervalLabel(record: WordSrsRecord | undefined, now: number = Date.now()): string {
    if (!record) return 'Новое слово';
    if (record.box >= MASTERY_THRESHOLD) return 'Выучено (4/4)';
    const diffMs = record.nextReviewAt - now;
    if (diffMs <= 0) {
      return record.lapses > 0 ? 'Срочный повтор (была ошибка)' : 'Пора повторить';
    }
    const mins = Math.ceil(diffMs / MINUTE_MS);
    if (mins < 60) return `Повтор через ${mins} мин`;
    const hours = Math.ceil(mins / 60);
    if (hours < 24) return `Повтор через ${hours} ч`;
    const days = Math.ceil(hours / 24);
    return `Повтор через ${days} дн`;
  },

  pickNextSmartCard(
    candidates: VocabularyItem[],
    srsMap: WordSrsMap,
    recentGreeks: string[],
    now: number = Date.now()
  ): VocabularyItem {
    if (candidates.length === 0) {
      throw new Error('Candidate vocabulary list cannot be empty');
    }
    if (candidates.length === 1) {
      return candidates[0];
    }

    const recentSet = new Set(recentGreeks.slice(-5));
    const nonRecent = candidates.filter((item) => !recentSet.has(item.greek));
    const pool = nonRecent.length > 0 ? nonRecent : candidates;

    const weightedPool: { item: VocabularyItem; weight: number }[] = pool.map((item) => {
      const record = srsMap[item.greek];

      if (!record) {
        return { item, weight: 35 + Math.random() * 25 };
      }

      const isOverdue = now >= record.nextReviewAt;
      const isMastered = record.box >= MASTERY_THRESHOLD;

      if (record.box === 0 && record.lapses > 0) {
        return {
          item,
          weight: (isOverdue ? 140 : 75) + record.lapses * 20 + Math.random() * 20,
        };
      }

      if (record.box === 0) {
        return {
          item,
          weight: (isOverdue ? 110 : 55) + Math.random() * 20,
        };
      }

      if (!isMastered) {
        const boxUrgency = (MASTERY_THRESHOLD - record.box) * 15;
        return {
          item,
          weight: (isOverdue ? 90 + boxUrgency : 25 + boxUrgency * 0.5) + Math.random() * 15,
        };
      }

      return {
        item,
        weight: (isOverdue ? 30 : 3) + Math.random() * 5,
      };
    });

    weightedPool.sort((a, b) => b.weight - a.weight);
    const topSliceCount = Math.min(4, weightedPool.length);
    const randomTopIndex = Math.floor(Math.random() * topSliceCount);
    return weightedPool[randomTopIndex].item;
  },
};
