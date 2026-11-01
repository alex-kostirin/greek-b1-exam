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

  return (
    <div className="flex flex-col gap-2">
      {/* Mode toggle pills */}
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onToggleGroupingMode('exam')}
          className={`h-7 px-3 rounded-full text-xs font-semibold whitespace-nowrap border inline-flex items-center justify-center leading-none transition ${
            groupingMode === 'exam'
              ? 'bg-sky-400/20 border-sky-400 text-white'
              : 'bg-[#151f32] border-slate-800 text-slate-400'
          }`}
        >
          Темы экзамена B1
        </button>
        <button
          type="button"
          onClick={() => onToggleGroupingMode('click')}
          className={`h-7 px-3 rounded-full text-xs font-semibold whitespace-nowrap border inline-flex items-center justify-center leading-none transition ${
            groupingMode === 'click'
              ? 'bg-sky-400/20 border-sky-400 text-white'
              : 'bg-[#151f32] border-slate-800 text-slate-400'
          }`}
        >
          Главы Κλικ Β1
        </button>
      </div>

      {/* Module / Chapter scroller */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
        {groupingMode === 'exam' ? (
          modules.map((moduleName) => {
            const isActive = moduleName === activeModule;
            return (
              <button
                key={moduleName}
                type="button"
                onClick={() => onSelectModule(moduleName)}
                className={`h-7 px-3 rounded-full text-xs font-semibold whitespace-nowrap border inline-flex items-center justify-center leading-none transition ${
                  isActive
                    ? 'bg-sky-400/20 border-sky-400 text-white'
                    : 'bg-[#151f32] border-slate-800 text-slate-400'
                }`}
              >
                {moduleName}
              </button>
            );
          })
        ) : (
          <>
            {/* Smart mix for current chapter */}
            <button
              type="button"
              onClick={() => onSelectModule(SMART_MIX_MODULE)}
              className={`h-7 px-3 rounded-full text-xs font-semibold whitespace-nowrap border inline-flex items-center justify-center leading-none transition ${
                activeModule === SMART_MIX_MODULE
                  ? 'bg-sky-400/20 border-sky-400 text-white'
                  : 'bg-[#151f32] border-slate-800 text-slate-400'
              }`}
            >
              Умный микс главы
            </button>
            {/* Review hard for current chapter */}
            <button
              type="button"
              onClick={() => onSelectModule(REVIEW_HARD_MODULE)}
              className={`h-7 px-3 rounded-full text-xs font-semibold whitespace-nowrap border inline-flex items-center justify-center leading-none transition ${
                activeModule === REVIEW_HARD_MODULE
                  ? 'bg-sky-400/20 border-sky-400 text-white'
                  : 'bg-[#151f32] border-slate-800 text-slate-400'
              }`}
            >
              На повторе
            </button>
            {/* Chapter buttons 1-12 */}
            {Array.from({ length: 12 }, (_, i) => i + 1).map((chapter) => {
              const isActive =
                activeClickChapter === chapter && activeModule === SMART_MIX_MODULE;
              return (
                <button
                  key={`chapter-${chapter}`}
                  type="button"
                  onClick={() => onSelectClickChapter(chapter)}
                  className={`h-7 px-3 rounded-full text-xs font-semibold whitespace-nowrap border inline-flex items-center justify-center leading-none transition ${
                    isActive
                      ? 'bg-sky-400/20 border-sky-400 text-white'
                      : 'bg-[#151f32] border-slate-800 text-slate-400'
                  }`}
                >
                  {CLICK_CHAPTER_LABELS[chapter]}
                </button>
              );
            })}
            {/* All chapters button */}
            <button
              type="button"
              onClick={() => onSelectClickChapter(null)}
              className={`h-7 px-3 rounded-full text-xs font-semibold whitespace-nowrap border inline-flex items-center justify-center leading-none transition ${
                activeClickChapter === null && activeModule === SMART_MIX_MODULE
                  ? 'bg-sky-400/20 border-sky-400 text-white'
                  : 'bg-[#151f32] border-slate-800 text-slate-400'
              }`}
            >
              Все главы
            </button>
          </>
        )}
      </div>
    </div>
  );
};
