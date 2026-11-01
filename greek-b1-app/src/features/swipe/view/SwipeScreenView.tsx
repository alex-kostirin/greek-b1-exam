import React from 'react';
import { AppIntent } from '../../../model/appIntent';
import { AppState } from '../../../model/appState';
import { srsService } from '../../../shared/services/srsService';
import { MASTERY_THRESHOLD } from '../../../shared/types/vocabulary';
import { CardIllustrationView } from '../../../shared/ui/CardIllustrationView';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  VolumeOnIcon,
} from '../../../shared/ui/Icons';
import { useSwipeGesture } from '../model/useSwipeGesture';

interface SwipeScreenViewProps {
  state: AppState;
  dispatch: (intent: AppIntent) => void;
  speakGreek: (text: string) => void;
}

export const SwipeScreenView: React.FC<SwipeScreenViewProps> = ({
  state,
  dispatch,
  speakGreek,
}) => {
  const currentCard = state.currentCard;
  const srsRecord = state.srsMap[currentCard.greek];
  const currentBox = srsRecord?.box ?? 0;
  const intervalLabel = srsService.formatNextIntervalLabel(srsRecord);

  const { offsetX, isDragging, onTouchStart, onTouchMove, onTouchEnd } =
    useSwipeGesture((isKnown) => dispatch({ type: 'CARD_GRADED', isKnown }));

  const promptText = state.directionGreekToRussian
    ? currentCard.greek
    : currentCard.russian;
  const answerText = state.directionGreekToRussian
    ? currentCard.russian
    : currentCard.greek;

  const borderColorClass =
    offsetX > 45
      ? 'border-emerald-500'
      : offsetX < -45
      ? 'border-rose-500'
      : 'border-slate-700/80';

  return (
    <div className="flex flex-col h-full justify-between gap-3">
      <div className="flex-1 flex items-center justify-center min-h-0">
        <div
          onClick={() => dispatch({ type: 'SWIPE_CARD_FLIPPED' })}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{
            transform: `translateX(${offsetX}px) rotate(${offsetX * 0.035}deg)`,
            transition: isDragging
              ? 'none'
              : 'transform 0.2s ease, border-color 0.2s ease',
          }}
          className={`w-full h-full max-h-[470px] bg-gradient-to-b from-[#182338] to-[#111927] border ${borderColorClass} rounded-3xl p-4 flex flex-col justify-between items-center text-center shadow-2xl cursor-pointer touch-pan-y`}
        >
          <div className="w-full flex flex-col gap-2.5">
            <div className="w-full flex items-center justify-between gap-2">
              <span className="h-6 px-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-sky-400 bg-sky-400/15 inline-flex items-center leading-none">
                {currentCard.module}
              </span>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-slate-900/80 border border-slate-700/80 px-2.5 py-1 rounded-full">
                  {Array.from({ length: MASTERY_THRESHOLD }).map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-colors ${
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
                  onClick={(event) => {
                    event.stopPropagation();
                    speakGreek(currentCard.greek);
                  }}
                  className="w-8 h-8 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-400 flex items-center justify-center active:scale-90 transition shrink-0"
                >
                  <VolumeOnIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            <CardIllustrationView item={currentCard} />
          </div>

          <div className="my-auto flex flex-col items-center px-1 py-1">
            <div className="text-[11px] text-slate-400 mb-1 font-medium leading-none">
              {intervalLabel}
            </div>
            <div className="text-[23px] font-extrabold leading-tight text-white break-words">
              {promptText}
            </div>
            {state.directionGreekToRussian && (
              <div className="mt-1.5 text-xs font-semibold text-amber-400 bg-amber-500/15 px-2.5 py-0.5 rounded-lg">
                {currentCard.grammarHint}
              </div>
            )}
          </div>

          <div className="w-full min-h-[104px] flex flex-col justify-center items-center gap-2">
            {state.isCardRevealed ? (
              <>
                <div className="text-lg font-bold text-teal-400 leading-snug">
                  {answerText}
                </div>
                {!state.directionGreekToRussian && (
                  <div className="text-xs font-semibold text-amber-400 bg-amber-500/15 px-2.5 py-0.5 rounded-lg">
                    {currentCard.grammarHint}
                  </div>
                )}
                <div
                  onClick={(event) => {
                    event.stopPropagation();
                    speakGreek(currentCard.example);
                  }}
                  className="w-full text-left text-[13px] text-slate-200 bg-[#0b1120]/80 border-l-3 border-sky-400 px-3 py-2 rounded-xl leading-snug flex items-center gap-2"
                >
                  <VolumeOnIcon className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{currentCard.example}</span>
                </div>
              </>
            ) : (
              <div className="w-full py-3.5 px-3 border border-dashed border-slate-700/90 rounded-2xl text-xs text-slate-400 flex flex-col items-center gap-1">
                <span className="font-semibold text-slate-300">
                  Тапни по карточке для перевода и примера
                </span>
                <span className="text-[11px] text-slate-500">
                  Порог изучения: {MASTERY_THRESHOLD} правильных ответа подряд
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-2.5 pt-0.5 shrink-0">
        <button
          type="button"
          onClick={() => dispatch({ type: 'CARD_GRADED', isKnown: false })}
          className="flex-1 h-12 px-3 rounded-2xl text-sm font-extrabold bg-rose-500/15 text-rose-300 border border-rose-500/40 inline-flex items-center justify-center gap-2 leading-none active:scale-95 transition"
        >
          <ArrowLeftIcon className="w-4 h-4 shrink-0" />
          <span>Не помню</span>
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'CARD_GRADED', isKnown: true })}
          className="flex-1 h-12 px-3 rounded-2xl text-sm font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/45 inline-flex items-center justify-center gap-2 leading-none active:scale-95 transition"
        >
          <span>Знаю ({Math.min(MASTERY_THRESHOLD, currentBox + 1)}/{MASTERY_THRESHOLD})</span>
          <ArrowRightIcon className="w-4 h-4 shrink-0" />
        </button>
      </div>
    </div>
  );
};
