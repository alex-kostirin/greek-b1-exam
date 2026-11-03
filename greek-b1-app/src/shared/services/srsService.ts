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

// Константы для алгоритма pickNextSmartCard
const RECENT_WINDOW_SIZE = 12; // Увеличенное окно исключения недавних слов
const INTERLEAVING_RATIO = 0.75; // 75% Due / 25% New

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

  /**
   * Выбирает следующую карточку для показа на основе сессионного алгоритма
   * с жестким запретом раннего показа карточек на кулдауне.
   *
   * Приоритеты:
   * 1. urgentLearningDue – слова с ошибками (lapses > 0 или box === 0), у которых наступил срок (1 минута).
   *    Исключает выученные (mastered) слова.
   * 2. reviewDue – созревшие карточки (box >= 1 и now >= nextReviewAt), включая выученные (mastered),
   *    сортируемые по давности просрочки, но с приоритетом недоученных перед выученными.
   * 3. newCards – новые неизученные слова.
   * 4. coolingCards – слова, интервал которых еще не наступил (now < nextReviewAt) – только fallback.
   *
   * Микширование: 75% Due / 25% New (чередование созревших и новых).
   * Fallback: если все слова на кулдауне, выбирается слово с самым давним просмотром,
   * исключая только что свайпнутое (самое последнее) слово, если в пуле есть другие варианты.
   */
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

    // Исключаем недавние слова (увеличенное окно до 12)
    const recentSet = new Set(recentGreeks.slice(-RECENT_WINDOW_SIZE));
    const nonRecent = candidates.filter((item) => !recentSet.has(item.greek));
    const pool = nonRecent.length > 0 ? nonRecent : candidates;

    // Разделяем на очереди
    const urgentLearningDue: VocabularyItem[] = [];
    const reviewDue: VocabularyItem[] = [];
    const newCards: VocabularyItem[] = [];
    const coolingCards: VocabularyItem[] = [];

    for (const item of pool) {
      const record = srsMap[item.greek];

      // Новые слова (без записи)
      if (!record) {
        newCards.push(item);
        continue;
      }

      const isOverdue = now >= record.nextReviewAt;
      const isMastered = record.box >= MASTERY_THRESHOLD;

      // Срочное обучение: ошибки или box 0, и срок наступил, но не выученные
      if ((record.lapses > 0 || record.box === 0) && isOverdue && !isMastered) {
        urgentLearningDue.push(item);
        continue;
      }

      // Созревшие для повторения: box >= 1 и срок наступил (включая выученные)
      if (record.box >= 1 && isOverdue) {
        reviewDue.push(item);
        continue;
      }

      // Все остальные (на кулдауне или mastered, но срок не наступил)
      coolingCards.push(item);
    }

    // Сортируем reviewDue: сначала недоученные, затем выученные;
    // внутри каждой группы – по убыванию просрочки (чем дольше просрочено, тем выше приоритет)
    reviewDue.sort((a, b) => {
      const recordA = srsMap[a.greek]!;
      const recordB = srsMap[b.greek]!;
      const masteredA = recordA.box >= MASTERY_THRESHOLD;
      const masteredB = recordB.box >= MASTERY_THRESHOLD;

      // Приоритет: недоученные (false) идут раньше выученных (true)
      if (masteredA !== masteredB) {
        return masteredA ? 1 : -1;
      }

      const overdueA = now - recordA.nextReviewAt;
      const overdueB = now - recordB.nextReviewAt;
      return overdueB - overdueA;
    });

    // Сортируем coolingCards по давности последнего просмотра (для fallback)
    coolingCards.sort((a, b) => {
      const recordA = srsMap[a.greek];
      const recordB = srsMap[b.greek];
      const lastA = recordA?.lastReviewedAt ?? 0;
      const lastB = recordB?.lastReviewedAt ?? 0;
      return lastA - lastB; // сначала самые давние
    });

    // Функция случайного выбора из топ‑3 наиболее просроченных слов в reviewDue
    const pickFromReviewDue = (): VocabularyItem | null => {
      if (reviewDue.length === 0) return null;
      const topThree = reviewDue.slice(0, 3);
      const randomIndex = Math.floor(Math.random() * topThree.length);
      return topThree[randomIndex];
    };

    // 1. Приоритет: urgentLearningDue
    if (urgentLearningDue.length > 0) {
      return urgentLearningDue[Math.floor(Math.random() * urgentLearningDue.length)];
    }

    // 2. Микширование reviewDue и newCards (75% / 25%)
    const hasReviewDue = reviewDue.length > 0;
    const hasNewCards = newCards.length > 0;

    if (hasReviewDue && hasNewCards) {
      if (Math.random() < INTERLEAVING_RATIO) {
        return pickFromReviewDue()!;
      } else {
        return newCards[Math.floor(Math.random() * newCards.length)];
      }
    }

    // 3. Только reviewDue
    if (hasReviewDue) {
      return pickFromReviewDue()!;
    }

    // 4. Только newCards
    if (hasNewCards) {
      return newCards[Math.floor(Math.random() * newCards.length)];
    }

    // 5. Fallback: все слова на кулдауне (coolingCards)
    if (coolingCards.length > 0) {
      // Если есть несколько карточек на кулдауне, исключаем самое последнее свайпнутое слово,
      // чтобы не показывать его сразу снова.
      if (coolingCards.length > 1 && recentGreeks.length > 0) {
        const mostRecentGreek = recentGreeks[recentGreeks.length - 1];
        const filteredCooling = coolingCards.filter(
          (item) => item.greek !== mostRecentGreek
        );
        if (filteredCooling.length > 0) {
          return filteredCooling[0]; // самое давнее из оставшихся
        }
        // Если после исключения не осталось карточек, возвращаем самую давнюю из исходных
        // (такая ситуация возможна, если все кандидаты в coolingCards, кроме recent, отсутствуют)
      }
      return coolingCards[0];
    }

    // Крайний случай: если pool пуст (все в recent), берем из исходных кандидатов
    // с самым давним просмотром
    const fallbackCandidates = candidates
      .filter((item) => !recentSet.has(item.greek))
      .sort((a, b) => {
        const recordA = srsMap[a.greek];
        const recordB = srsMap[b.greek];
        const lastA = recordA?.lastReviewedAt ?? 0;
        const lastB = recordB?.lastReviewedAt ?? 0;
        return lastA - lastB;
      });

    if (fallbackCandidates.length > 0) {
      return fallbackCandidates[0];
    }

    // Абсолютный fallback: первое слово из candidates
    return candidates[0];
  },
};
