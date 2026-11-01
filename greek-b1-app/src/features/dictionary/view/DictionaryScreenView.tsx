import React from 'react';
import { AppIntent } from '../../../model/appIntent';
import { selectFilteredDictionaryList } from '../../../model/appSelectors';
import { AppState } from '../../../model/appState';

interface DictionaryScreenViewProps {
  state: AppState;
  dispatch: (intent: AppIntent) => void;
  speakGreek: (text: string) => void;
}

export const DictionaryScreenView: React.FC<DictionaryScreenViewProps> = ({
  state,
  dispatch,
  speakGreek,
}) => {
  const filteredWords = selectFilteredDictionaryList(state);

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-2 pb-3">
      <div className="flex flex-wrap gap-1.5 sticky top-0 bg-[#0b1120] pt-0.5 pb-1.5 z-10">
        <input
          type="text"
          value={state.searchQuery}
          onChange={(event) =>
            dispatch({
              type: 'SEARCH_QUERY_CHANGED',
              query: event.target.value,
            })
          }
          placeholder="🔍 Поиск (греч. / рус.)..."
          className="flex-1 min-w-[160px] bg-[#151f32] border border-slate-700 text-slate-100 px-3.5 py-2 rounded-xl text-sm outline-none focus:border-sky-400"
        />

        <button
          type="button"
          onClick={() => dispatch({ type: 'MODAL_OPENED', modal: 'addWord' })}
          className="px-3 py-2 rounded-xl text-xs font-bold border border-sky-400 text-sky-400 bg-sky-400/10 active:scale-95 transition"
        >
          ➕ Слово
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: 'MODAL_OPENED', modal: 'backup' })}
          className="px-3 py-2 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-800 text-slate-200 active:scale-95 transition"
        >
          💾 Бэкап
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: 'MODAL_OPENED', modal: 'confirmReset' })}
          className="px-3 py-2 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-800 text-slate-300 active:scale-95 transition"
        >
          Сброс
        </button>
      </div>

      <div className="text-xs text-slate-400 px-0.5">
        Найдено карточек: <b className="text-slate-200">{filteredWords.length}</b> (тапни 🔊 для озвучки)
      </div>

      {filteredWords.map((item) => {
        const status = state.statusMap[item.greek];
        const statusBadge =
          status === 'known' ? '✅' : status === 'hard' ? '🔥' : '';

        return (
          <div
            key={item.greek}
            className="bg-[#151f32] border border-slate-800 rounded-2xl p-3 flex items-start justify-between gap-2.5"
          >
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="text-[15px] font-bold text-white break-words">
                {statusBadge && <span className="mr-1.5">{statusBadge}</span>}
                {item.greek}{' '}
                <span className="text-[11px] text-amber-400 font-medium">
                  ({item.grammarHint})
                </span>
              </div>
              <div className="text-[13.5px] font-semibold text-teal-400">
                {item.russian}
              </div>
              <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                {item.example}
              </div>
            </div>

            <button
              type="button"
              onClick={() => speakGreek(item.greek)}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-base shrink-0 active:scale-90 transition"
            >
              🔊
            </button>
          </div>
        );
      })}
    </div>
  );
};
