import React from 'react';
import { AddWordModalView } from '../features/dictionary/view/AddWordModalView';
import { BackupModalView } from '../features/dictionary/view/BackupModalView';
import { ConfirmResetModalView } from '../features/dictionary/view/ConfirmResetModalView';
import { DictionaryScreenView } from '../features/dictionary/view/DictionaryScreenView';
import { EssaysScreenView } from '../features/essays/view/EssaysScreenView';
import { MatchScreenView } from '../features/match/view/MatchScreenView';
import { QuizScreenView } from '../features/quiz/view/QuizScreenView';
import { SwipeScreenView } from '../features/swipe/view/SwipeScreenView';
import { BottomNavigationView } from '../shared/ui/BottomNavigationView';
import { HeaderView } from '../shared/ui/HeaderView';
import { useAppStore } from './providers/AppStoreProvider';

export const App: React.FC = () => {
  const { state, dispatch, speakGreek } = useAppStore();

  return (
    <div className="h-dvh w-full flex flex-col overflow-hidden bg-[#0a131f] text-slate-50">
      <HeaderView state={state} dispatch={dispatch} />

      <main className="relative min-h-0 w-full flex-1 overflow-y-auto overflow-x-hidden">
        <div
          className={
            state.activeTab === 'swipe'
              ? 'max-w-lg mx-auto w-full h-full flex flex-col justify-center px-3.5 py-2'
              : state.activeTab === 'quiz' || state.activeTab === 'match'
              ? 'max-w-lg mx-auto w-full min-h-full flex flex-col px-3.5 py-2.5'
              : 'max-w-3xl mx-auto w-full px-3.5 py-3'
          }
        >
          {state.activeTab === 'swipe' && (
            <SwipeScreenView
              state={state}
              dispatch={dispatch}
              speakGreek={speakGreek}
            />
          )}
          {state.activeTab === 'quiz' && (
            <QuizScreenView
              state={state}
              dispatch={dispatch}
              speakGreek={speakGreek}
            />
          )}
          {state.activeTab === 'match' && (
            <MatchScreenView state={state} dispatch={dispatch} />
          )}
          {state.activeTab === 'list' && (
            <DictionaryScreenView
              state={state}
              dispatch={dispatch}
              speakGreek={speakGreek}
            />
          )}
          {state.activeTab === 'essays' && (
            <EssaysScreenView
              state={state}
              dispatch={dispatch}
              speakGreek={speakGreek}
            />
          )}
        </div>
      </main>

      <BottomNavigationView
        activeTab={state.activeTab}
        onSelectTab={(tab) => dispatch({ type: 'TAB_SELECTED', tab })}
      />

      {state.activeModal === 'addWord' && <AddWordModalView dispatch={dispatch} />}
      {state.activeModal === 'backup' && (
        <BackupModalView state={state} dispatch={dispatch} />
      )}
      {state.activeModal === 'confirmReset' && (
        <ConfirmResetModalView dispatch={dispatch} />
      )}
    </div>
  );
};
