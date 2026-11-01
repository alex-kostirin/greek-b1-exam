import { VocabularyItem } from '../../../shared/types/vocabulary';

export interface MatchBoardState {
  leftColumn: VocabularyItem[];
  rightColumn: VocabularyItem[];
  selectedLeftGreek: string | null;
  selectedRightGreek: string | null;
  matchedGreeks: string[];
  mismatchedPair: { leftGreek: string; rightGreek: string } | null;
}

export function generateMatchBoard(deck: VocabularyItem[]): MatchBoardState {
  const sample = [...deck].sort(() => Math.random() - 0.5).slice(0, 5);
  return {
    leftColumn: [...sample].sort(() => Math.random() - 0.5),
    rightColumn: [...sample].sort(() => Math.random() - 0.5),
    selectedLeftGreek: null,
    selectedRightGreek: null,
    matchedGreeks: [],
    mismatchedPair: null,
  };
}
