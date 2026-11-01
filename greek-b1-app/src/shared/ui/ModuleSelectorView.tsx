import React from 'react';
import { selectModuleList } from '../../model/appSelectors';
import { VocabularyItem } from '../types/vocabulary';

interface ModuleSelectorViewProps {
  activeModule: string;
  customWords: VocabularyItem[];
  onSelectModule: (module: string) => void;
}

export const ModuleSelectorView: React.FC<ModuleSelectorViewProps> = ({
  activeModule,
  customWords,
  onSelectModule,
}) => {
  const modules = selectModuleList(customWords);

  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
      {modules.map((moduleName) => {
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
      })}
    </div>
  );
};
