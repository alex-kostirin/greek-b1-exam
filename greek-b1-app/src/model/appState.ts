import { NavigationTab, VocabularyItem, WordStatusMap } from '../shared/types/vocabulary';
import { QuizQuestionState } from '../features/quiz/model/quizGenerator';
import { MatchBoardState } from '../features/match/model/matchGenerator';

export type ActiveModal = 'none' | 'addWord' | 'backup' | 'confirmReset';

export interface AppState {
  activeTab: NavigationTab;
  activeModule: string;
  directionGreekToRussian: boolean;
  autoTtsEnabled: boolean;
  isCardRevealed: boolean;
  streakCount: number;
  cardCursor: number;
  searchQuery: string;
  statusMap: WordStatusMap;
  customWords: VocabularyItem[];
  quizQuestion: QuizQuestionState;
  matchBoard: MatchBoardState;
  activeModal: ActiveModal;
}
