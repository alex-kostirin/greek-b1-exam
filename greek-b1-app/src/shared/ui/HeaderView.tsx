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
  const showVocabularyControls = state.activeTab !== 'essays';

  return (
    <header className="z-20 flex shrink-0 flex-col gap-1.5 border-b border-slate-800/80 bg-[#0a131f]/95 px-3 pb-1.5 pt-2">
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-lg border border-sky-400/30 bg-sky-500/15 text-xs font-black text-sky-400">
            B1
          </div>
          <span className="truncate text-[15px] font-extrabold tracking-tight text-white">
            Greek Trainer
          </span>
          <div
            className="inline-flex h-7 shrink-0 select-none items-center gap-1 rounded-full border border-amber-500/35 bg-amber-500/15 px-2 text-xs font-bold leading-none text-amber-400"
            title={`Серия: ${state.streakCount}`}
          >
            <FlameIcon className="h-3.5 w-3.5 shrink-0" />
            <span>{state.streakCount}</span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            aria-label="Изменить направление перевода"
            onClick={() => dispatch({ type: 'DIRECTION_TOGGLED' })}
            className={`inline-flex h-9 select-none items-center justify-center gap-1 rounded-full border px-3 text-[11px] font-bold leading-none transition active:scale-95 ${
              !state.directionGreekToRussian
                ? 'border-sky-400/70 bg-sky-400/15 text-sky-300'
                : 'border-slate-700 bg-slate-900/90 text-slate-200'
            }`}
          >
            <span>{state.directionGreekToRussian ? 'EL' : 'RU'}</span>
            <ArrowRightIcon className="h-3 w-3 shrink-0" />
            <span>{state.directionGreekToRussian ? 'RU' : 'EL'}</span>
          </button>

          <button
            type="button"
            aria-label={
              state.autoTtsEnabled
                ? 'Отключить автоматическое озвучивание'
                : 'Включить автоматическое озвучивание'
            }
            aria-pressed={state.autoTtsEnabled}
            onClick={() => dispatch({ type: 'AUTO_TTS_TOGGLED' })}
            className={`inline-flex h-9 select-none items-center justify-center gap-1.5 rounded-full border px-3 text-[11px] font-bold leading-none transition active:scale-95 ${
              state.autoTtsEnabled
                ? 'border-sky-400/70 bg-sky-400/15 text-sky-300'
                : 'border-slate-700 bg-slate-900/90 text-slate-300'
            }`}
          >
            {state.autoTtsEnabled ? (
              <VolumeOnIcon className="h-4 w-4 shrink-0" />
            ) : (
              <VolumeOffIcon className="h-4 w-4 shrink-0" />
            )}
            <span>{state.autoTtsEnabled ? 'Авто' : 'Звук'}</span>
          </button>
        </div>
      </div>

      {showVocabularyControls && (
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex shrink-0 items-center gap-1 text-[10px] leading-none text-slate-400">
              <CheckCircleIcon className="h-3 w-3 shrink-0 text-emerald-400" />
              <span>Выучено:</span>
              <b className="text-emerald-400">{stats.masteredCount}</b>
            </span>

            <div
              className="flex h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-slate-800"
              aria-label={`Выучено ${stats.masteredPercent.toFixed(1)} процентов, изучается ${stats.learningPercent.toFixed(1)} процентов`}
            >
              <div
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${stats.masteredPercent.toFixed(1)}%` }}
              />
              <div
                className="h-full bg-amber-500 transition-all duration-300"
                style={{ width: `${stats.learningPercent.toFixed(1)}%` }}
              />
            </div>

            <span className="inline-flex shrink-0 items-center gap-0.5 text-[10px] leading-none text-slate-400">
              <span>Учу:</span>
              <b className="text-amber-400">{stats.learningCount}</b>
              <span className="text-slate-600">/</span>
              <b className="text-slate-300">{stats.totalCount}</b>
            </span>
          </div>

          <ModuleSelectorView
            activeModule={state.activeModule}
            customWords={state.customWords}
            groupingMode={state.groupingMode}
            activeClickChapter={state.activeClickChapter}
            onSelectModule={(module) =>
              dispatch({ type: 'MODULE_SELECTED', module })
            }
            onToggleGroupingMode={(mode) =>
              dispatch({ type: 'GROUPING_MODE_TOGGLED', mode })
            }
            onSelectClickChapter={(chapter) =>
              dispatch({ type: 'CLICK_CHAPTER_SELECTED', chapter })
            }
          />
        </div>
      )}
    </header>
  );
};
