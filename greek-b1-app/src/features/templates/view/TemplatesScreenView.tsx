import React from 'react';
import { EXAM_TEMPLATES_DATASET } from '../../../shared/data/templatesDataset';

interface TemplatesScreenViewProps {
  speakGreek: (text: string) => void;
}

export const TemplatesScreenView: React.FC<TemplatesScreenViewProps> = ({ speakGreek }) => {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-3 pb-3">
      {EXAM_TEMPLATES_DATASET.map((template) => (
        <div
          key={template.title}
          className="bg-[#151f32] border border-slate-700 rounded-2xl p-3.5 flex flex-col gap-2.5"
        >
          <div>
            <div className="text-[15px] font-extrabold text-sky-400">
              {template.title}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">{template.subtitle}</div>
          </div>

          {template.blocks.map((block) => (
            <div
              key={block.label}
              onClick={() => speakGreek(block.greek)}
              className="bg-[#0b1120] border-l-3 border-teal-400 p-2.5 rounded-xl cursor-pointer active:opacity-80 transition"
            >
              <div className="text-[11px] font-bold text-amber-400 mb-1 flex items-center justify-between">
                <span>{block.label}</span>
                <span className="text-xs opacity-75">🔊 Тапни для озвучки</span>
              </div>
              <div className="text-[13.5px] font-semibold text-white whitespace-pre-line leading-snug">
                {block.greek}
              </div>
              <div className="text-xs text-slate-400 mt-1.5 whitespace-pre-line leading-snug">
                {block.russian}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
