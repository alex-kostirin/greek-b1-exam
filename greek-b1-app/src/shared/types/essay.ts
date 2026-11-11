export type EssayRegister = 'informal' | 'formal';
export type EssaySubType = 'friend_letter' | 'complaint' | 'initiative_request' | 'announcement_article';
export type EssaySourceType = 'exam_chat' | 'keg_2015_2018' | 'klik_b1' | 'ellinika_b' | 'sim_tests';

export interface EssayVocabHintItem {
  greek: string;
  russian: string;
  note?: string;
}

export interface EssayHintPortion {
  title: string;
  items: EssayVocabHintItem[];
}

export interface EssayTemplateBlock {
  blockName: string;
  greek: string;
  russian: string;
  wordCountApprox: number;
}

export interface EssayUniversalTemplate {
  id: string;
  register: EssayRegister;
  title: string;
  subtitle: string;
  wordLimit: string;
  safetyRule: string;
  blocks: EssayTemplateBlock[];
}

export interface EssayTopic {
  id: string;
  register: EssayRegister;
  subType: EssaySubType;
  titleRu: string;
  sourceBadge: string;
  sourceType: EssaySourceType;
  clickChapter?: number;
  wordRange: string;
  promptGreek: string;
  promptRussian: string;
  bulletChecklist: string[];
  templateHint: {
    greeting: string;
    openingGreek: string;
    openingRussian: string;
    bodyBridgeGreek: string;
    bodyBridgeRussian: string;
    closingGreek: string;
    closingRussian: string;
    signature: string;
  };
  vocabPortions: [EssayHintPortion, EssayHintPortion, EssayHintPortion];
}

export interface EssayUserProgress {
  pinnedIds: string[];
  completedIds: string[];
  hintLevels: Record<string, number>;
}
