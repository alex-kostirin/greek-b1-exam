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
  const hasAnswered = selectedOptionGreek !== null;
  const showQuestionAudio = state.directionGreekToRussian || hasAnswered;

  const questionPrompt = state.directionGreekToRussian
    ? targetItem.greek
    : targetItem.russian;

  return (
    <div className="w-full my-auto bg-[#151f32] border border-slate-700/80 rounded-3xl p-4 flex flex-col gap-3 shadow-xl">
      <div className="flex items-center justify-between gap-2">
        <span className="h-6 px-2.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-sky-400 bg-sky-400/15 inline-flex items-center leading-none">
          {targetItem.module}
        </span>

        <div className="flex items-center gap-2">
          <div
            aria-label={`Прогресс изучения: ${currentBox} из ${MASTERY_THRESHOLD}`}
            className="flex items-center gap-1 bg-slate-900/80 border border-slate-700/80 px-2.5 py-2 rounded-full"
          >
            {Array.from({ length: MASTERY_THRESHOLD }).map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx < currentBox ? 'bg-emerald-400' : 'bg-slate-700'
                }`}
              />
            ))}
          </div>

          {showQuestionAudio && (
            <button
              type="button"
              aria-label="Произнести греческое слово"
              onClick={() => speakGreek(targetItem.greek)}
              className="w-8 h-8 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-400 flex items-center justify-center active:scale-90 transition shrink-0"
            >
              <VolumeOnIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="text-3xl sm:text-4xl font-extrabold text-center text-white leading-tight break-words px-1 py-2">
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

          if (hasAnswered) {
            if (isTarget) {
              buttonStyle =
                'bg-emerald-500/25 border-emerald-500 text-emerald-300';
            } else if (isSelected) {
              buttonStyle = 'bg-rose-500/25 border-rose-500 text-rose-300';
            }
          }

          return (
            <button
              key={option.greek}
              type="button"
              disabled={hasAnswered}
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

      {hasAnswered && (
        <div className="flex flex-col items-center gap-2.5 pt-1">
          <CardIllustrationView item={targetItem} compact />

          <button
            type="button"
            onClick={() => speakGreek(targetItem.example)}
            className="w-full text-left text-[13px] text-slate-200 bg-[#0b1120]/80 border-l-[3px] border-sky-400 px-3 py-2 rounded-xl leading-snug inline-flex items-center gap-2 hover:text-white transition"
          >
            <VolumeOnIcon className="w-4 h-4 text-sky-400 shrink-0" />
            <span>{targetItem.example}</span>
          </button>
        </div>
      )}
    </div>
  );
};
