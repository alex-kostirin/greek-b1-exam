import { VocabularyItem } from '../../../shared/types/vocabulary';

export interface QuizQuestionState {
  targetItem: VocabularyItem;
  options: VocabularyItem[];
  selectedOptionGreek: string | null;
}

export function generateQuizQuestion(
  targetItem: VocabularyItem,
  allVocabulary: VocabularyItem[]
): QuizQuestionState {
  const distractors = allVocabulary
    .filter((item) => item.greek !== targetItem.greek)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const options = [targetItem, ...distractors].sort(() => Math.random() - 0.5);

  return {
    targetItem,
    options,
    selectedOptionGreek: null,
  };
}
