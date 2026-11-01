import React, { useEffect, useState } from 'react';
import { AppIntent } from '../../../model/appIntent';
import { PlusIcon } from '../../../shared/ui/Icons';

interface AddWordModalViewProps {
  dispatch: (intent: AppIntent) => void;
}

interface FieldErrors {
  greek: string;
  russian: string;
}

export const AddWordModalView: React.FC<AddWordModalViewProps> = ({ dispatch }) => {
  const [greek, setGreek] = useState('');
  const [russian, setRussian] = useState('');
  const [example, setExample] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({ greek: '', russian: '' });

  const closeModal = () => dispatch({ type: 'MODAL_CLOSED' });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const trimmedGreek = greek.trim();
    const trimmedRussian = russian.trim();
    const nextErrors: FieldErrors = {
      greek: trimmedGreek ? '' : 'Введите греческое слово.',
      russian: trimmedRussian ? '' : 'Введите перевод на русский.',
    };

    if (!trimmedGreek || !trimmedRussian) {
      setErrors(nextErrors);
      return;
    }

    dispatch({
      type: 'CUSTOM_WORD_ADDED',
      greek: trimmedGreek,
      russian: trimmedRussian,
      example: example.trim(),
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <form
        onSubmit={handleSubmit}
        noValidate
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-word-modal-title"
        className="flex max-h-[90vh] w-full max-w-sm flex-col gap-3.5 overflow-y-auto rounded-3xl border border-slate-700 bg-[#151f32] p-5 shadow-2xl"
      >
        <div
          id="add-word-modal-title"
          className="flex items-center gap-2 text-base font-extrabold text-white"
        >
          <PlusIcon className="h-5 w-5 shrink-0 text-sky-400" />
          <span>Добавить свое слово</span>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="add-word-greek" className="block text-xs font-bold text-slate-300">
            Греческое слово (с артиклем)
          </label>
          <input
            id="add-word-greek"
            type="text"
            autoFocus
            autoComplete="off"
            value={greek}
            onChange={(event) => {
              setGreek(event.target.value);
              if (errors.greek) setErrors((current) => ({ ...current, greek: '' }));
            }}
            placeholder="Например, η προθεσμία"
            aria-invalid={Boolean(errors.greek)}
            aria-describedby={errors.greek ? 'add-word-greek-error' : undefined}
            className={`h-11 w-full rounded-xl border bg-[#0b1120] px-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400 ${
              errors.greek ? 'border-rose-500' : 'border-slate-700'
            }`}
          />
          {errors.greek && (
            <p id="add-word-greek-error" role="alert" className="text-xs text-rose-400">
              {errors.greek}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="add-word-russian" className="block text-xs font-bold text-slate-300">
            Перевод на русский
          </label>
          <input
            id="add-word-russian"
            type="text"
            autoComplete="off"
            value={russian}
            onChange={(event) => {
              setRussian(event.target.value);
              if (errors.russian) setErrors((current) => ({ ...current, russian: '' }));
            }}
            placeholder="Например, срок"
            aria-invalid={Boolean(errors.russian)}
            aria-describedby={errors.russian ? 'add-word-russian-error' : undefined}
            className={`h-11 w-full rounded-xl border bg-[#0b1120] px-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400 ${
              errors.russian ? 'border-rose-500' : 'border-slate-700'
            }`}
          />
          {errors.russian && (
            <p id="add-word-russian-error" role="alert" className="text-xs text-rose-400">
              {errors.russian}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="add-word-example" className="block text-xs font-bold text-slate-300">
            Пример или ассоциация
          </label>
          <input
            id="add-word-example"
            type="text"
            autoComplete="off"
            value={example}
            onChange={(event) => setExample(event.target.value)}
            placeholder="Необязательно"
            className="h-11 w-full rounded-xl border border-slate-700 bg-[#0b1120] px-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400"
          />
        </div>

        <div className="flex gap-2 pt-1">
          <button
            type="button"
            onClick={closeModal}
            className="h-11 flex-1 rounded-xl bg-slate-800 text-sm font-semibold text-slate-300 transition hover:bg-slate-700 active:scale-[0.98]"
          >
            Отмена
          </button>
          <button
            type="submit"
            className="h-11 flex-1 rounded-xl bg-sky-400 text-sm font-bold text-slate-950 transition hover:bg-sky-300 active:scale-[0.98]"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};
