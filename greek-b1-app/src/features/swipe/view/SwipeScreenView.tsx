import React from 'react';
import { AppIntent } from '../../../model/appIntent';
import { selectActiveDeck, selectCurrentCard } from '../../../model/appSelectors';
import { AppState } from '../../../model/appState';
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
  const deck = selectActiveDeck(state.activeModule, state.statusMap, state.customWords);
  const currentCard = selectCurrentCard(state);
  const currentIndex = (state.cardCursor % deck.length) + 1;

  const { offsetX, isDragging, onTouchStart, onTouchMove, onTouchEnd } = useSwipeGesture(
    (isKnown) => dispatch({ type: 'CARD_GRADED', isKnown })
  );

  const promptText = state.directionGreekToRussian
    ? currentCard.greek
    : currentCard.russian;
  const answerText = state.directionGreekToRussian
    ? currentCard.russian
    : currentCard.greek;

  const wordStatus = state.statusMap[currentCard.greek];
  const statusLabel =
    wordStatus === 'hard'
      ? '🔥 На повторе'
      : wordStatus === 'known'
      ? '✅ Выучено'
      : '🆕 Новое';

  const borderColorClass =
    offsetX > 45
      ? 'border-green-500'
      : offsetX < -45
      ? 'border-rose-500'
      : 'border-slate-700';

  return (
    <div className="flex flex-col h-full justify-between gap-3">
      <div className="flex-1 flex items-center justify-center min-h-0">
        <div
          onClick={() => dispatch({ type: 'SWIPE_CARD_FLIPPED' })}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{
            transform: `translateX(${offsetX}px) rotate(${offsetX * 0.04}deg)`,
            transition: isDragging ? 'none' : 'transform 0.2s ease, border-color 0.2s ease',
          }}
          className={`w-full h-full max-h-[430px] bg-gradient-to-br from-[#19253a] to-[#111928] border ${borderColorClass} rounded-3xl p-5 flex flex-col justify-between items-center text-center shadow-2xl cursor-pointer touch-pan-y`}
        >
          <div className="w-full flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 bg-sky-400/15 px-3 py-1 rounded-full">
              {currentCard.module} • {currentIndex}/{deck.length}
            </span>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                speakGreek(currentCard.greek);
              }}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-base active:scale-90 transition"
            >
              🔊
            </button>
          </div>

          <div className="my-auto flex flex-col items-center px-1">
            <div className="text-[11px] text-slate-400 mb-1.5 font-medium">
              {statusLabel}
            </div>
            <div className="text-[25px] font-extrabold leading-tight text-white break-words">
              {promptText}
            </div>
            {state.directionGreekToRussian && (
              <div className="mt-2 text-xs font-semibold text-amber-400 bg-amber-500/15 px-2.5 py-1 rounded-lg">
                {currentCard.grammarHint}
              </div>
            )}
          </div>

          <div className="w-14 h-0.5 bg-slate-700 my-2 shrink-0" />

          <div className="w-full min-h-[120px] flex flex-col justify-center items-center gap-2.5">
            {state.isCardRevealed ? (
              <>
                <div className="text-xl font-bold text-teal-400 leading-snug">
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
                  className="w-full text-left text-[13.5px] text-slate-200 bg-[#0b1120]/70 border-l-3 border-sky-400 px-3 py-2 rounded-xl leading-snug"
                >
                  🔊 {currentCard.example}
                </div>
              </>
            ) : (
              <div className="w-11/12 py-4 px-3 border border-dashed border-slate-700 rounded-2xl text-xs text-slate-400 leading-relaxed">
                👆 Тапни по карточке для перевода и примера
                <div className="text-[11px] opacity-75 mt-1">
                  Свайп влево 👈 (Еще учу) | Свайп вправо 👉 (Знаю)
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-2.5 pt-1 shrink-0">
        <button
          type="button"
          onClick={() => dispatch({ type: 'CARD_GRADED', isKnown: false })}
          className="flex-1 py-3.5 px-3 rounded-2xl text-[15px] font-extrabold bg-rose-500/15 text-rose-300 border border-rose-500/40 active:scale-95 transition"
        >
          👈 Еще учу
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'CARD_GRADED', isKnown: true })}
          className="flex-1 py-3.5 px-3 rounded-2xl text-[15px] font-extrabold bg-green-500/20 text-green-300 border border-green-500/45 active:scale-95 transition"
        >
          Знаю 👉
        </button>
      </div>
    </div>
  );
};
