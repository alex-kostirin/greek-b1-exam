import React from 'react';
import { AppIntent } from '../../../model/appIntent';
import { selectFilteredDictionaryList } from '../../../model/appSelectors';
import { AppState } from '../../../model/appState';
import { MASTERY_THRESHOLD } from '../../../shared/types/vocabulary';
import { PlusIcon, SearchIcon, VolumeOnIcon } from '../../../shared/ui/Icons';

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
      <div className="flex flex-wrap items-center gap-1.5 sticky top-0 bg-[#0b1120] pt-0.5 pb-1.5 z-10">
        <div className="flex-1 min-w-[160px] relative flex items-center">
          <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={state.searchQuery}
            onChange={(event) =>
              dispatch({
                type: 'SEARCH_QUERY_CHANGED',
                query: event.target.value,
              })
            }
            placeholder="Поиск (греч. / рус.)..."
            className="w-full h-9 bg-[#151f32] border border-slate-700 text-slate-100 pl-9 pr-3 rounded-xl text-xs outline-none focus:border-sky-400"
          />
        </div>

        <button
          type="button"
          onClick={() => dispatch({ type: 'MODAL_OPENED', modal: 'addWord' })}
          className="h-9 px-3 rounded-xl text-xs font-bold border border-sky-400 text-sky-400 bg-sky-400/10 inline-flex items-center justify-center gap-1 leading-none active:scale-95 transition"
        >
          <PlusIcon className="w-3.5 h-3.5 shrink-0" />
          <span>Слово</span>
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: 'MODAL_OPENED', modal: 'backup' })}
          className="h-9 px-3 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-800 text-slate-200 inline-flex items-center justify-center leading-none active:scale-95 transition"
        >
          Бэкап
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: 'MODAL_OPENED', modal: 'confirmReset' })}
          className="h-9 px-3 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-800 text-slate-300 inline-flex items-center justify-center leading-none active:scale-95 transition"
        >
          Сброс
        </button>
      </div>

      <div className="text-xs text-slate-400 px-0.5">
        Найдено карточек: <b className="text-slate-200">{filteredWords.length}</b>
      </div>

      {filteredWords.map((item) => {
        const record = state.srsMap[item.greek];
        const box = record?.box ?? 0;

        return (
          <div
            key={item.greek}
            className="bg-[#151f32] border border-slate-800 rounded-2xl p-3 flex items-start justify-between gap-2.5"
          >
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[15px] font-bold text-white break-words">
                  {item.greek}
                </span>
                <span className="text-[11px] text-amber-400 font-medium bg-amber-500/10 px-2 py-0.5 rounded-md">
                  {item.grammarHint}
                </span>
                {record && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full leading-none ${
                      box >= MASTERY_THRESHOLD
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-sky-500/15 text-sky-400'
                    }`}
                  >
                    {box}/{MASTERY_THRESHOLD}
                  </span>
                )}
              </div>

              <div className="text-[13.5px] font-semibold text-teal-400">
                {item.russian}
              </div>
              <div className="text-xs text-slate-400 leading-snug">
                {item.example}
              </div>
            </div>

            <button
              type="button"
              onClick={() => speakGreek(item.greek)}
              className="w-9 h-9 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-400 flex items-center justify-center shrink-0 active:scale-90 transition"
            >
              <VolumeOnIcon className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
