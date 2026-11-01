import React from 'react';
import { AppIntent } from '../../../model/appIntent';
import { AppState } from '../../../model/appState';

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
  const questionPrompt = state.directionGreekToRussian
    ? targetItem.greek
    : targetItem.russian;

  return (
    <div className="w-full my-auto bg-[#151f32] border border-slate-700 rounded-3xl p-4 flex flex-col gap-3 shadow-xl">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 bg-sky-400/15 px-3 py-1 rounded-full">
          {targetItem.module}
        </span>
        <button
          type="button"
          onClick={() => speakGreek(targetItem.greek)}
          className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-base active:scale-90 transition"
        >
          🔊
        </button>
      </div>

      <div className="text-[22px] font-extrabold text-center text-white my-1 leading-snug">
        {questionPrompt}
      </div>

      {state.directionGreekToRussian && (
        <div className="flex justify-center">
          <span className="text-xs font-semibold text-amber-400 bg-amber-500/15 px-2.5 py-1 rounded-lg">
            {targetItem.grammarHint}
          </span>
        </div>
      )}

      <div className="flex flex-col gap-2 mt-1">
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
              buttonStyle = 'bg-green-500/25 border-green-500 text-green-300';
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
              className={`w-full p-3.5 rounded-2xl border text-left text-[14.5px] font-semibold leading-snug transition ${buttonStyle}`}
            >
              {optionLabel}
            </button>
          );
        })}
      </div>

      <div
        onClick={() => speakGreek(targetItem.example)}
        className="text-xs text-slate-400 text-center mt-1 cursor-pointer"
      >
        🔊 Пример: {targetItem.example}
      </div>
    </div>
  );
};
