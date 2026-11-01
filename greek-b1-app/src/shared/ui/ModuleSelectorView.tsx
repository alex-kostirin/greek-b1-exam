import React from 'react';
import {
  CLICK_CHAPTER_LABELS,
  SMART_MIX_MODULE,
  REVIEW_HARD_MODULE,
  selectModuleList,
} from '../../model/appSelectors';
import { GroupingMode, VocabularyItem } from '../types/vocabulary';

interface ModuleSelectorViewProps {
  activeModule: string;
  customWords: VocabularyItem[];
  groupingMode: GroupingMode;
  activeClickChapter: number | null;
  onSelectModule: (module: string) => void;
  onToggleGroupingMode: (mode: GroupingMode) => void;
  onSelectClickChapter: (chapter: number | null) => void;
}

export const ModuleSelectorView: React.FC<ModuleSelectorViewProps> = ({
  activeModule,
  customWords,
  groupingMode,
  activeClickChapter,
  onSelectModule,
  onToggleGroupingMode,
  onSelectClickChapter,
}) => {
  const modules = selectModuleList(customWords);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const activeItemRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    const activeItem = activeItemRef.current;

    if (!container || !activeItem) return;

    const containerRect = container.getBoundingClientRect();
    const activeItemRect = activeItem.getBoundingClientRect();
    const targetLeft =
      container.scrollLeft +
      activeItemRect.left -
      containerRect.left -
      (container.clientWidth - activeItemRect.width) / 2;

    container.scrollLeft = Math.max(0, targetLeft);
  }, [activeClickChapter, activeModule, customWords, groupingMode]);

  return (
    <div className="flex flex-col gap-1.5">
      <div
        role="group"
        aria-label="Способ группировки слов"
        className="grid grid-cols-2 gap-1 rounded-xl border border-slate-800 bg-slate-900/90 p-0.5"
      >
        <button
          type="button"
          aria-pressed={groupingMode === 'exam'}
          onClick={() => onToggleGroupingMode('exam')}
          className={`inline-flex h-8 select-none items-center justify-center rounded-[10px] px-2 text-[11px] font-bold leading-none transition sm:text-xs ${
            groupingMode === 'exam'
              ? 'bg-sky-400/20 text-sky-200 shadow-sm'
              : 'text-slate-400 hover:bg-slate-800/70 hover:text-slate-200'
          }`}
        >
          Темы экзамена B1
        </button>
        <button
          type="button"
          aria-pressed={groupingMode === 'click'}
          onClick={() => onToggleGroupingMode('click')}
          className={`inline-flex h-8 select-none items-center justify-center rounded-[10px] px-2 text-[11px] font-bold leading-none transition sm:text-xs ${
            groupingMode === 'click'
              ? 'bg-sky-400/20 text-sky-200 shadow-sm'
              : 'text-slate-400 hover:bg-slate-800/70 hover:text-slate-200'
          }`}
        >
          Главы Κλικ Β1
        </button>
      </div>

      {groupingMode === 'exam' ? (
        <div
          ref={scrollContainerRef}
          className="no-scrollbar flex items-center gap-1.5 overflow-x-auto pb-0.5"
          aria-label="Темы экзамена B1"
        >
          {modules.map((moduleName) => {
            const isActive = moduleName === activeModule;

            return (
              <button
                key={moduleName}
                ref={isActive ? activeItemRef : undefined}
                type="button"
                aria-pressed={isActive}
                onClick={() => onSelectModule(moduleName)}
                className={`inline-flex h-8 shrink-0 select-none items-center justify-center whitespace-nowrap rounded-full border px-3.5 text-xs font-semibold leading-none transition active:scale-95 ${
                  isActive
                    ? 'border-sky-400 bg-sky-400/25 text-white shadow-sm'
                    : 'border-slate-800 bg-[#151f32] text-slate-400 hover:text-slate-200'
                }`}
              >
                {moduleName}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          <div
            role="group"
            aria-label="Дополнительные подборки глав"
            className="grid grid-cols-2 gap-1.5"
          >
            <button
              type="button"
              aria-pressed={activeModule === SMART_MIX_MODULE}
              onClick={() => onSelectModule(SMART_MIX_MODULE)}
              className={`inline-flex h-8 min-w-0 select-none items-center justify-center whitespace-nowrap rounded-full border px-2 text-[11px] font-semibold leading-none transition active:scale-95 ${
                activeModule === SMART_MIX_MODULE
                  ? 'border-sky-400 bg-sky-400/25 text-white shadow-sm'
                  : 'border-slate-800 bg-[#151f32] text-slate-400 hover:text-slate-200'
              }`}
            >
              Умный микс главы
            </button>

            <button
              type="button"
              aria-pressed={activeModule === REVIEW_HARD_MODULE}
              onClick={() => onSelectModule(REVIEW_HARD_MODULE)}
              className={`inline-flex h-8 min-w-0 select-none items-center justify-center whitespace-nowrap rounded-full border px-2 text-[11px] font-semibold leading-none transition active:scale-95 ${
                activeModule === REVIEW_HARD_MODULE
                  ? 'border-amber-400/80 bg-amber-400/15 text-amber-200 shadow-sm'
                  : 'border-slate-800 bg-[#151f32] text-slate-400 hover:text-slate-200'
              }`}
            >
              На повторе
            </button>
          </div>

          <div
            ref={scrollContainerRef}
            className="no-scrollbar flex items-center gap-1.5 overflow-x-auto pb-0.5"
            aria-label="Главы учебника Κλικ Β1"
          >
            <button
              ref={activeClickChapter === null ? activeItemRef : undefined}
              type="button"
              aria-pressed={activeClickChapter === null}
              onClick={() => onSelectClickChapter(null)}
              className={`inline-flex h-8 shrink-0 select-none items-center justify-center whitespace-nowrap rounded-full border px-3.5 text-xs font-semibold leading-none transition active:scale-95 ${
                activeClickChapter === null
                  ? 'border-sky-400 bg-sky-400/25 text-white shadow-sm'
                  : 'border-slate-800 bg-[#151f32] text-slate-400 hover:text-slate-200'
              }`}
            >
              Все главы
            </button>

            {Array.from({ length: 12 }, (_, index) => index + 1).map((chapter) => {
              const isActive = activeClickChapter === chapter;

              return (
                <button
                  key={`chapter-${chapter}`}
                  ref={isActive ? activeItemRef : undefined}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => onSelectClickChapter(chapter)}
                  className={`inline-flex h-8 min-w-8 shrink-0 select-none items-center justify-center whitespace-nowrap rounded-full border px-3 text-xs font-semibold leading-none transition active:scale-95 ${
                    isActive
                      ? 'border-sky-400 bg-sky-400/25 text-white shadow-sm'
                      : 'border-slate-800 bg-[#151f32] text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {CLICK_CHAPTER_LABELS[chapter]}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
