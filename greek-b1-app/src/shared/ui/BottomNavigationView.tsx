import React from 'react';
import { NavigationTab } from '../types/vocabulary';

interface BottomNavigationViewProps {
  activeTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
}

const NAVIGATION_ITEMS: { id: NavigationTab; icon: string; label: string }[] = [
  { id: 'swipe', icon: '🃏', label: 'Свайп' },
  { id: 'quiz', icon: '⚡', label: 'Квиз 1/4' },
  { id: 'match', icon: '🧩', label: 'Пары' },
  { id: 'templates', icon: '✍️', label: 'Шаблоны' },
  { id: 'list', icon: '📚', label: 'Все слова' },
];

export const BottomNavigationView: React.FC<BottomNavigationViewProps> = ({
  activeTab,
  onSelectTab,
}) => {
  return (
    <nav className="bg-[#0b1120]/98 border-t border-slate-800 grid grid-cols-5 px-1.5 pt-1.5 pb-[calc(6px+env(safe-area-inset-bottom,10px))] z-20 shrink-0">
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = item.id === activeTab;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectTab(item.id)}
            className={`flex flex-col items-center gap-0.5 py-1.5 px-1 rounded-xl text-[10.5px] font-semibold transition ${
              isActive ? 'text-sky-400 bg-sky-400/10' : 'text-slate-400'
            }`}
          >
            <span className="text-[17px] leading-none">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
