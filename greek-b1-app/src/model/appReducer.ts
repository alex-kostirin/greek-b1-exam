import { generateMatchBoard } from '../features/match/model/matchGenerator';
import { generateQuizQuestion } from '../features/quiz/model/quizGenerator';
import { srsService } from '../shared/services/srsService';
import { storageService } from '../shared/services/storageService';
import { VocabularyItem, WordSrsMap } from '../shared/types/vocabulary';
import { EssayUserProgress } from '../shared/types/essay';
import { AppIntent } from './appIntent';
import {
  CUSTOM_WORDS_MODULE,
  SMART_MIX_MODULE,
  selectAllVocabulary,
  selectCandidatePool,
} from './appSelectors';
import { AppState, LastGradedCardSnapshot } from './appState';

export function createInitialAppState(
  initialSrsMap: WordSrsMap,
  initialCustomWords: VocabularyItem[],
  initialEssayProgress: EssayUserProgress = { pinnedIds: [], completedIds: [], hintLevels: {} }
): AppState {
  const groupingMode = 'exam';
  const activeClickChapter = null;
  const pool = selectCandidatePool(
    SMART_MIX_MODULE,
    initialSrsMap,
    initialCustomWords,
    groupingMode,
    activeClickChapter
  );
  const allVocab = selectAllVocabulary(initialCustomWords);
  const firstCard = srsService.pickNextSmartCard(pool, initialSrsMap, []);

  return {
    activeTab: 'swipe',
    activeModule: SMART_MIX_MODULE,
    directionGreekToRussian: true,
    autoTtsEnabled: false,
    isCardRevealed: false,
    streakCount: 0,
    currentCard: firstCard,
    recentGreeks: [firstCard.greek],
    searchQuery: '',
    srsMap: initialSrsMap,
    customWords: initialCustomWords,
    quizQuestion: generateQuizQuestion(firstCard, allVocab),
    matchBoard: generateMatchBoard(pool),
    activeModal: 'none',
    groupingMode,
    activeClickChapter,
    essayProgress: initialEssayProgress,
    lastGradedCardSnapshot: null,
  };
}

export function appReducer(state: AppState, intent: AppIntent): AppState {
  switch (intent.type) {
    case 'TAB_SELECTED': {
      const pool = selectCandidatePool(
        state.activeModule,
        state.srsMap,
        state.customWords,
        state.groupingMode,
        state.activeClickChapter
      );
      const allVocab = selectAllVocabulary(state.customWords);
      return {
        ...state,
        activeTab: intent.tab,
        isCardRevealed: false,
        lastGradedCardSnapshot: null,
        quizQuestion:
          intent.tab === 'quiz'
            ? generateQuizQuestion(state.currentCard, allVocab)
            : state.quizQuestion,
        matchBoard:
          intent.tab === 'match' &&
          state.matchBoard.matchedGreeks.length === state.matchBoard.leftColumn.length
            ? generateMatchBoard(pool)
            : state.matchBoard,
      };
    }

    case 'MODULE_SELECTED': {
      const pool = selectCandidatePool(
        intent.module,
        state.srsMap,
        state.customWords,
        state.groupingMode,
        state.activeClickChapter
      );
      const allVocab = selectAllVocabulary(state.customWords);
      const nextCard = srsService.pickNextSmartCard(
        pool,
        state.srsMap,
        state.recentGreeks
      );
      return {
        ...state,
        activeModule: intent.module,
        currentCard: nextCard,
        recentGreeks: [...state.recentGreeks.slice(-8), nextCard.greek],
        isCardRevealed: false,
        lastGradedCardSnapshot: null,
        quizQuestion: generateQuizQuestion(nextCard, allVocab),
        matchBoard: generateMatchBoard(pool),
      };
    }

    case 'DIRECTION_TOGGLED':
      return {
        ...state,
        directionGreekToRussian: !state.directionGreekToRussian,
        isCardRevealed: false,
      };

    case 'AUTO_TTS_TOGGLED':
      return {
        ...state,
        autoTtsEnabled: !state.autoTtsEnabled,
      };

    case 'SWIPE_CARD_FLIPPED':
      return {
        ...state,
        isCardRevealed: !state.isCardRevealed,
      };

    case 'CARD_GRADED': {
      const now = Date.now();
      const currentGreek = state.currentCard.greek;
      const updatedRecord = srsService.gradeWord(
        state.srsMap[currentGreek],
        intent.isKnown,
        now
      );
      const updatedSrsMap: WordSrsMap = {
        ...state.srsMap,
        [currentGreek]: updatedRecord,
      };

      const snapshot: LastGradedCardSnapshot = {
        card: state.currentCard,
        previousRecord: state.srsMap[currentGreek],
        previousStreakCount: state.streakCount,
        wasKnown: intent.isKnown,
      };

      const nextPool = selectCandidatePool(
        state.activeModule,
        updatedSrsMap,
        state.customWords,
        state.groupingMode,
        state.activeClickChapter
      );
      const updatedRecent = [...state.recentGreeks.slice(-8), currentGreek];
      const nextCard = srsService.pickNextSmartCard(
        nextPool,
        updatedSrsMap,
        updatedRecent,
        now
      );

      return {
        ...state,
        srsMap: updatedSrsMap,
        streakCount: intent.isKnown ? state.streakCount + 1 : 0,
        isCardRevealed: false,
        currentCard: nextCard,
        recentGreeks: [...updatedRecent.slice(-8), nextCard.greek],
        lastGradedCardSnapshot: snapshot,
      };
    }

    case 'UNDO_LAST_CARD_GRADE': {
      if (!state.lastGradedCardSnapshot) return state;

      const { card, previousRecord, previousStreakCount } = state.lastGradedCardSnapshot;
      const updatedSrsMap = { ...state.srsMap };

      if (previousRecord) {
        updatedSrsMap[card.greek] = previousRecord;
      } else {
        delete updatedSrsMap[card.greek];
      }

      return {
        ...state,
        currentCard: card,
        streakCount: previousStreakCount,
        isCardRevealed: false,
        srsMap: updatedSrsMap,
        lastGradedCardSnapshot: null,
      };
    }

    case 'QUIZ_OPTION_SELECTED': {
      if (state.quizQuestion.selectedOptionGreek !== null) {
        return state;
      }
      const now = Date.now();
      const targetGreek = state.quizQuestion.targetItem.greek;
      const isCorrect = intent.optionGreek === targetGreek;
      const updatedRecord = srsService.gradeWord(
        state.srsMap[targetGreek],
        isCorrect,
        now
      );

      return {
        ...state,
        srsMap: {
          ...state.srsMap,
          [targetGreek]: updatedRecord,
        },
        streakCount: isCorrect ? state.streakCount + 1 : 0,
        quizQuestion: {
          ...state.quizQuestion,
          selectedOptionGreek: intent.optionGreek,
        },
      };
    }

    case 'QUIZ_NEXT_QUESTION': {
      const pool = selectCandidatePool(
        state.activeModule,
        state.srsMap,
        state.customWords,
        state.groupingMode,
        state.activeClickChapter
      );
      const allVocab = selectAllVocabulary(state.customWords);
      const nextTarget = srsService.pickNextSmartCard(
        pool,
        state.srsMap,
        state.recentGreeks
      );

      return {
        ...state,
        currentCard: nextTarget,
        recentGreeks: [...state.recentGreeks.slice(-8), nextTarget.greek],
        quizQuestion: generateQuizQuestion(nextTarget, allVocab),
      };
    }

    case 'MATCH_TILE_CLICKED': {
      const board = state.matchBoard;
      if (board.matchedGreeks.includes(intent.greekKey) || board.mismatchedPair !== null) {
        return state;
      }

      const nextLeft =
        intent.side === 'left'
          ? board.selectedLeftGreek === intent.greekKey
            ? null
            : intent.greekKey
          : board.selectedLeftGreek;

      const nextRight =
        intent.side === 'right'
          ? board.selectedRightGreek === intent.greekKey
            ? null
            : intent.greekKey
          : board.selectedRightGreek;

      if (nextLeft && nextRight) {
        const now = Date.now();
        if (nextLeft === nextRight) {
          const updatedMatched = [...board.matchedGreeks, nextLeft];
          const updatedRecord = srsService.gradeWord(state.srsMap[nextLeft], true, now);

          return {
            ...state,
            srsMap: {
              ...state.srsMap,
              [nextLeft]: updatedRecord,
            },
            streakCount: state.streakCount + 1,
            matchBoard: {
              ...board,
              selectedLeftGreek: null,
              selectedRightGreek: null,
              matchedGreeks: updatedMatched,
              mismatchedPair: null,
            },
          };
        }

        const penalizedLeft = srsService.gradeWord(state.srsMap[nextLeft], false, now);
        return {
          ...state,
          srsMap: {
            ...state.srsMap,
            [nextLeft]: penalizedLeft,
          },
          streakCount: 0,
          matchBoard: {
            ...board,
            selectedLeftGreek: null,
            selectedRightGreek: null,
            mismatchedPair: { leftGreek: nextLeft, rightGreek: nextRight },
          },
        };
      }

      return {
        ...state,
        matchBoard: {
          ...board,
          selectedLeftGreek: nextLeft,
          selectedRightGreek: nextRight,
        },
      };
    }

    case 'MATCH_MISMATCH_CLEARED':
      return {
        ...state,
        matchBoard: {
          ...state.matchBoard,
          mismatchedPair: null,
        },
      };

    case 'MATCH_NEW_ROUND': {
      const pool = selectCandidatePool(
        state.activeModule,
        state.srsMap,
        state.customWords,
        state.groupingMode,
        state.activeClickChapter
      );
      const smartSample = Array.from({ length: 5 }, (_, idx) =>
        srsService.pickNextSmartCard(
          pool,
          state.srsMap,
          state.recentGreeks.concat(idx.toString())
        )
      );
      const uniqueSample = Array.from(
        new Map(smartSample.map((item) => [item.greek, item])).values()
      );
      const deckForMatch = uniqueSample.length >= 4 ? uniqueSample : pool;

      return {
        ...state,
        matchBoard: generateMatchBoard(deckForMatch),
      };
    }

    case 'SEARCH_QUERY_CHANGED':
      return {
        ...state,
        searchQuery: intent.query,
      };

    case 'MODAL_OPENED':
      return {
        ...state,
        activeModal: intent.modal,
      };

    case 'MODAL_CLOSED':
      return {
        ...state,
        activeModal: 'none',
      };

    case 'CUSTOM_WORD_ADDED': {
      const newWord: VocabularyItem = {
        module: CUSTOM_WORDS_MODULE,
        greek: intent.greek.trim(),
        grammarHint: 'свое слово',
        russian: intent.russian.trim(),
        example: intent.example.trim() || 'Мое слово с урока',
      };
      const updatedCustomWords = [
        newWord,
        ...state.customWords.filter((item) => item.greek !== newWord.greek),
      ];
      return {
        ...state,
        customWords: updatedCustomWords,
        currentCard: newWord,
        activeModal: 'none',
      };
    }

    case 'BACKUP_RESTORED': {
      const mergedSrs = storageService.mergeSrsMaps(state.srsMap, intent.srsMap);
      const existingGreeks = new Set(state.customWords.map((item) => item.greek));
      const mergedCustom = [
        ...state.customWords,
        ...intent.customWords.filter((item) => !existingGreeks.has(item.greek)),
      ];
      const mergedEssayProgress = storageService.mergeEssayProgress(
        state.essayProgress,
        intent.essayProgress
      );
      return {
        ...state,
        srsMap: mergedSrs,
        customWords: mergedCustom,
        essayProgress: mergedEssayProgress,
        activeModal: 'none',
      };
    }

    case 'PROGRESS_RESET_CONFIRMED':
      return {
        ...state,
        srsMap: {},
        streakCount: 0,
        essayProgress: { pinnedIds: [], completedIds: [], hintLevels: {} },
        lastGradedCardSnapshot: null,
        activeModal: 'none',
      };

    case 'CLOUD_STATE_HYDRATED': {
      const mergedSrs = storageService.mergeSrsMaps(state.srsMap, intent.srsMap);
      const existingGreeks = new Set(state.customWords.map((item) => item.greek));
      const mergedCustom = [
        ...state.customWords,
        ...intent.customWords.filter((item) => !existingGreeks.has(item.greek)),
      ];
      const mergedEssayProgress = storageService.mergeEssayProgress(
        state.essayProgress,
        intent.essayProgress
      );
      return {
        ...state,
        srsMap: mergedSrs,
        customWords: mergedCustom,
        essayProgress: mergedEssayProgress,
      };
    }

    case 'GROUPING_MODE_TOGGLED': {
      const newMode = intent.mode;
      const newClickChapter = newMode === 'click' ? (state.activeClickChapter ?? 1) : null;
      const newActiveModule = SMART_MIX_MODULE;
      const pool = selectCandidatePool(
        newActiveModule,
        state.srsMap,
        state.customWords,
        newMode,
        newClickChapter
      );
      const allVocab = selectAllVocabulary(state.customWords);
      const nextCard = srsService.pickNextSmartCard(pool, state.srsMap, state.recentGreeks);
      return {
        ...state,
        groupingMode: newMode,
        activeClickChapter: newClickChapter,
        activeModule: newActiveModule,
        currentCard: nextCard,
        recentGreeks: [...state.recentGreeks.slice(-8), nextCard.greek],
        isCardRevealed: false,
        lastGradedCardSnapshot: null,
        quizQuestion: generateQuizQuestion(nextCard, allVocab),
        matchBoard: generateMatchBoard(pool),
      };
    }

    case 'CLICK_CHAPTER_SELECTED': {
      const chapter = intent.chapter;
      const newActiveModule = SMART_MIX_MODULE;
      const pool = selectCandidatePool(
        newActiveModule,
        state.srsMap,
        state.customWords,
        'click',
        chapter
      );
      const allVocab = selectAllVocabulary(state.customWords);
      const nextCard = srsService.pickNextSmartCard(pool, state.srsMap, state.recentGreeks);
      return {
        ...state,
        activeClickChapter: chapter,
        activeModule: newActiveModule,
        currentCard: nextCard,
        recentGreeks: [...state.recentGreeks.slice(-8), nextCard.greek],
        isCardRevealed: false,
        lastGradedCardSnapshot: null,
        quizQuestion: generateQuizQuestion(nextCard, allVocab),
        matchBoard: generateMatchBoard(pool),
      };
    }

    case 'ESSAY_PIN_TOGGLED': {
      const pinnedIds = state.essayProgress.pinnedIds;
      const isPinned = pinnedIds.includes(intent.topicId);
      const updatedPinned = isPinned
        ? pinnedIds.filter(id => id !== intent.topicId)
        : [...pinnedIds, intent.topicId];
      return {
        ...state,
        essayProgress: {
          ...state.essayProgress,
          pinnedIds: updatedPinned,
        },
      };
    }

    case 'ESSAY_COMPLETED_TOGGLED': {
      const completedIds = state.essayProgress.completedIds;
      const isCompleted = completedIds.includes(intent.topicId);
      const updatedCompleted = isCompleted
        ? completedIds.filter(id => id !== intent.topicId)
        : [...completedIds, intent.topicId];
      return {
        ...state,
        essayProgress: {
          ...state.essayProgress,
          completedIds: updatedCompleted,
        },
      };
    }

    case 'ESSAY_HINT_STEP_ADVANCED': {
      const currentLevel = state.essayProgress.hintLevels[intent.topicId] ?? 0;
      const nextLevel = (currentLevel + 1) % 5;
      return {
        ...state,
        essayProgress: {
          ...state.essayProgress,
          hintLevels: {
            ...state.essayProgress.hintLevels,
            [intent.topicId]: nextLevel,
          },
        },
      };
    }

    case 'ESSAY_HINT_LEVEL_SET': {
      return {
        ...state,
        essayProgress: {
          ...state.essayProgress,
          hintLevels: {
            ...state.essayProgress.hintLevels,
            [intent.topicId]: intent.level,
          },
        },
      };
    }

    default:
      return state;
  }
}
