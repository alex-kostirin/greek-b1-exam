import { NavigationTab, VocabularyItem, WordSrsMap } from '../shared/types/vocabulary';
import { ActiveModal } from './appState';

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
    }
  | { type: 'PROGRESS_RESET_CONFIRMED' }
  | {
      type: 'CLOUD_STATE_HYDRATED';
      srsMap: WordSrsMap;
      customWords: VocabularyItem[];
    };
