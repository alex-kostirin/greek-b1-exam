import React from 'react';
import { AppIntent } from '../../../model/appIntent';
import { AppState } from '../../../model/appState';
import { MASTERY_THRESHOLD } from '../../../shared/types/vocabulary';
import { CardIllustrationView } from '../../../shared/ui/CardIllustrationView';
import { VolumeOnIcon } from '../../../shared/ui/Icons';

interface QuizScreenViewProps {
  state: AppState;
  dispatch: (intent: AppIntent) => void;
  speakGreek: (text: string) => void;
}

export const QuizScreenView: React.FC<QuizScreenViewProps> = ({
  state,
  dispatch,
  speakGreek,
}) => {
  const { targetItem, options, selectedOptionGreek } = state.quizQuestion;
  const srsRecord = state.srsMap[targetItem.greek];
  const currentBox = srsRecord?.box ?? 0;

  const questionPrompt = state.directionGreekToRussian
    ? targetItem.greek
    : targetItem.russian;

  return (
    <div className="w-full my-auto bg-[#151f32] border border-slate-700/80 rounded-3xl p-4 flex flex-col gap-3 shadow-xl">
      <div className="flex items-center justify-between gap-2">
        <span className="h-6 px-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-sky-400 bg-sky-400/15 inline-flex items-center leading-none">
          {targetItem.module}
        </span>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-900/80 border border-slate-700/80 px-2.5 py-1 rounded-full">
            {Array.from({ length: MASTERY_THRESHOLD }).map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx < currentBox ? 'bg-emerald-400' : 'bg-slate-700'
                }`}
              />
            ))}
            <span className="text-[10px] font-bold text-slate-400 ml-1 leading-none">
              {currentBox}/{MASTERY_THRESHOLD}
            </span>
          </div>

          <button
            type="button"
            onClick={() => speakGreek(targetItem.greek)}
            className="w-8 h-8 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-400 flex items-center justify-center active:scale-90 transition shrink-0"
          >
            <VolumeOnIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      <CardIllustrationView item={targetItem} compact />

      <div className="text-xl font-extrabold text-center text-white leading-snug">
        {questionPrompt}
      </div>

      {state.directionGreekToRussian && (
        <div className="flex justify-center">
          <span className="text-xs font-semibold text-amber-400 bg-amber-500/15 px-2.5 py-0.5 rounded-lg">
            {targetItem.grammarHint}
          </span>
        </div>
      )}

      <div className="flex flex-col gap-2">
        {options.map((option) => {
          const optionLabel = state.directionGreekToRussian
            ? option.russian
            : option.greek;
          const isTarget = option.greek === targetItem.greek;
          const isSelected = selectedOptionGreek === option.greek;

          let buttonStyle =
            'bg-slate-800/90 border-slate-700 text-slate-100 active:scale-[0.99]';

          if (selectedOptionGreek !== null) {
            if (isTarget) {
              buttonStyle = 'bg-emerald-500/25 border-emerald-500 text-emerald-300';
            } else if (isSelected) {
              buttonStyle = 'bg-rose-500/25 border-rose-500 text-rose-300';
            }
          }

          return (
            <button
              key={option.greek}
              type="button"
              disabled={selectedOptionGreek !== null}
              onClick={() =>
                dispatch({
                  type: 'QUIZ_OPTION_SELECTED',
                  optionGreek: option.greek,
                })
              }
              className={`w-full p-3 rounded-2xl border text-left text-sm font-semibold leading-snug transition ${buttonStyle}`}
            >
              {optionLabel}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => speakGreek(targetItem.example)}
        className="w-full text-xs text-slate-400 inline-flex items-center justify-center gap-1.5 pt-0.5 hover:text-slate-200 transition"
      >
        <VolumeOnIcon className="w-3.5 h-3.5 text-sky-400 shrink-0" />
        <span className="truncate">{targetItem.example}</span>
      </button>
    </div>
  );
};
