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
  const showPronunciationButton =
    state.directionGreekToRussian || state.isCardRevealed;

  const {
    offsetX,
    isDragging,
    swipeProgress,
    triggerSwipe,
    consumeTapAllowed,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
  } = useSwipeGesture((isKnown) => dispatch({ type: 'CARD_GRADED', isKnown }));

  const stampOpacity = Math.min(1, Math.abs(swipeProgress));
  const srsStatusLabel =
    currentBox >= MASTERY_THRESHOLD
      ? 'Выучено ★'
      : currentBox > 0
      ? `В процессе · ${currentBox}/${MASTERY_THRESHOLD}`
      : 'Новое';
  const srsStatusClass =
    currentBox >= MASTERY_THRESHOLD
      ? 'border-emerald-400/30 bg-emerald-500/15 text-emerald-300'
      : currentBox > 0
      ? 'border-amber-400/30 bg-amber-500/15 text-amber-300'
      : 'border-slate-700/80 bg-slate-900/70 text-slate-400';

  const borderColorClass =
    offsetX > 45
      ? 'border-emerald-500'
      : offsetX < -45
      ? 'border-rose-500'
      : 'border-slate-700/80';

  return (
    <div className="flex h-full min-h-0 flex-col justify-between gap-2.5">
      <div className="flex min-h-0 flex-1 items-center justify-center">
        <div
          role="button"
          tabIndex={0}
          aria-label={
            state.isCardRevealed
              ? 'Карточка слова. Проведите влево или вправо для оценки.'
              : 'Показать перевод и ассоциацию'
          }
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              dispatch({ type: 'SWIPE_CARD_FLIPPED' });
            }
          }}
          onClick={() => {
            if (!consumeTapAllowed()) return;
            dispatch({ type: 'SWIPE_CARD_FLIPPED' });
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          style={{
            transform: `translateX(${offsetX}px) rotate(${offsetX * 0.035}deg)`,
            transition: isDragging
              ? 'none'
              : 'transform 0.2s ease, border-color 0.2s ease',
          }}
          className={`relative flex h-full max-h-[500px] w-full cursor-pointer touch-pan-y select-none flex-col items-center rounded-3xl border ${borderColorClass} bg-gradient-to-b from-[#182338] to-[#101927] p-3.5 text-center shadow-2xl will-change-transform sm:p-4`}
        >
          {offsetX > 15 && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-4 z-30 -rotate-6 rounded-xl border-2 border-emerald-300 bg-emerald-950/90 px-3 py-1.5 text-sm font-black tracking-widest text-emerald-300 shadow-[0_0_24px_rgba(16,185,129,0.5)]"
              style={{ opacity: stampOpacity }}
            >
              ЗНАЮ ✓
            </div>
          )}

          {offsetX < -15 && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-4 z-30 rotate-6 rounded-xl border-2 border-rose-300 bg-rose-950/90 px-3 py-1.5 text-sm font-black tracking-widest text-rose-300 shadow-[0_0_24px_rgba(244,63,94,0.5)]"
              style={{ opacity: stampOpacity }}
            >
              ПОВТОРИТЬ ↺
            </div>
          )}

          <div className="flex w-full shrink-0 items-start justify-between gap-2">
            <div className="flex min-w-0 flex-col items-start gap-1.5">
              <span className="inline-flex h-6 max-w-full select-none items-center truncate rounded-full bg-sky-400/15 px-2.5 text-[10px] font-semibold uppercase leading-none tracking-wider text-sky-400">
                {currentCard.module}
              </span>
              <div className="flex max-w-full items-center gap-1.5">
                <span
                  className={`inline-flex h-5 shrink-0 items-center rounded-full border px-2 text-[10px] font-bold leading-none ${srsStatusClass}`}
                >
                  {srsStatusLabel}
                </span>
                <span
                  className="truncate text-[10px] font-medium leading-none text-slate-500"
                  title={intervalLabel}
                >
                  {intervalLabel}
                </span>
              </div>
            </div>

            {showPronunciationButton ? (
              <button
                type="button"
                aria-label="Произнести греческое слово"
                onClick={(event) => {
                  event.stopPropagation();
                  speakGreek(currentCard.greek);
                }}
                className="flex h-10 w-10 shrink-0 select-none items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/15 text-sky-400 transition active:scale-90"
              >
                <VolumeOnIcon className="h-5 w-5" />
              </button>
            ) : (
              <span aria-hidden="true" className="h-10 w-10 shrink-0" />
            )}
          </div>

          <div
            key={state.isCardRevealed ? 'card-revealed' : 'card-concealed'}
            className="animate-card-flip my-auto flex min-h-0 w-full flex-col items-center justify-center gap-2 py-2"
          >
            <div
              className={`flex w-full items-center justify-center px-1 transition-[padding] duration-200 ${
                state.isCardRevealed ? 'py-0.5' : 'min-h-[104px] py-2.5'
              }`}
            >
              {state.directionGreekToRussian ? (
                <div className="max-w-full select-text text-3xl font-extrabold leading-tight text-white break-words sm:text-4xl">
                  {currentCard.greek}
                </div>
              ) : (
                <div className="max-w-full select-text break-words text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  {currentCard.russian}
                </div>
              )}
            </div>

            <div className="flex w-full shrink-0 flex-col items-center justify-center">
              {state.isCardRevealed ? (
                <div className="animate-fade-up flex w-full flex-col items-center gap-2">
                  {state.directionGreekToRussian ? (
                    <div className="max-w-full select-text break-words text-lg font-bold leading-snug text-teal-300 sm:text-xl">
                      {currentCard.russian}
                    </div>
                  ) : (
                    <div className="max-w-full select-text break-words text-xl font-extrabold leading-tight text-teal-300 sm:text-2xl">
                      {currentCard.greek}
                    </div>
                  )}

                  {currentCard.grammarHint && (
                    <div className="rounded-lg bg-amber-500/15 px-2.5 py-0.5 text-[11px] font-semibold leading-relaxed text-amber-400">
                      {currentCard.grammarHint}
                    </div>
                  )}

                  <CardIllustrationView item={currentCard} compact />

                  <button
                    type="button"
                    aria-label="Произнести греческий пример"
                    onClick={(event) => {
                      event.stopPropagation();
                      speakGreek(currentCard.example);
                    }}
                    className="flex w-full items-center gap-2 rounded-xl border-l-[3px] border-sky-400 bg-[#0a131f]/85 px-3 py-2 text-left text-[12px] leading-snug text-slate-200 transition hover:text-white"
                  >
                    <VolumeOnIcon className="h-4 w-4 shrink-0 text-sky-400" />
                    <span className="select-text">{currentCard.example}</span>
                  </button>
                </div>
              ) : (
                <div className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/45 px-4 py-2 text-[11px] font-medium text-slate-400">
                  Тапни для перевода и ассоциации 👆
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-stretch gap-2 pt-0.5">
        <button
          type="button"
          onClick={() => triggerSwipe(false)}
          className="inline-flex h-12 min-w-0 flex-1 select-none items-center justify-center gap-2 rounded-2xl border border-rose-500/40 bg-rose-500/15 px-3 text-sm font-extrabold leading-none text-rose-300 transition active:scale-95"
        >
          <ArrowLeftIcon className="h-4 w-4 shrink-0" />
          <span>Повторить</span>
        </button>

        {state.lastGradedCardSnapshot !== null && (
          <button
            type="button"
            aria-label="Отменить последнюю оценку карточки"
            onClick={() => dispatch({ type: 'UNDO_LAST_CARD_GRADE' })}
            className="inline-flex h-12 shrink-0 select-none items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/90 px-3 text-xs font-bold leading-none text-slate-300 transition hover:border-slate-500 hover:text-white active:scale-95"
          >
            ↶ Отменить
          </button>
        )}

        <button
          type="button"
          onClick={() => triggerSwipe(true)}
          className="inline-flex h-12 min-w-0 flex-1 select-none items-center justify-center gap-2 rounded-2xl border border-emerald-500/45 bg-emerald-500/20 px-3 text-sm font-extrabold leading-none text-emerald-300 transition active:scale-95"
        >
          <span>Знаю</span>
          <ArrowRightIcon className="h-4 w-4 shrink-0" />
        </button>
      </div>
    </div>
  );
};
