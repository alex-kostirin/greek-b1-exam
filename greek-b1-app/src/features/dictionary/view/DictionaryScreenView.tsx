import React, { useState } from 'react';
import { AppIntent } from '../../../model/appIntent';
import { selectFilteredDictionaryList } from '../../../model/appSelectors';
import { AppState } from '../../../model/appState';
import { srsService } from '../../../shared/services/srsService';
import { MASTERY_THRESHOLD } from '../../../shared/types/vocabulary';
import { SearchIcon, VolumeOnIcon } from '../../../shared/ui/Icons';

interface DictionaryScreenViewProps {
  state: AppState;
  dispatch: (intent: AppIntent) => void;
  speakGreek: (text: string) => void;
}

type StatusFilter = 'all' | 'new' | 'learning' | 'mastered' | 'custom';
type SrsStatus = 'new' | 'learning' | 'mastered';

const getSrsStatus = (box: number): SrsStatus => {
  if (box >= MASTERY_THRESHOLD) return 'mastered';
  if (box > 0) return 'learning';
  return 'new';
};

export const DictionaryScreenView: React.FC<DictionaryScreenViewProps> = ({
  state,
  dispatch,
  speakGreek,
}) => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const searchedWords = selectFilteredDictionaryList(state);
  const customGreeks = new Set(state.customWords.map((item) => item.greek));

  let newCount = 0;
  let learningCount = 0;
  let masteredCount = 0;
  let customCount = 0;

  searchedWords.forEach((item) => {
    const box = state.srsMap[item.greek]?.box ?? 0;
    const status = getSrsStatus(box);

    if (status === 'new') newCount += 1;
    if (status === 'learning') learningCount += 1;
    if (status === 'mastered') masteredCount += 1;
    if (customGreeks.has(item.greek)) customCount += 1;
  });

  const visibleWords = searchedWords.filter((item) => {
    if (statusFilter === 'all') return true;
    if (statusFilter === 'custom') return customGreeks.has(item.greek);

    const box = state.srsMap[item.greek]?.box ?? 0;
    return getSrsStatus(box) === statusFilter;
  });

  const filterOptions: { id: StatusFilter; label: string; count: number }[] = [
    { id: 'all', label: 'Все', count: searchedWords.length },
    { id: 'new', label: 'Новые', count: newCount },
    { id: 'learning', label: 'На повторе / Учу', count: learningCount },
    { id: 'mastered', label: 'Выучено ★', count: masteredCount },
    { id: 'custom', label: 'Мои слова', count: customCount },
  ];

  const clearSearchAndFilters = () => {
    setStatusFilter('all');
    dispatch({ type: 'SEARCH_QUERY_CHANGED', query: '' });
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 pb-4">
      <div className="sticky top-0 z-20 -mx-1 space-y-2 bg-[#0b1120]/95 px-1 pb-2 pt-0.5 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative flex w-full min-w-[180px] flex-1 items-center sm:w-auto">
            <SearchIcon className="pointer-events-none absolute left-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={state.searchQuery}
              onChange={(event) =>
                dispatch({
                  type: 'SEARCH_QUERY_CHANGED',
                  query: event.target.value,
                })
              }
              placeholder="Поиск без ударений (греч. / рус.)..."
              aria-label="Поиск по словарю"
              className="h-10 w-full rounded-xl border border-slate-700 bg-[#151f32] pl-9 pr-10 text-xs text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400"
            />
            {state.searchQuery.length > 0 && (
              <button
                type="button"
                onClick={() =>
                  dispatch({ type: 'SEARCH_QUERY_CHANGED', query: '' })
                }
                className="absolute right-1 flex h-8 w-8 items-center justify-center rounded-lg text-sm text-slate-400 transition hover:bg-slate-700/60 hover:text-white active:scale-90"
                aria-label="Очистить поиск"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() =>
                dispatch({ type: 'MODAL_OPENED', modal: 'addWord' })
              }
              className="h-10 rounded-xl bg-sky-400 px-3.5 text-xs font-extrabold text-slate-950 transition hover:bg-sky-300 active:scale-95"
            >
              + Слово
            </button>

            <button
              type="button"
              onClick={() =>
                dispatch({ type: 'MODAL_OPENED', modal: 'backup' })
              }
              className="h-10 rounded-xl border border-slate-700 bg-slate-800 px-3.5 text-xs font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-700 active:scale-95"
            >
              Бэкап
            </button>

            <button
              type="button"
              aria-label="Сбросить прогресс"
              onClick={() =>
                dispatch({ type: 'MODAL_OPENED', modal: 'confirmReset' })
              }
              className="h-10 rounded-xl border border-rose-500/35 bg-rose-500/10 px-3 text-xs font-semibold text-rose-300 transition hover:bg-rose-500/20 active:scale-95"
            >
              Сброс
            </button>
          </div>
        </div>

        <div
          className="flex gap-1.5 overflow-x-auto pb-0.5"
          aria-label="Фильтр по статусу изучения"
        >
          {filterOptions.map((option) => {
            const isActive = statusFilter === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setStatusFilter(option.id)}
                className={`flex min-h-9 shrink-0 items-center gap-1.5 rounded-full border px-3 text-[11px] font-bold transition active:scale-95 ${
                  isActive
                    ? 'border-sky-400/70 bg-sky-400/20 text-sky-200'
                    : 'border-slate-700 bg-slate-900/70 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                }`}
                aria-pressed={isActive}
              >
                <span>{option.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] tabular-nums ${
                    isActive
                      ? 'bg-sky-400/15 text-sky-200'
                      : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {option.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-1 px-0.5 text-xs text-slate-400">
        <span>
          Показано карточек:{' '}
          <b className="text-slate-200">{visibleWords.length}</b>
        </span>
        {statusFilter !== 'all' && (
          <button
            type="button"
            onClick={() => setStatusFilter('all')}
            className="min-h-8 font-semibold text-sky-400 transition hover:text-sky-300"
          >
            Сбросить фильтр
          </button>
        )}
      </div>

      {visibleWords.length > 0 ? (
        <div className="flex flex-col gap-2.5">
          {visibleWords.map((item) => {
            const record = state.srsMap[item.greek];
            const box = record?.box ?? 0;
            const status = getSrsStatus(box);
            const nextReviewLabel =
              record && status === 'learning'
                ? srsService.formatNextIntervalLabel(record)
                : null;

            return (
              <article
                key={item.greek}
                className="flex items-start justify-between gap-3 rounded-2xl border border-slate-800 bg-[#151f32] p-3.5 shadow-sm transition hover:border-slate-700"
              >
                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h3 className="min-w-0 break-words text-[15px] font-bold leading-snug text-white sm:text-[16px]">
                      {item.greek}
                    </h3>
                    {customGreeks.has(item.greek) && (
                      <span className="rounded-md border border-violet-400/25 bg-violet-400/10 px-1.5 py-0.5 text-[10px] font-bold text-violet-300">
                        Моё
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.grammarHint && (
                      <span className="rounded-md bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-400">
                        {item.grammarHint}
                      </span>
                    )}

                    {status === 'mastered' ? (
                      <span className="rounded-full border border-emerald-400/25 bg-emerald-500/15 px-2 py-1 text-[10px] font-bold leading-none text-emerald-300">
                        Выучено ★
                      </span>
                    ) : status === 'learning' ? (
                      <span className="rounded-full border border-sky-400/25 bg-sky-500/15 px-2 py-1 text-[10px] font-bold leading-none text-sky-300">
                        Учу · {box}/{MASTERY_THRESHOLD}
                      </span>
                    ) : (
                      <span className="rounded-full border border-slate-600/70 bg-slate-700/35 px-2 py-1 text-[10px] font-bold leading-none text-slate-300">
                        Новое
                      </span>
                    )}
                  </div>

                  {nextReviewLabel && (
                    <p className="text-[10px] font-medium leading-relaxed text-amber-300/80">
                      Следующее повторение: {nextReviewLabel}
                    </p>
                  )}

                  <p className="text-[14px] font-semibold leading-snug text-teal-400">
                    {item.russian}
                  </p>

                  {item.example && (
                    <button
                      type="button"
                      onClick={() => speakGreek(item.example)}
                      className="rounded-lg text-left text-xs leading-relaxed text-slate-400 transition hover:text-sky-300 focus:outline-none focus:ring-1 focus:ring-sky-400/60"
                      aria-label={`Озвучить пример: ${item.example}`}
                      title="Нажми, чтобы озвучить пример"
                    >
                      <span
                        className="mr-1.5 text-sky-400/70"
                        aria-hidden="true"
                      >
                        🔊
                      </span>
                      {item.example}
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => speakGreek(item.greek)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/15 text-sky-400 transition hover:bg-sky-400/25 active:scale-90"
                  aria-label={`Озвучить слово: ${item.greek}`}
                >
                  <VolumeOnIcon className="h-4 w-4" />
                </button>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 px-4 py-10 text-center">
          <p className="text-sm font-bold text-slate-300">Ничего не найдено</p>
          <p className="mx-auto mt-1.5 max-w-sm text-xs leading-relaxed text-slate-500">
            Попробуй изменить запрос без учёта ударений или выбрать другой
            SRS-фильтр.
          </p>
          <button
            type="button"
            onClick={clearSearchAndFilters}
            className="mt-4 h-10 rounded-xl border border-sky-400/40 bg-sky-400/10 px-4 text-xs font-bold text-sky-300 transition hover:bg-sky-400/20"
          >
            Показать все слова
          </button>
        </div>
      )}
    </div>
  );
};
