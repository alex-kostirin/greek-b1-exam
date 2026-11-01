import { MatchBoardState } from '../features/match/model/matchGenerator';
import { QuizQuestionState } from '../features/quiz/model/quizGenerator';
import { NavigationTab, VocabularyItem, WordSrsMap } from '../shared/types/vocabulary';

export type ActiveModal = 'none' | 'addWord' | 'backup' | 'confirmReset';

export interface AppState {
  activeTab: NavigationTab;
  activeModule: string;
  directionGreekToRussian: boolean;
  autoTtsEnabled: boolean;
  isCardRevealed: boolean;
  streakCount: number;
  currentCard: VocabularyItem;
  recentGreeks: string[];
  searchQuery: string;
  srsMap: WordSrsMap;
  customWords: VocabularyItem[];
  quizQuestion: QuizQuestionState;
  matchBoard: MatchBoardState;
  activeModal: ActiveModal;
}
