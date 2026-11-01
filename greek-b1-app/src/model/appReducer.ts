import { generateMatchBoard } from '../features/match/model/matchGenerator';
import { generateQuizQuestion } from '../features/quiz/model/quizGenerator';
import { VocabularyItem } from '../shared/types/vocabulary';
import { AppIntent } from './appIntent';
import {
  CUSTOM_WORDS_MODULE,
  SMART_MIX_MODULE,
  selectActiveDeck,
  selectAllVocabulary,
} from './appSelectors';
import { AppState } from './appState';

export function createInitialAppState(
  initialStatusMap: AppState['statusMap'],
  initialCustomWords: VocabularyItem[]
): AppState {
  const initialDeck = selectActiveDeck(SMART_MIX_MODULE, initialStatusMap, initialCustomWords);
  const allVocab = selectAllVocabulary(initialCustomWords);

  return {
    activeTab: 'swipe',
    activeModule: SMART_MIX_MODULE,
    directionGreekToRussian: true,
    autoTtsEnabled: false,
    isCardRevealed: false,
    streakCount: 0,
    cardCursor: 0,
    searchQuery: '',
    statusMap: initialStatusMap,
    customWords: initialCustomWords,
    quizQuestion: generateQuizQuestion(initialDeck[0], allVocab),
    matchBoard: generateMatchBoard(initialDeck),
    activeModal: 'none',
  };
}

export function appReducer(state: AppState, intent: AppIntent): AppState {
  switch (intent.type) {
    case 'TAB_SELECTED': {
      const deck = selectActiveDeck(state.activeModule, state.statusMap, state.customWords);
      const allVocab = selectAllVocabulary(state.customWords);
      const targetItem = deck[state.cardCursor % deck.length];
      return {
        ...state,
        activeTab: intent.tab,
        isCardRevealed: false,
        quizQuestion:
          intent.tab === 'quiz'
            ? generateQuizQuestion(targetItem, allVocab)
            : state.quizQuestion,
        matchBoard:
          intent.tab === 'match' &&
          state.matchBoard.matchedGreeks.length === state.matchBoard.leftColumn.length
            ? generateMatchBoard(deck)
            : state.matchBoard,
      };
    }

    case 'MODULE_SELECTED': {
      const deck = selectActiveDeck(intent.module, state.statusMap, state.customWords);
      const allVocab = selectAllVocabulary(state.customWords);
      return {
        ...state,
        activeModule: intent.module,
        cardCursor: 0,
        isCardRevealed: false,
        quizQuestion: generateQuizQuestion(deck[0], allVocab),
        matchBoard: generateMatchBoard(deck),
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
      const currentDeck = selectActiveDeck(state.activeModule, state.statusMap, state.customWords);
      const currentItem = currentDeck[state.cardCursor % currentDeck.length];
      const updatedStatusMap = {
        ...state.statusMap,
        [currentItem.greek]: intent.isKnown ? ('known' as const) : ('hard' as const),
      };
      const nextDeck = selectActiveDeck(state.activeModule, updatedStatusMap, state.customWords);
      const nextCursor = (state.cardCursor + 1) % nextDeck.length;

      return {
        ...state,
        statusMap: updatedStatusMap,
        streakCount: intent.isKnown ? state.streakCount + 1 : 0,
        isCardRevealed: false,
        cardCursor: nextCursor,
      };
    }

    case 'QUIZ_OPTION_SELECTED': {
      if (state.quizQuestion.selectedOptionGreek !== null) {
        return state;
      }
      const targetGreek = state.quizQuestion.targetItem.greek;
      const isCorrect = intent.optionGreek === targetGreek;
      const updatedStatusMap = {
        ...state.statusMap,
        [targetGreek]: isCorrect ? ('known' as const) : ('hard' as const),
      };

      return {
        ...state,
        statusMap: updatedStatusMap,
        streakCount: isCorrect ? state.streakCount + 1 : 0,
        quizQuestion: {
          ...state.quizQuestion,
          selectedOptionGreek: intent.optionGreek,
        },
      };
    }

    case 'QUIZ_NEXT_QUESTION': {
      const deck = selectActiveDeck(state.activeModule, state.statusMap, state.customWords);
      const allVocab = selectAllVocabulary(state.customWords);
      const nextCursor = (state.cardCursor + 1) % deck.length;
      const nextTarget = deck[nextCursor];

      return {
        ...state,
        cardCursor: nextCursor,
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
        if (nextLeft === nextRight) {
          const updatedMatched = [...board.matchedGreeks, nextLeft];
          const updatedStatusMap = {
            ...state.statusMap,
            [nextLeft]: 'known' as const,
          };

          return {
            ...state,
            statusMap: updatedStatusMap,
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

        return {
          ...state,
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
      const deck = selectActiveDeck(state.activeModule, state.statusMap, state.customWords);
      return {
        ...state,
        matchBoard: generateMatchBoard(deck),
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
        activeModal: 'none',
      };
    }

    case 'BACKUP_RESTORED': {
      const mergedStatus = { ...state.statusMap, ...intent.statusMap };
      const existingGreeks = new Set(state.customWords.map((item) => item.greek));
      const mergedCustom = [
        ...state.customWords,
        ...intent.customWords.filter((item) => !existingGreeks.has(item.greek)),
      ];
      return {
        ...state,
        statusMap: mergedStatus,
        customWords: mergedCustom,
        activeModal: 'none',
      };
    }

    case 'PROGRESS_RESET_CONFIRMED':
      return {
        ...state,
        statusMap: {},
        streakCount: 0,
        activeModal: 'none',
      };

    case 'CLOUD_STATE_HYDRATED': {
      const mergedStatus = { ...state.statusMap, ...intent.statusMap };
      const existingGreeks = new Set(state.customWords.map((item) => item.greek));
      const mergedCustom = [
        ...state.customWords,
        ...intent.customWords.filter((item) => !existingGreeks.has(item.greek)),
      ];
      return {
        ...state,
        statusMap: mergedStatus,
        customWords: mergedCustom,
      };
    }
  }
}
