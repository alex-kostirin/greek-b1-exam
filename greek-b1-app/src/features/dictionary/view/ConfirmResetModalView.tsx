import React, { useEffect } from 'react';
import { AppIntent } from '../../../model/appIntent';

interface ConfirmResetModalViewProps {
  dispatch: (intent: AppIntent) => void;
}

export const ConfirmResetModalView: React.FC<ConfirmResetModalViewProps> = ({
  dispatch,
}) => {
  const closeModal = () => dispatch({ type: 'MODAL_CLOSED' });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-reset-title"
        aria-describedby="confirm-reset-description"
        className="flex w-full max-w-sm flex-col gap-4 rounded-3xl border border-rose-500/25 bg-[#151f32] p-5 text-center shadow-2xl"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-rose-500/25 bg-rose-500/10 text-2xl">
          <span aria-hidden="true">⚠️</span>
        </div>

        <div>
          <h2 id="confirm-reset-title" className="text-base font-extrabold text-white">
            Сбросить весь прогресс?
          </h2>
          <p
            id="confirm-reset-description"
            className="mt-2 text-xs leading-relaxed text-slate-400"
          >
            Отметки выученных слов и интервалы повторения будут очищены. Добавленные тобой
            слова останутся в списке. Это действие нельзя отменить.
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-1 sm:flex-row">
          <button
            type="button"
            autoFocus
            onClick={closeModal}
            className="h-11 flex-1 rounded-xl bg-sky-400 px-3 text-sm font-extrabold text-slate-950 transition hover:bg-sky-300 active:scale-[0.98]"
          >
            Отмена
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: 'PROGRESS_RESET_CONFIRMED' })}
            className="h-11 flex-1 rounded-xl border border-rose-500/60 bg-rose-500/10 px-3 text-xs font-bold text-rose-300 transition hover:bg-rose-500/20 active:scale-[0.98]"
          >
            Да, сбросить прогресс
          </button>
        </div>
      </div>
    </div>
  );
};
