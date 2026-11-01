export const MASTERY_THRESHOLD = 4;

export interface WordSrsRecord {
  box: number;
  lapses: number;
  nextReviewAt: number;
  lastReviewedAt: number;
}

export type WordSrsMap = Record<string, WordSrsRecord>;

export interface VocabularyItem {
  module: string;
  greek: string;
  grammarHint: string;
  russian: string;
  example: string;
}

export type NavigationTab = 'swipe' | 'quiz' | 'match' | 'list';
