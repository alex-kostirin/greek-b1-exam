import React from 'react';
import { NavigationTab } from '../types/vocabulary';
import { BoltTabIcon, BookTabIcon, CardsTabIcon, GridTabIcon } from './Icons';

interface BottomNavigationViewProps {
  activeTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
}

const NAVIGATION_ITEMS: {
  id: NavigationTab;
  label: string;
  renderIcon: (className: string) => React.ReactNode;
}[] = [
  {
    id: 'swipe',
    label: 'Карточки',
    renderIcon: (className) => <CardsTabIcon className={className} />,
  },
  {
    id: 'quiz',
    label: 'Квиз 1/4',
    renderIcon: (className) => <BoltTabIcon className={className} />,
  },
  {
    id: 'match',
    label: 'Пары',
    renderIcon: (className) => <GridTabIcon className={className} />,
  },
  {
    id: 'list',
    label: 'Словарь',
    renderIcon: (className) => <BookTabIcon className={className} />,
  },
];

export const BottomNavigationView: React.FC<BottomNavigationViewProps> = ({
  activeTab,
  onSelectTab,
}) => {
  return (
    <nav className="bg-[#0b1120]/98 border-t border-slate-800/80 grid grid-cols-4 gap-1 px-2 pt-1.5 pb-[calc(6px+env(safe-area-inset-bottom,10px))] z-20 shrink-0">
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = item.id === activeTab;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectTab(item.id)}
            className={`flex flex-col items-center justify-center gap-1 py-1.5 px-1 rounded-xl text-[11px] font-semibold leading-none transition ${
              isActive ? 'text-sky-400 bg-sky-400/10' : 'text-slate-400'
            }`}
          >
            {item.renderIcon('w-5 h-5 shrink-0')}
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
