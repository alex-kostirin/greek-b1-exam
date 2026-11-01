import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { AppIntent } from '../../model/appIntent';
import { appReducer, createInitialAppState } from '../../model/appReducer';
import { selectAllVocabulary } from '../../model/appSelectors';
import { AppState } from '../../model/appState';
import { BASE_VOCABULARY_DATASET } from '../../shared/data/vocabularyDataset';
import { speechService } from '../../shared/services/speechService';
import {
  storageService,
  UserAppSettings,
} from '../../shared/services/storageService';
import { telegramService } from '../../shared/services/telegramService';

interface AppStoreContextValue {
  state: AppState;
  dispatch: (intent: AppIntent) => void;
  speakGreek: (text: string) => void;
}

const AppStoreContext = createContext<AppStoreContextValue | null>(null);

export const AppStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, rawDispatch] = useReducer(appReducer, undefined, () =>
    createInitialAppState(
      storageService.loadLocalSrsMap(),
      storageService.loadLocalCustomWords(),
      storageService.loadLocalEssayProgress(),
      storageService.loadLocalSettings(),
    ),
  );

  useEffect(() => {
    telegramService.initialize();
    storageService.fetchCloudState(BASE_VOCABULARY_DATASET, (cloudPayload) => {
      rawDispatch({
        type: 'CLOUD_STATE_HYDRATED',
        srsMap: cloudPayload.srsMap,
        customWords: cloudPayload.customWords,
        essayProgress: cloudPayload.essayProgress,
        settings: cloudPayload.settings,
      });
    });
  }, []);

  useEffect(() => {
    const allVocabulary = selectAllVocabulary(state.customWords);
    const settings: UserAppSettings = {
      activeTab: state.activeTab,
      activeModule: state.activeModule,
      groupingMode: state.groupingMode,
      activeClickChapter: state.activeClickChapter,
      directionGreekToRussian: state.directionGreekToRussian,
      autoTtsEnabled: state.autoTtsEnabled,
      updatedAt: Date.now(),
    };

    storageService.persistState(
      state.srsMap,
      state.customWords,
      allVocabulary,
      state.essayProgress,
      settings,
    );
  }, [
    state.srsMap,
    state.customWords,
    state.essayProgress,
    state.activeTab,
    state.activeModule,
    state.groupingMode,
    state.activeClickChapter,
    state.directionGreekToRussian,
    state.autoTtsEnabled,
  ]);

  useEffect(() => {
    if (!state.autoTtsEnabled || !state.directionGreekToRussian) return;

    if (state.activeTab === 'swipe') {
      speechService.speakGreek(state.currentCard.greek);
    } else if (
      state.activeTab === 'quiz' &&
      state.quizQuestion.selectedOptionGreek === null
    ) {
      speechService.speakGreek(state.quizQuestion.targetItem.greek);
    }
  }, [
    state.activeTab,
    state.currentCard.greek,
    state.autoTtsEnabled,
    state.directionGreekToRussian,
    state.quizQuestion.targetItem.greek,
    state.quizQuestion.selectedOptionGreek,
  ]);

  useEffect(() => {
    if (
      state.activeTab !== 'quiz' ||
      state.quizQuestion.selectedOptionGreek === null
    ) {
      return;
    }

    const isCorrect =
      state.quizQuestion.selectedOptionGreek ===
      state.quizQuestion.targetItem.greek;
    const delayMs = isCorrect ? 650 : 1400;

    const timerId = window.setTimeout(() => {
      rawDispatch({ type: 'QUIZ_NEXT_QUESTION' });
    }, delayMs);

    return () => window.clearTimeout(timerId);
  }, [
    state.activeTab,
    state.quizQuestion.selectedOptionGreek,
    state.quizQuestion.targetItem.greek,
  ]);

  useEffect(() => {
    if (state.matchBoard.mismatchedPair === null) return;

    const timerId = window.setTimeout(() => {
      rawDispatch({ type: 'MATCH_MISMATCH_CLEARED' });
    }, 500);

    return () => window.clearTimeout(timerId);
  }, [state.matchBoard.mismatchedPair]);

  useEffect(() => {
    if (
      state.matchBoard.leftColumn.length > 0 &&
      state.matchBoard.matchedGreeks.length ===
        state.matchBoard.leftColumn.length
    ) {
      const timerId = window.setTimeout(() => {
        rawDispatch({ type: 'MATCH_NEW_ROUND' });
      }, 450);

      return () => window.clearTimeout(timerId);
    }
  }, [
    state.matchBoard.matchedGreeks.length,
    state.matchBoard.leftColumn.length,
  ]);

  const dispatch = useCallback(
    (intent: AppIntent) => {
      switch (intent.type) {
        case 'CARD_GRADED':
          telegramService.triggerHaptic(intent.isKnown ? 'success' : 'warning');
          break;

        case 'QUIZ_OPTION_SELECTED': {
          const isCorrect =
            intent.optionGreek === state.quizQuestion.targetItem.greek;
          telegramService.triggerHaptic(isCorrect ? 'success' : 'error');

          if (isCorrect && state.autoTtsEnabled) {
            speechService.speakGreek(state.quizQuestion.targetItem.greek);
          }
          break;
        }

        case 'MATCH_TILE_CLICKED':
          telegramService.triggerHaptic('light');

          if (intent.side === 'left' && state.autoTtsEnabled) {
            speechService.speakGreek(intent.greekKey);
          }
          break;

        case 'CUSTOM_WORD_ADDED':
        case 'BACKUP_RESTORED':
          telegramService.triggerHaptic('success');
          break;

        case 'ESSAY_COMPLETED_TOGGLED':
          telegramService.triggerHaptic('success');
          break;

        default:
          telegramService.triggerHaptic('light');
          break;
      }

      rawDispatch(intent);
    },
    [state.quizQuestion.targetItem.greek, state.autoTtsEnabled],
  );

  const speakGreek = useCallback((text: string) => {
    telegramService.triggerHaptic('light');
    speechService.speakGreek(text);
  }, []);

  return (
    <AppStoreContext.Provider value={{ state, dispatch, speakGreek }}>
      {children}
    </AppStoreContext.Provider>
  );
};

export function useAppStore(): AppStoreContextValue {
  const context = useContext(AppStoreContext);

  if (!context) {
    throw new Error('useAppStore must be used within AppStoreProvider');
  }

  return context;
}
