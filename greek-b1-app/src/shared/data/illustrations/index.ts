import type { WordVisualScene } from '../../types/illustration';
import type { VocabularyItem } from '../../types/vocabulary';
import { BATCH1_SCENES } from './batch1';
import { BATCH2_SCENES } from './batch2';
import { BATCH3_SCENES } from './batch3';
import { BATCH4_SCENES } from './batch4';
import { BATCH5_SCENES } from './batch5';
import { BATCH6_SCENES } from './batch6';

/**
 * Curated illustrations for the built-in vocabulary.
 *
 * Later batches intentionally take precedence if a word is ever redefined,
 * allowing newer artwork to replace an earlier scene without editing old data.
 */
export const WORD_VISUAL_SCENES: Record<string, WordVisualScene> = {
  ...BATCH1_SCENES,
  ...BATCH2_SCENES,
  ...BATCH3_SCENES,
  ...BATCH4_SCENES,
  ...BATCH5_SCENES,
  ...BATCH6_SCENES,
};

const FALLBACK_SVG_MOTIF = `
  <path
    d="M-8 64 C18 42 34 76 58 54 S98 36 128 52"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    opacity="0.55"
  />
  <path
    d="M8 18 H112 M20 28 H100"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeDasharray="2 7"
    strokeLinecap="round"
    opacity="0.35"
  />
  <circle cx="96" cy="18" r="12" fill="currentColor" fillOpacity="0.08" />
  <circle cx="22" cy="56" r="16" fill="currentColor" fillOpacity="0.06" />
`;

function createFallbackScene(
  caption: string,
  primaryEmoji: string,
  secondaryEmoji: string,
  gradient: string,
  glow: string,
): WordVisualScene {
  return {
    layout: 'scene',
    gradient,
    glow,
    primaryEmoji,
    secondaryEmoji,
    caption,
    svgMotif: FALLBACK_SVG_MOTIF,
  };
}

/**
 * Custom vocabulary still receives a meaningful, module-specific illustration
 * even when it has no curated entry in WORD_VISUAL_SCENES.
 */
const MODULE_FALLBACK_SCENES: Record<string, WordVisualScene> = {
  '1. Характер': createFallbackScene(
    'Характер и отношения',
    '🧑',
    '💬',
    'from-indigo-500/30 via-purple-500/20 to-slate-900',
    'bg-indigo-400/25',
  ),
  '2. Жилье и переезд': createFallbackScene(
    'Дом и переезд',
    '🏠',
    '🚚',
    'from-cyan-500/30 via-sky-500/20 to-slate-900',
    'bg-cyan-400/25',
  ),
  '3. Время и досуг': createFallbackScene(
    'Время и досуг',
    '⏰',
    '🎭',
    'from-purple-500/30 via-pink-500/20 to-slate-900',
    'bg-purple-400/25',
  ),
  '4. Путешествия': createFallbackScene(
    'Путешествия',
    '✈️',
    '🏝️',
    'from-sky-500/30 via-teal-500/20 to-slate-900',
    'bg-sky-400/25',
  ),
  '5. Покупки и жалобы': createFallbackScene(
    'Покупки и сервис',
    '🛍️',
    '💰',
    'from-emerald-500/30 via-teal-500/20 to-slate-900',
    'bg-emerald-400/25',
  ),
  '6. Здоровье и ЗОЖ': createFallbackScene(
    'Здоровье и привычки',
    '🥗',
    '🩺',
    'from-green-500/30 via-emerald-500/20 to-slate-900',
    'bg-green-400/25',
  ),
  '7. Экология и Кипр': createFallbackScene(
    'Природа и экология',
    '🌳',
    '🌍',
    'from-emerald-500/30 via-lime-500/20 to-slate-900',
    'bg-emerald-400/25',
  ),
  '8. Работа и учеба': createFallbackScene(
    'Работа и учёба',
    '💼',
    '📝',
    'from-blue-500/30 via-indigo-500/20 to-slate-900',
    'bg-blue-400/25',
  ),
  '9. Технологии и СМИ': createFallbackScene(
    'Технологии и медиа',
    '💻',
    '📱',
    'from-violet-500/30 via-purple-500/20 to-slate-900',
    'bg-violet-400/25',
  ),
  '10. Город и службы': createFallbackScene(
    'Город и службы',
    '🏙️',
    '🚌',
    'from-sky-500/30 via-slate-500/20 to-slate-900',
    'bg-sky-400/25',
  ),
  '11. Топ-Глаголы B1': createFallbackScene(
    'Действие и результат',
    '⚡',
    '🎯',
    'from-amber-500/30 via-orange-500/20 to-slate-900',
    'bg-amber-400/25',
  ),
  '12. Связки и Штампы': createFallbackScene(
    'Полезные выражения',
    '✍️',
    '📜',
    'from-teal-500/30 via-cyan-500/20 to-slate-900',
    'bg-teal-400/25',
  ),
  '13. Чтение №3 (Формы)': createFallbackScene(
    'Чтение и формы',
    '🧩',
    '📖',
    'from-fuchsia-500/30 via-purple-500/20 to-slate-900',
    'bg-fuchsia-400/25',
  ),
  '14. Ловушки Аудирования': createFallbackScene(
    'Слушаем внимательно',
    '🎧',
    '💡',
    'from-rose-500/30 via-orange-500/20 to-slate-900',
    'bg-rose-400/25',
  ),
};

const DEFAULT_WORD_VISUAL_SCENE = createFallbackScene(
  'Новое слово',
  '📚',
  '✨',
  'from-sky-500/30 via-indigo-500/20 to-slate-900',
  'bg-sky-400/25',
);

function normalizeSceneKey(value: string): string {
  return value
    .normalize('NFC')
    .trim()
    .toLocaleLowerCase('el-GR')
    .replace(/\s+/g, ' ');
}

const NORMALIZED_WORD_VISUAL_SCENES: Record<string, WordVisualScene> = {};

for (const [key, scene] of Object.entries(WORD_VISUAL_SCENES)) {
  NORMALIZED_WORD_VISUAL_SCENES[normalizeSceneKey(key)] = scene;
}

/**
 * Resolves curated artwork first, then falls back to the word's module.
 * Unknown modules use a neutral vocabulary scene, so user-added words never
 * produce an empty or broken card.
 */
export function resolveWordVisualScene(
  item: VocabularyItem,
): WordVisualScene {
  const directScene = WORD_VISUAL_SCENES[item.greek];

  if (directScene) {
    return directScene;
  }

  const normalizedScene =
    NORMALIZED_WORD_VISUAL_SCENES[normalizeSceneKey(item.greek)];

  if (normalizedScene) {
    return normalizedScene;
  }

  return (
    MODULE_FALLBACK_SCENES[item.module] ??
    MODULE_FALLBACK_SCENES[item.module.trim()] ??
    DEFAULT_WORD_VISUAL_SCENE
  );
}
