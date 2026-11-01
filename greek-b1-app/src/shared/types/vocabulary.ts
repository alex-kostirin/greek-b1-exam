export type WordLearningStatus = 'known' | 'hard';

export type WordStatusMap = Record<string, WordLearningStatus>;

export interface VocabularyItem {
  module: string;
  greek: string;
  grammarHint: string;
  russian: string;
  example: string;
}

export type NavigationTab = 'swipe' | 'quiz' | 'match' | 'templates' | 'list';
