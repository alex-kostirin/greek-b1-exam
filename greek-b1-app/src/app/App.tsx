import React from 'react';
import { AddWordModalView } from '../features/dictionary/view/AddWordModalView';
import { BackupModalView } from '../features/dictionary/view/BackupModalView';
import { ConfirmResetModalView } from '../features/dictionary/view/ConfirmResetModalView';
import { DictionaryScreenView } from '../features/dictionary/view/DictionaryScreenView';
import { MatchScreenView } from '../features/match/view/MatchScreenView';
import { QuizScreenView } from '../features/quiz/view/QuizScreenView';
import { SwipeScreenView } from '../features/swipe/view/SwipeScreenView';
import { BottomNavigationView } from '../shared/ui/BottomNavigationView';
import { HeaderView } from '../shared/ui/HeaderView';
import { useAppStore } from './providers/AppStoreProvider';

export const App: React.FC = () => {
  const { state, dispatch, speakGreek } = useAppStore();

  return (
    <div className="h-dvh w-full flex flex-col bg-[#0b1120] text-slate-50 overflow-hidden select-none">
      <HeaderView state={state} dispatch={dispatch} />

      <main className="flex-1 flex flex-col justify-center px-3.5 py-2.5 relative overflow-y-auto overflow-x-hidden min-h-0">
        {state.activeTab === 'swipe' && (
          <SwipeScreenView state={state} dispatch={dispatch} speakGreek={speakGreek} />
        )}
        {state.activeTab === 'quiz' && (
          <QuizScreenView state={state} dispatch={dispatch} speakGreek={speakGreek} />
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
