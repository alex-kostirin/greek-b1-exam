import React from 'react';
import { AppIntent } from '../../model/appIntent';
import { selectVocabularyStats } from '../../model/appSelectors';
import { AppState } from '../../model/appState';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  FlameIcon,
  VolumeOffIcon,
  VolumeOnIcon,
} from './Icons';
import { ModuleSelectorView } from './ModuleSelectorView';

interface HeaderViewProps {
  state: AppState;
  dispatch: (intent: AppIntent) => void;
}

export const HeaderView: React.FC<HeaderViewProps> = ({ state, dispatch }) => {
  const stats = selectVocabularyStats(state);

  return (
    <header className="px-3.5 pt-2.5 pb-2 bg-[#0b1120]/95 border-b border-slate-800/80 flex flex-col gap-2 z-20 shrink-0">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-xs font-black text-sky-400 shrink-0">
            B1
          </div>
          <span className="font-extrabold text-[15px] tracking-tight text-white truncate">
            Greek Trainer
          </span>
          <div className="inline-flex items-center gap-1 bg-amber-500/15 border border-amber-500/35 text-amber-400 px-2 py-0.5 rounded-full text-xs font-bold leading-none shrink-0">
            <FlameIcon className="w-3.5 h-3.5 shrink-0" />
            <span>{state.streakCount}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => dispatch({ type: 'DIRECTION_TOGGLED' })}
            className={`h-7 px-2.5 rounded-lg text-xs font-bold border inline-flex items-center justify-center gap-1 leading-none transition ${
              !state.directionGreekToRussian
                ? 'border-sky-400 text-sky-400 bg-sky-400/15'
                : 'border-slate-700 bg-slate-800/90 text-slate-100'
            }`}
          >
            <span>{state.directionGreekToRussian ? 'EL' : 'RU'}</span>
            <ArrowRightIcon className="w-3 h-3 shrink-0" />
            <span>{state.directionGreekToRussian ? 'RU' : 'EL'}</span>
          </button>

          <button
            type="button"
            onClick={() => dispatch({ type: 'AUTO_TTS_TOGGLED' })}
            className={`h-7 px-2.5 rounded-lg text-xs font-bold border inline-flex items-center justify-center gap-1.5 leading-none transition ${
              state.autoTtsEnabled
                ? 'border-sky-400 text-sky-400 bg-sky-400/15'
                : 'border-slate-700 bg-slate-800/90 text-slate-300'
            }`}
          >
            {state.autoTtsEnabled ? (
              <VolumeOnIcon className="w-3.5 h-3.5 shrink-0" />
            ) : (
              <VolumeOffIcon className="w-3.5 h-3.5 shrink-0" />
            )}
            <span>{state.autoTtsEnabled ? 'Авто' : 'Звук'}</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400 gap-2.5">
        <span className="inline-flex items-center gap-1 shrink-0 leading-none">
          <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Выучено:</span>
          <b className="text-emerald-400">{stats.masteredCount}</b>
        </span>

        <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
          <div
            className="bg-emerald-500 h-full transition-all duration-300"
            style={{ width: `${stats.masteredPercent.toFixed(1)}%` }}
          />
          <div
            className="bg-amber-500 h-full transition-all duration-300"
            style={{ width: `${stats.learningPercent.toFixed(1)}%` }}
          />
        </div>

        <span className="inline-flex items-center gap-1 shrink-0 leading-none">
          <span>Учу:</span>
          <b className="text-amber-400">{stats.learningCount}</b>
          <span className="text-slate-600">/</span>
          <b className="text-slate-300">{stats.totalCount}</b>
        </span>
      </div>

      <ModuleSelectorView
        activeModule={state.activeModule}
        customWords={state.customWords}
        onSelectModule={(module) => dispatch({ type: 'MODULE_SELECTED', module })}
      />
    </header>
  );
};
