import React from 'react';
import { AppIntent } from '../../../model/appIntent';
import { splitGreekArticle } from '../../../model/appSelectors';
import { AppState } from '../../../model/appState';
import { MASTERY_THRESHOLD } from '../../../shared/types/vocabulary';
import { CardIllustrationView } from '../../../shared/ui/CardIllustrationView';
import { VolumeOnIcon } from '../../../shared/ui/Icons';

interface QuizScreenViewProps {
  state: AppState;
  dispatch: (intent: AppIntent) => void;
  speakGreek: (text: string) => void;
}

type GreekArticle = 'ο' | 'η' | 'το' | 'οι' | 'τα';

const getArticleBadgeClass = (article: GreekArticle): string => {
  if (article === 'ο' || article === 'οι') {
    return 'border-sky-400/40 bg-sky-500/20 text-sky-300';
  }
  if (article === 'η') {
    return 'border-pink-400/40 bg-pink-500/20 text-pink-300';
  }
  return 'border-amber-400/40 bg-amber-500/20 text-amber-300';
};

const GreekQuestionPrompt: React.FC<{ greek: string }> = ({ greek }) => {
  const { article, word, extra } = splitGreekArticle(greek);

  return (
    <div className="flex max-w-full select-text flex-col items-center">
      <div className="flex max-w-full flex-wrap items-center justify-center gap-2">
        {article && (
          <span
            className={`inline-flex shrink-0 items-center rounded-lg border px-2 py-1 text-base font-extrabold leading-none sm:text-lg ${getArticleBadgeClass(
              article,
            )}`}
          >
            {article}
          </span>
        )}
        <span className="max-w-full break-words text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          {word}
        </span>
      </div>
      {extra && (
        <span className="mt-1 text-xs font-medium leading-snug text-slate-400 sm:text-sm">
          {extra}
        </span>
      )}
    </div>
  );
};

const GreekOptionLabel: React.FC<{ greek: string }> = ({ greek }) => {
  const { article, word, extra } = splitGreekArticle(greek);

  return (
    <span className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
      {article && (
        <span
          className={`inline-flex shrink-0 items-center rounded-md border px-1.5 py-0.5 text-xs font-extrabold leading-none ${getArticleBadgeClass(
            article,
          )}`}
        >
          {article}
        </span>
      )}
      <span className="min-w-0 break-words">{word}</span>
      {extra && (
        <span className="text-[11px] font-medium leading-snug text-slate-400">
          {extra}
        </span>
      )}
    </span>
  );
};

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

  return (
    <div className="my-auto flex w-full flex-col gap-2.5 rounded-3xl border border-slate-700/80 bg-[#151f32] p-3.5 shadow-xl sm:p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex h-6 max-w-[55%] select-none items-center truncate rounded-full bg-sky-400/15 px-2.5 text-[10px] font-semibold uppercase leading-none tracking-wider text-sky-400">
          {targetItem.module}
        </span>

        <div className="flex items-center gap-2">
          <div
            aria-label={`Прогресс изучения: ${currentBox} из ${MASTERY_THRESHOLD}`}
            className="flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-2"
          >
            {Array.from({ length: MASTERY_THRESHOLD }).map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index < currentBox ? 'bg-emerald-400' : 'bg-slate-700'
                }`}
              />
            ))}
          </div>

          {showQuestionAudio && (
            <button
              type="button"
              aria-label="Произнести греческое слово"
              onClick={() => speakGreek(targetItem.greek)}
              className="flex h-9 w-9 shrink-0 select-none items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/15 text-sky-400 transition active:scale-90"
            >
              <VolumeOnIcon className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className="flex min-h-[58px] items-center justify-center break-words px-1 py-1 text-center">
        {state.directionGreekToRussian ? (
          <GreekQuestionPrompt greek={targetItem.greek} />
        ) : (
          <div className="select-text text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {targetItem.russian}
          </div>
        )}
      </div>

      {state.directionGreekToRussian && targetItem.grammarHint && (
        <div className="flex justify-center">
          <span className="rounded-lg bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-400">
            {targetItem.grammarHint}
          </span>
        </div>
      )}

      <div className="flex flex-col gap-2">
        {options.map((option) => {
          const isTarget = option.greek === targetItem.greek;
          const isSelected = selectedOptionGreek === option.greek;
          const isWrongSelection = hasAnswered && isSelected && !isTarget;

          let buttonStyle =
            'border-slate-700 bg-slate-800/90 text-slate-100 active:scale-[0.99]';
          let animationClass = '';

          if (hasAnswered) {
            if (isTarget) {
              buttonStyle =
                'border-emerald-500 bg-emerald-500/25 text-emerald-200';
              animationClass = 'animate-pop';
            } else if (isSelected) {
              buttonStyle = 'border-rose-500 bg-rose-500/25 text-rose-200';
              animationClass = 'animate-shake';
            } else {
              buttonStyle =
                'border-slate-800 bg-slate-900/60 text-slate-500';
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
              className={`flex min-h-[48px] w-full select-none items-center justify-between gap-3 rounded-2xl border px-3.5 py-2.5 text-left text-sm font-semibold leading-snug transition ${buttonStyle} ${animationClass}`}
            >
              <span className="min-w-0 flex-1">
                {state.directionGreekToRussian ? (
                  option.russian
                ) : (
                  <GreekOptionLabel greek={option.greek} />
                )}
              </span>

              {hasAnswered && isTarget && (
                <span
                  aria-label="Правильный ответ"
                  className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-base font-black text-emerald-300"
                >
                  ✓
                </span>
              )}

              {isWrongSelection && (
                <span
                  aria-label="Неправильный ответ"
                  className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-400/20 text-base font-black text-rose-300"
                >
                  ✗
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div
        aria-live="polite"
        className="flex min-h-[176px] flex-col justify-center border-t border-slate-800/80 pt-2.5"
      >
        {hasAnswered ? (
          <div className="animate-fade-up flex w-full flex-col items-center gap-2">
            <CardIllustrationView item={targetItem} compact />

            <button
              type="button"
              aria-label="Произнести греческий пример"
              onClick={() => speakGreek(targetItem.example)}
              className="inline-flex w-full items-center gap-2 rounded-xl border-l-[3px] border-sky-400 bg-[#0a131f]/85 px-3 py-2 text-left text-[12px] leading-snug text-slate-200 transition hover:text-white"
            >
              <VolumeOnIcon className="h-4 w-4 shrink-0 text-sky-400" />
              <span className="select-text">{targetItem.example}</span>
            </button>

            <button
              type="button"
              onClick={() => dispatch({ type: 'QUIZ_NEXT_QUESTION' })}
              className="inline-flex min-h-[42px] w-full select-none items-center justify-center rounded-xl border border-sky-400/50 bg-sky-400/15 px-4 text-sm font-extrabold text-sky-300 transition hover:bg-sky-400/25 active:scale-[0.98]"
            >
              Дальше →
            </button>
          </div>
        ) : (
          <p className="px-4 text-center text-xs leading-relaxed text-slate-500">
            Выберите ответ — после него появятся пример и ассоциация
          </p>
        )}
      </div>
    </div>
  );
};
