import React, { useEffect, useState } from 'react';
import { AppIntent } from '../../../model/appIntent';
import { AppState } from '../../../model/appState';
import { storageService } from '../../../shared/services/storageService';

interface BackupModalViewProps {
  state: AppState;
  dispatch: (intent: AppIntent) => void;
}

type CopyStatus = 'idle' | 'copied' | 'error';

export const BackupModalView: React.FC<BackupModalViewProps> = ({ state, dispatch }) => {
  const currentCode = storageService.encodeBackupCode(state.srsMap, state.customWords);
  const [inputCode, setInputCode] = useState('');
  const [errorText, setErrorText] = useState('');
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');

  const closeModal = () => dispatch({ type: 'MODAL_CLOSED' });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
  };

  const handleRestore = () => {
    const trimmedCode = inputCode.trim();
    if (!trimmedCode) {
      setErrorText('Вставь код бэкапа перед восстановлением.');
      return;
    }

    const decoded = storageService.decodeBackupCode(trimmedCode);
    if (!decoded) {
      setErrorText('Неверный формат кода бэкапа. Проверь, что код скопирован полностью.');
      return;
    }

    setErrorText('');
    dispatch({
      type: 'BACKUP_RESTORED',
      srsMap: decoded.srsMap,
      customWords: decoded.customWords,
    });
  };

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
        aria-labelledby="backup-modal-title"
        className="flex max-h-[90vh] w-full max-w-md flex-col gap-4 overflow-y-auto rounded-3xl border border-slate-700 bg-[#151f32] p-5 shadow-2xl"
      >
        <div>
          <h2 id="backup-modal-title" className="text-base font-extrabold text-white">
            Бэкап и перенос прогресса
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-slate-400">
            Сохрани код в надёжном месте или восстанови прогресс на другом устройстве.
          </p>
        </div>

        <section className="space-y-2.5 rounded-2xl border border-slate-700/80 bg-slate-950/30 p-3">
          <div>
            <h3 className="text-sm font-extrabold text-sky-300">Экспорт</h3>
            <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">
              Текущий код содержит SRS-прогресс и добавленные тобой слова.
            </p>
          </div>

          <textarea
            rows={3}
            readOnly
            value={currentCode}
            onFocus={(event) => event.currentTarget.select()}
            aria-label="Текущий код бэкапа"
            className="w-full resize-none rounded-xl border border-slate-700 bg-[#0b1120] p-2.5 font-mono text-xs text-slate-300 outline-none focus:border-sky-400"
          />

          <button
            type="button"
            onClick={handleCopy}
            className="h-11 w-full rounded-xl border border-sky-400/40 bg-sky-400/10 text-sm font-bold text-sky-300 transition hover:bg-sky-400/20 active:scale-[0.99]"
          >
            Скопировать код
          </button>

          <div aria-live="polite">
            {copyStatus === 'copied' && (
              <p className="text-xs font-semibold text-emerald-400">✓ Скопировано в буфер!</p>
            )}
            {copyStatus === 'error' && (
              <p className="text-xs leading-relaxed text-rose-400">
                Не удалось скопировать автоматически. Выдели код выше и скопируй вручную.
              </p>
            )}
          </div>
        </section>

        <section className="space-y-2.5 rounded-2xl border border-slate-700/80 bg-slate-950/30 p-3">
          <div>
            <h3 className="text-sm font-extrabold text-violet-300">
              Импорт · Восстановить из кода
            </h3>
            <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">
              Восстановление заменит текущий SRS-прогресс данными из кода.
            </p>
          </div>

          <textarea
            rows={4}
            value={inputCode}
            onChange={(event) => {
              setErrorText('');
              setInputCode(event.target.value);
            }}
            placeholder="Вставь ранее сохранённый код бэкапа..."
            aria-label="Код для восстановления"
            aria-invalid={Boolean(errorText)}
            aria-describedby={errorText ? 'backup-import-error' : undefined}
            className={`w-full resize-none rounded-xl border bg-[#0b1120] p-2.5 font-mono text-xs text-slate-200 outline-none placeholder:font-sans placeholder:text-slate-600 focus:border-sky-400 ${
              errorText ? 'border-rose-500' : 'border-slate-700'
            }`}
          />

          {errorText && (
            <p id="backup-import-error" role="alert" className="text-xs leading-relaxed text-rose-400">
              {errorText}
            </p>
          )}

          <button
            type="button"
            onClick={handleRestore}
            className="h-11 w-full rounded-xl bg-sky-400 text-sm font-bold text-slate-950 transition hover:bg-sky-300 active:scale-[0.99]"
          >
            Восстановить прогресс
          </button>
        </section>

        <button
          type="button"
          onClick={closeModal}
          className="h-11 w-full rounded-xl text-sm font-semibold text-slate-400 transition hover:bg-slate-800 hover:text-slate-200"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};
