import React from 'react';
import { AppIntent } from '../../../model/appIntent';
import { AppState } from '../../../model/appState';
import { RefreshIcon } from '../../../shared/ui/Icons';

interface MatchScreenViewProps {
  state: AppState;
  dispatch: (intent: AppIntent) => void;
}

export const MatchScreenView: React.FC<MatchScreenViewProps> = ({ state, dispatch }) => {
  const {
    leftColumn,
    rightColumn,
    selectedLeftGreek,
    selectedRightGreek,
    matchedGreeks,
    mismatchedPair,
  } = state.matchBoard;

  return (
    <div className="w-full my-auto flex flex-col gap-3">
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          Соедини пары ({matchedGreeks.length}/{leftColumn.length})
        </span>
        <button
          type="button"
          onClick={() => dispatch({ type: 'MATCH_NEW_ROUND' })}
          className="inline-flex items-center gap-1.5 text-sky-400 font-semibold leading-none active:scale-95 transition"
        >
          <RefreshIcon className="w-3.5 h-3.5 shrink-0" />
          <span>Новые пары</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full">
        <div className="flex flex-col gap-2">
          {leftColumn.map((item) => {
            const isMatched = matchedGreeks.includes(item.greek);
            const isSelected = selectedLeftGreek === item.greek;
            const isError = mismatchedPair?.leftGreek === item.greek;

            let tileClass = 'bg-[#151f32] border-slate-700 text-slate-100';
            if (isMatched) {
              tileClass =
                'opacity-20 pointer-events-none border-emerald-500 bg-emerald-500/10';
            } else if (isError) {
              tileClass = 'border-rose-500 bg-rose-500/25 text-white';
            } else if (isSelected) {
              tileClass = 'border-sky-400 bg-sky-400/20 text-white';
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
                className={`min-h-[64px] p-2.5 rounded-2xl border text-[13px] font-semibold flex items-center justify-center text-center leading-tight transition ${tileClass}`}
              >
                {item.greek.split(' (')[0]}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          {rightColumn.map((item) => {
            const isMatched = matchedGreeks.includes(item.greek);
            const isSelected = selectedRightGreek === item.greek;
            const isError = mismatchedPair?.rightGreek === item.greek;

            let tileClass = 'bg-[#151f32] border-slate-700 text-slate-100';
            if (isMatched) {
              tileClass =
                'opacity-20 pointer-events-none border-emerald-500 bg-emerald-500/10';
            } else if (isError) {
              tileClass = 'border-rose-500 bg-rose-500/25 text-white';
            } else if (isSelected) {
              tileClass = 'border-sky-400 bg-sky-400/20 text-white';
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
                className={`min-h-[64px] p-2.5 rounded-2xl border text-[13px] font-semibold flex items-center justify-center text-center leading-tight transition ${tileClass}`}
              >
                {item.russian}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
