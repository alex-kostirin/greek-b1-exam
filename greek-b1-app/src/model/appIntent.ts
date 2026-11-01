import { GroupingMode, NavigationTab, VocabularyItem, WordSrsMap } from '../shared/types/vocabulary';
import { ActiveModal } from './appState';
import { EssayUserProgress } from '../shared/types/essay';

export type AppIntent =
  | { type: 'TAB_SELECTED'; tab: NavigationTab }
  | { type: 'MODULE_SELECTED'; module: string }
  | { type: 'DIRECTION_TOGGLED' }
  | { type: 'AUTO_TTS_TOGGLED' }
  | { type: 'SWIPE_CARD_FLIPPED' }
  | { type: 'CARD_GRADED'; isKnown: boolean }
  | { type: 'QUIZ_OPTION_SELECTED'; optionGreek: string }
  | { type: 'QUIZ_NEXT_QUESTION' }
  | { type: 'MATCH_TILE_CLICKED'; side: 'left' | 'right'; greekKey: string }
  | { type: 'MATCH_MISMATCH_CLEARED' }
  | { type: 'MATCH_NEW_ROUND' }
  | { type: 'SEARCH_QUERY_CHANGED'; query: string }
  | { type: 'MODAL_OPENED'; modal: ActiveModal }
  | { type: 'MODAL_CLOSED' }
  | {
      type: 'CUSTOM_WORD_ADDED';
      greek: string;
      russian: string;
      example: string;
    }
  | {
      type: 'BACKUP_RESTORED';
      srsMap: WordSrsMap;
      customWords: VocabularyItem[];
      essayProgress?: EssayUserProgress;
    }
  | { type: 'PROGRESS_RESET_CONFIRMED' }
  | {
      type: 'CLOUD_STATE_HYDRATED';
      srsMap: WordSrsMap;
      customWords: VocabularyItem[];
      essayProgress?: EssayUserProgress;
    }
  | { type: 'GROUPING_MODE_TOGGLED'; mode: GroupingMode }
  | { type: 'CLICK_CHAPTER_SELECTED'; chapter: number | null }
  | { type: 'ESSAY_PIN_TOGGLED'; topicId: string }
  | { type: 'ESSAY_COMPLETED_TOGGLED'; topicId: string }
  | { type: 'ESSAY_HINT_STEP_ADVANCED'; topicId: string }
  | { type: 'ESSAY_HINT_LEVEL_SET'; topicId: string; level: number };
