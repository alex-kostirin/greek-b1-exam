import React from 'react';
import { AppIntent } from '../../model/appIntent';
import { selectVocabularyStats } from '../../model/appSelectors';
import { AppState } from '../../model/appState';
import { ModuleSelectorView } from './ModuleSelectorView';

interface HeaderViewProps {
  state: AppState;
  dispatch: (intent: AppIntent) => void;
}

export const HeaderView: React.FC<HeaderViewProps> = ({ state, dispatch }) => {
  const stats = selectVocabularyStats(state);

  return (
    <header className="px-3.5 pt-2.5 pb-2 bg-[#0b1120]/95 border-b border-slate-800 flex flex-col gap-2 z-20 shrink-0">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-extrabold text-[15px] tracking-tight">
          <span>🇬🇷</span>
          <span>UCY B1 Тренажер</span>
          <span className="bg-amber-500/15 border border-amber-500/40 text-amber-400 px-2.5 py-0.5 rounded-full text-xs font-bold">
            🔥 {state.streakCount}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => dispatch({ type: 'DIRECTION_TOGGLED' })}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition ${
              !state.directionGreekToRussian
                ? 'border-sky-400 text-sky-400 bg-sky-400/15'
                : 'border-slate-700 bg-slate-800 text-slate-100'
            }`}
          >
            {state.directionGreekToRussian ? 'EL→RU' : 'RU→EL'}
          </button>

          <button
            type="button"
            onClick={() => dispatch({ type: 'AUTO_TTS_TOGGLED' })}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition ${
              state.autoTtsEnabled
                ? 'border-sky-400 text-sky-400 bg-sky-400/15'
                : 'border-slate-700 bg-slate-800 text-slate-100'
            }`}
          >
            {state.autoTtsEnabled ? '🔊 Авто' : '🔇 Звук'}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400 gap-2">
        <span>
          ✅ Выучено: <b className="text-green-400">{stats.knownCount}</b>
        </span>
        <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
          <div
            className="bg-green-500 h-full transition-all duration-300"
            style={{ width: `${stats.knownPercent.toFixed(1)}%` }}
          />
          <div
            className="bg-rose-500 h-full transition-all duration-300"
            style={{ width: `${stats.hardPercent.toFixed(1)}%` }}
          />
        </div>
        <span>
          🔥 Повтор: <b className="text-rose-400">{stats.hardCount}</b> /{' '}
          <b>{stats.totalCount}</b>
        </span>
      </div>

      {state.activeTab !== 'templates' && (
        <ModuleSelectorView
          activeModule={state.activeModule}
          customWords={state.customWords}
          onSelectModule={(module) => dispatch({ type: 'MODULE_SELECTED', module })}
        />
      )}
    </header>
  );
};
