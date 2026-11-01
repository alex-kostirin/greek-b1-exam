import React from 'react';
import { AppIntent } from '../../../model/appIntent';

interface ConfirmResetModalViewProps {
  dispatch: (intent: AppIntent) => void;
}

export const ConfirmResetModalView: React.FC<ConfirmResetModalViewProps> = ({
  dispatch,
}) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-xs bg-[#151f32] border border-slate-700 rounded-3xl p-5 flex flex-col gap-3.5 text-center shadow-2xl">
        <div className="text-base font-extrabold text-white">
          Сбросить весь прогресс?
        </div>
        <div className="text-xs text-slate-400 leading-relaxed">
          Отметки выученных слов будут очищены, но добавленные тобой слова останутся в списке.
        </div>
        <div className="flex gap-2 pt-1">
          <button
            type="button"
            onClick={() => dispatch({ type: 'MODAL_CLOSED' })}
            className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300"
          >
            Отмена
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: 'PROGRESS_RESET_CONFIRMED' })}
            className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-rose-500 text-white"
          >
            Сбросить
          </button>
        </div>
      </div>
    </div>
  );
};
