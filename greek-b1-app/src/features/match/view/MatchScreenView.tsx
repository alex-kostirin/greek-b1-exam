import React from 'react';
import { AppIntent } from '../../../model/appIntent';
import { AppState } from '../../../model/appState';
import { RefreshIcon } from '../../../shared/ui/Icons';

interface MatchScreenViewProps {
  state: AppState;
  dispatch: (intent: AppIntent) => void;
}

export const MatchScreenView: React.FC<MatchScreenViewProps> = ({
  state,
  dispatch,
}) => {
  const {
    leftColumn,
    rightColumn,
    selectedLeftGreek,
    selectedRightGreek,
    matchedGreeks,
    mismatchedPair,
  } = state.matchBoard;

  const isComplete =
    matchedGreeks.length === leftColumn.length && leftColumn.length > 0;
  const progressPercent =
    leftColumn.length > 0
      ? (matchedGreeks.length / leftColumn.length) * 100
      : 0;

  const startNewRound = () => dispatch({ type: 'MATCH_NEW_ROUND' });

  return (
    <div className="relative my-auto flex w-full flex-col gap-3">
      <header className="space-y-2.5 rounded-2xl border border-slate-800/80 bg-[#101a2c]/80 p-3 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-sm font-extrabold text-slate-100">
              Соедини пары
            </h2>
            <p className="mt-0.5 text-[11px] font-medium tabular-nums text-slate-400">
              Собрано {matchedGreeks.length} из {leftColumn.length}
            </p>
          </div>

          <button
            type="button"
            onClick={startNewRound}
            className="inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-xl border border-sky-400/35 bg-sky-400/10 px-3 text-xs font-bold text-sky-300 transition hover:bg-sky-400/20 active:scale-95"
          >
            <RefreshIcon className="h-3.5 w-3.5 shrink-0" />
            <span>Новые пары</span>
          </button>
        </div>

        <div
          className="h-1.5 overflow-hidden rounded-full bg-slate-800"
          role="progressbar"
          aria-label="Прогресс раунда"
          aria-valuemin={0}
          aria-valuemax={leftColumn.length}
          aria-valuenow={matchedGreeks.length}
        >
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              isComplete
                ? 'bg-emerald-400'
                : 'bg-gradient-to-r from-sky-500 to-cyan-400'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {isComplete && (
        <div
          className="animate-pop flex flex-col items-center gap-3 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-center shadow-lg shadow-emerald-950/20 sm:flex-row sm:justify-between sm:text-left"
          role="status"
        >
          <div>
            <p className="text-sm font-extrabold text-emerald-200">
              🎉 Отлично! Все пары собраны
            </p>
            <p className="mt-1 text-xs text-emerald-300/70">
              Закрепи результат ещё одним коротким раундом.
            </p>
          </div>
          <button
            type="button"
            onClick={startNewRound}
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400 px-4 text-xs font-extrabold text-emerald-950 transition hover:bg-emerald-300 active:scale-95"
          >
            Следующий раунд
          </button>
        </div>
      )}

      <div className="grid w-full grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          {leftColumn.map((item) => {
            const isMatched = matchedGreeks.includes(item.greek);
            const isSelected = selectedLeftGreek === item.greek;
            const isError = mismatchedPair?.leftGreek === item.greek;
            const greekLabel = item.greek.split(' (')[0];
            const parentheticalIndex = item.greek.indexOf('(');
            const parentheticalNote =
              parentheticalIndex === -1
                ? null
                : item.greek.slice(parentheticalIndex).trim();

            let tileClass =
              'border-slate-700 bg-[#151f32] text-slate-100';

            if (isMatched) {
              tileClass =
                'opacity-35 scale-[0.98] border-emerald-500/40 bg-emerald-500/10 text-emerald-300';
            } else if (isError) {
              tileClass =
                'animate-shake border-rose-500 bg-rose-500/25 text-rose-100';
            } else if (isSelected) {
              tileClass =
                'border-sky-400 bg-sky-400/20 text-sky-50 shadow-md shadow-sky-950/30';
            }

            return (
              <button
                key={`left-${item.greek}`}
                type="button"
                disabled={isMatched}
                onClick={() =>
                  dispatch({
                    type: 'MATCH_TILE_CLICKED',
                    side: 'left',
                    greekKey: item.greek,
                  })
                }
                className={`relative flex min-h-[72px] items-center justify-center rounded-2xl border p-3 text-center text-[13px] font-semibold leading-tight transition-all duration-300 ${tileClass}`}
                aria-pressed={isSelected}
                aria-label={`Греческое слово: ${item.greek}`}
              >
                {isMatched && (
                  <span
                    className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/15 text-xs font-black text-emerald-300"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                )}

                <span className="flex min-w-0 flex-col items-center gap-1">
                  <span className="max-w-full break-words">{greekLabel}</span>
                  {parentheticalNote && (
                    <span className="max-w-full break-words text-[10px] font-medium leading-snug text-slate-400">
                      {parentheticalNote}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          {rightColumn.map((item) => {
            const isMatched = matchedGreeks.includes(item.greek);
            const isSelected = selectedRightGreek === item.greek;
            const isError = mismatchedPair?.rightGreek === item.greek;

            let tileClass =
              'border-slate-700 bg-[#151f32] text-slate-100';

            if (isMatched) {
              tileClass =
                'opacity-35 scale-[0.98] border-emerald-500/40 bg-emerald-500/10 text-emerald-300';
            } else if (isError) {
              tileClass =
                'animate-shake border-rose-500 bg-rose-500/25 text-rose-100';
            } else if (isSelected) {
              tileClass =
                'border-sky-400 bg-sky-400/20 text-sky-50 shadow-md shadow-sky-950/30';
            }

            return (
              <button
                key={`right-${item.greek}`}
                type="button"
                disabled={isMatched}
                onClick={() =>
                  dispatch({
                    type: 'MATCH_TILE_CLICKED',
                    side: 'right',
                    greekKey: item.greek,
                  })
                }
                className={`relative flex min-h-[72px] items-center justify-center break-words rounded-2xl border p-3 text-center text-[13px] font-semibold leading-tight transition-all duration-300 ${tileClass}`}
                aria-pressed={isSelected}
              >
                {isMatched && (
                  <span
                    className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/15 text-xs font-black text-emerald-300"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                )}
                <span>{item.russian}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
