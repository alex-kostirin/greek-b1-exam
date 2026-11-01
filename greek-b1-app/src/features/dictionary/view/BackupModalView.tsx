import React, { useState } from 'react';
import { AppIntent } from '../../../model/appIntent';
import { AppState } from '../../../model/appState';
import { storageService } from '../../../shared/services/storageService';

interface BackupModalViewProps {
  state: AppState;
  dispatch: (intent: AppIntent) => void;
}

export const BackupModalView: React.FC<BackupModalViewProps> = ({ state, dispatch }) => {
  const currentCode = storageService.encodeBackupCode(
    state.statusMap,
    state.customWords
  );
  const [inputCode, setInputCode] = useState(currentCode);
  const [errorText, setErrorText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const handleRestore = () => {
    const decoded = storageService.decodeBackupCode(inputCode);
    if (!decoded) {
      setErrorText('Неверный формат кода бэкапа');
      return;
    }
    dispatch({
      type: 'BACKUP_RESTORED',
      statusMap: decoded.statusMap,
      customWords: decoded.customWords,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-sm bg-[#151f32] border border-slate-700 rounded-3xl p-5 flex flex-col gap-3 shadow-2xl">
        <div className="text-base font-extrabold text-white">
          💾 Бэкап и перенос прогресса
        </div>
        <div className="text-xs text-slate-400 leading-relaxed">
          Скопируй этот код для сохранения или вставь ранее сохраненный код, чтобы восстановить выученные слова:
        </div>

        <textarea
          rows={4}
          value={inputCode}
          onChange={(event) => {
            setErrorText('');
            setInputCode(event.target.value);
          }}
          className="w-full bg-[#0b1120] border border-slate-700 rounded-xl p-2.5 text-xs text-slate-200 font-mono outline-none focus:border-sky-400"
        />

        {errorText && <div className="text-xs text-rose-400">{errorText}</div>}

        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-slate-800 border border-slate-700 text-sky-400"
          >
            {copied ? '✅ Скопировано' : '📋 Скопировать код'}
          </button>
          <button
            type="button"
            onClick={handleRestore}
            className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-sky-400 text-slate-950"
          >
            Восстановить
          </button>
        </div>

        <button
          type="button"
          onClick={() => dispatch({ type: 'MODAL_CLOSED' })}
          className="w-full py-2 rounded-xl text-xs font-semibold text-slate-400"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};
