import React, { useState } from 'react';
import { AppIntent } from '../../../model/appIntent';

interface AddWordModalViewProps {
  dispatch: (intent: AppIntent) => void;
}

export const AddWordModalView: React.FC<AddWordModalViewProps> = ({ dispatch }) => {
  const [greek, setGreek] = useState('');
  const [russian, setRussian] = useState('');
  const [example, setExample] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!greek.trim() || !russian.trim()) return;
    dispatch({
      type: 'CUSTOM_WORD_ADDED',
      greek,
      russian,
      example,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-[#151f32] border border-slate-700 rounded-3xl p-5 flex flex-col gap-3.5 shadow-2xl"
      >
        <div className="text-base font-extrabold text-white">
          ➕ Добавить свое слово
        </div>

        <input
          type="text"
          required
          value={greek}
          onChange={(event) => setGreek(event.target.value)}
          placeholder="На греческом (напр. η προθεσμία)"
          className="w-full bg-[#0b1120] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:border-sky-400"
        />

        <input
          type="text"
          required
          value={russian}
          onChange={(event) => setRussian(event.target.value)}
          placeholder="Перевод на русский"
          className="w-full bg-[#0b1120] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:border-sky-400"
        />

        <input
          type="text"
          value={example}
          onChange={(event) => setExample(event.target.value)}
          placeholder="Пример предложения (необязательно)"
          className="w-full bg-[#0b1120] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:border-sky-400"
        />

        <div className="flex gap-2 pt-1">
          <button
            type="button"
            onClick={() => dispatch({ type: 'MODAL_CLOSED' })}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-slate-300"
          >
            Отмена
          </button>
          <button
            type="submit"
            className="flex-1 py-2.5 rounded-xl text-sm font-bold bg-sky-400 text-slate-950"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};
