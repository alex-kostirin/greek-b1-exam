import React from 'react';
import { NavigationTab } from '../types/vocabulary';
import {
  BoltTabIcon,
  BookTabIcon,
  CardsTabIcon,
  GridTabIcon,
  PenTabIcon,
} from './Icons';

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
  {
    id: 'essays',
    label: 'Сочинения',
    renderIcon: (className) => <PenTabIcon className={className} />,
  },
];

export const BottomNavigationView: React.FC<BottomNavigationViewProps> = ({
  activeTab,
  onSelectTab,
}) => {
  return (
    <nav
      aria-label="Основная навигация"
      className="z-20 grid shrink-0 grid-cols-5 gap-1 border-t border-slate-800/80 bg-[#0a131f]/98 px-2 pt-1 pb-[calc(6px+env(safe-area-inset-bottom,10px))]"
    >
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = item.id === activeTab;
        return (
          <button
            key={item.id}
            type="button"
            aria-current={isActive ? 'page' : undefined}
            aria-label={item.label}
            onClick={() => onSelectTab(item.id)}
            className={`relative flex min-h-[48px] select-none flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1 text-[10px] font-bold leading-none tracking-tight transition active:scale-95 ${
              isActive
                ? 'bg-sky-400/10 text-sky-300'
                : 'text-slate-500 hover:bg-slate-800/50 hover:text-slate-300'
            }`}
          >
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute top-0 h-0.5 w-7 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.55)]"
              />
            )}
            <span
              className={`inline-flex h-7 w-9 items-center justify-center rounded-full transition-colors ${
                isActive ? 'bg-sky-400/15' : 'bg-transparent'
              }`}
            >
              {item.renderIcon('w-5 h-5 shrink-0')}
            </span>
            <span className="whitespace-nowrap">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
