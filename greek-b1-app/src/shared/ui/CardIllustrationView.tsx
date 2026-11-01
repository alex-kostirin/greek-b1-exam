import React from 'react';
import { resolveWordVisualScene } from '../data/illustrations';
import type { WordVisualScene } from '../types/illustration';
import type { VocabularyItem } from '../types/vocabulary';

const TWEMOJI_BASE_URL =
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg';

const SVG_KEBAB_CASE_ATTRIBUTES: Record<string, string> = {
  strokeWidth: 'stroke-width',
  strokeDasharray: 'stroke-dasharray',
  strokeDashoffset: 'stroke-dashoffset',
  strokeLinecap: 'stroke-linecap',
  strokeLinejoin: 'stroke-linejoin',
  strokeMiterlimit: 'stroke-miterlimit',
  strokeOpacity: 'stroke-opacity',
  fillOpacity: 'fill-opacity',
  fillRule: 'fill-rule',
  clipRule: 'clip-rule',
  clipPath: 'clip-path',
  stopColor: 'stop-color',
  stopOpacity: 'stop-opacity',
  fontFamily: 'font-family',
  fontSize: 'font-size',
  fontWeight: 'font-weight',
  textAnchor: 'text-anchor',
};

/**
 * Batch motifs use React-style attribute names for readability. Since motifs
 * are inserted as SVG markup rather than JSX, CSS-style attributes must be
 * converted to their standards-compliant kebab-case equivalents.
 */
function normalizeSvgMotif(motif: string): string {
  return motif.replace(
    /\b(strokeWidth|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|fillOpacity|fillRule|clipRule|clipPath|stopColor|stopOpacity|fontFamily|fontSize|fontWeight|textAnchor)(?=\s*=)/g,
    (attribute) => SVG_KEBAB_CASE_ATTRIBUTES[attribute] ?? attribute,
  );
}

function emojiToTwemojiCode(emoji: string): string {
  const value = emoji.trim();

  // Accept explicit Twemoji codes as well as native emoji strings.
  if (/^[0-9a-f]+(?:-[0-9a-f]+)*$/i.test(value)) {
    return value
      .toLowerCase()
      .split('-')
      .filter((code) => code !== 'fe0e' && code !== 'fe0f')
      .join('-');
  }

  return Array.from(value)
    .map((character) => character.codePointAt(0)?.toString(16))
    .filter(
      (code): code is string =>
        Boolean(code) && code !== 'fe0e' && code !== 'fe0f',
    )
    .join('-');
}

function twemojiUrl(emoji: string): string {
  return `${TWEMOJI_BASE_URL}/${emojiToTwemojiCode(emoji)}.svg`;
}

interface EmojiImageProps {
  emoji: string;
  className: string;
}

const EmojiImage: React.FC<EmojiImageProps> = ({ emoji, className }) => (
  <img
    src={twemojiUrl(emoji)}
    alt=""
    aria-hidden="true"
    draggable={false}
    loading="lazy"
    decoding="async"
    className={`select-none object-contain ${className}`}
  />
);

interface SceneLayoutProps {
  scene: WordVisualScene;
  compact: boolean;
  captionVisible: boolean;
}

const SplitLayout: React.FC<SceneLayoutProps> = ({ scene, compact }) => (
  <>
    <div
      className="absolute inset-0 z-[1] grid grid-cols-2"
      aria-hidden="true"
    >
      <div className="bg-gradient-to-r from-emerald-400/20 via-emerald-400/5 to-transparent" />
      <div className="bg-gradient-to-l from-rose-400/20 via-rose-400/5 to-transparent" />
    </div>

    <div
      className="absolute inset-y-0 left-1/2 z-20 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/90 to-transparent shadow-[0_0_16px_rgba(255,255,255,0.8)]"
      aria-hidden="true"
    />

    <div
      className={`relative z-10 grid h-full w-full grid-cols-2 items-center ${
        compact ? 'px-3' : 'px-5'
      }`}
    >
      <div className="flex items-center justify-center">
        <EmojiImage
          emoji={scene.primaryEmoji}
          className={`${
            compact ? 'h-10 w-10' : 'h-14 w-14'
          } drop-shadow-[0_8px_16px_rgba(16,185,129,0.3)]`}
        />
      </div>
      <div className="flex items-center justify-center">
        <EmojiImage
          emoji={scene.secondaryEmoji}
          className={`${
            compact ? 'h-10 w-10' : 'h-14 w-14'
          } drop-shadow-[0_8px_16px_rgba(251,113,133,0.3)]`}
        />
      </div>
    </div>

    <div
      className={`absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-950/90 font-black text-white shadow-[0_0_18px_rgba(255,255,255,0.28)] backdrop-blur-sm ${
        compact ? 'h-6 w-6 text-xs' : 'h-8 w-8 text-sm'
      }`}
      aria-hidden="true"
    >
      ≠
    </div>

    {scene.accentEmoji && (
      <div
        className={`absolute right-2 top-2 z-20 rounded-lg border border-white/20 bg-slate-950/75 shadow-lg backdrop-blur-sm ${
          compact ? 'h-5 w-5 p-0.5' : 'h-7 w-7 p-1'
        }`}
      >
        <EmojiImage emoji={scene.accentEmoji} className="h-full w-full" />
      </div>
    )}
  </>
);

const CauseEffectLayout: React.FC<SceneLayoutProps> = ({
  scene,
  compact,
}) => {
  const usesEqualsConnector =
    /=|≡|синоним|то же|равнознач/i.test(scene.caption);

  return (
    <div
      className={`relative z-10 flex h-full w-full items-center justify-between ${
        compact ? 'px-4' : 'px-6'
      }`}
    >
      <EmojiImage
        emoji={scene.primaryEmoji}
        className={`${
          compact ? 'h-10 w-10' : 'h-14 w-14'
        } shrink-0 drop-shadow-[0_8px_16px_rgba(0,0,0,0.45)]`}
      />

      <div
        className={`relative mx-1 flex flex-1 items-center justify-center ${
          compact ? 'h-8 min-w-[2rem]' : 'h-12 min-w-[3rem]'
        }`}
        aria-hidden="true"
      >
        {usesEqualsConnector ? (
          <span
            className={`flex items-center justify-center rounded-full border border-white/25 bg-white/10 font-black text-white shadow-[0_0_16px_rgba(255,255,255,0.18)] backdrop-blur-sm ${
              compact ? 'h-6 w-6 text-sm' : 'h-8 w-8 text-lg'
            }`}
          >
            =
          </span>
        ) : (
          <>
            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent shadow-[0_0_8px_rgba(255,255,255,0.55)]" />
            <span
              className={`relative animate-pulse rounded-full bg-slate-950/35 px-1 leading-none text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.75)] ${
                compact ? 'text-xl' : 'text-2xl'
              }`}
            >
              →
            </span>
          </>
        )}

        {scene.accentEmoji && (
          <div
            className={`absolute left-1/2 -translate-x-1/2 rounded-md border border-white/20 bg-slate-950/80 shadow-md ${
              compact
                ? '-top-1 h-4 w-4 p-0.5'
                : '-top-2 h-5 w-5 p-0.5'
            }`}
          >
            <EmojiImage emoji={scene.accentEmoji} className="h-full w-full" />
          </div>
        )}
      </div>

      <EmojiImage
        emoji={scene.secondaryEmoji}
        className={`${
          compact ? 'h-10 w-10' : 'h-14 w-14'
        } shrink-0 drop-shadow-[0_8px_16px_rgba(0,0,0,0.45)]`}
      />
    </div>
  );
};

const NarrativeSceneLayout: React.FC<SceneLayoutProps> = ({
  scene,
  compact,
  captionVisible,
}) => (
  <>
    <div className="relative z-10 flex h-full w-full items-center justify-center">
      <div
        className={`absolute rounded-full bg-white/10 blur-xl ${
          compact ? 'h-14 w-14' : 'h-20 w-20'
        }`}
        aria-hidden="true"
      />
      <EmojiImage
        emoji={scene.primaryEmoji}
        className={`relative ${
          compact ? 'h-12 w-12' : 'h-16 w-16'
        } drop-shadow-[0_10px_18px_rgba(0,0,0,0.5)] transition-transform duration-300`}
      />
    </div>

    {scene.accentEmoji && (
      <div
        className={`absolute left-2 top-2 z-20 rounded-xl border border-white/20 bg-slate-950/75 shadow-lg backdrop-blur-sm ${
          compact ? 'h-6 w-6 p-1' : 'h-8 w-8 p-1.5'
        }`}
      >
        <EmojiImage emoji={scene.accentEmoji} className="h-full w-full" />
      </div>
    )}

    <div
      className={`absolute right-2 z-20 rounded-xl border border-white/20 bg-slate-950/85 shadow-lg backdrop-blur-sm ${
        captionVisible ? 'bottom-7' : 'bottom-2'
      } ${compact ? 'h-7 w-7 p-1' : 'h-9 w-9 p-1.5'}`}
    >
      <EmojiImage emoji={scene.secondaryEmoji} className="h-full w-full" />
    </div>
  </>
);

interface CardIllustrationViewProps {
  item: VocabularyItem;
  compact?: boolean;
  showCaption?: boolean;
}

export const CardIllustrationView: React.FC<CardIllustrationViewProps> = ({
  item,
  compact = false,
  showCaption = true,
}) => {
  const scene = resolveWordVisualScene(item);
  const captionVisible =
    showCaption && !compact && scene.caption.trim().length > 0;
  const normalizedMotif = normalizeSvgMotif(scene.svgMotif);
  const layoutProps: SceneLayoutProps = {
    scene,
    compact,
    captionVisible,
  };

  return (
    <div
      role="img"
      aria-label={scene.caption || 'Иллюстрация к слову'}
      className={`relative w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${
        compact ? 'h-20' : 'h-28'
      } ${scene.gradient}`}
    >
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl ${scene.glow}`}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 120 80"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          className="w-full h-full opacity-35 text-white/70"
          // Motifs are trusted static assets; custom user text never enters SVG markup.
          dangerouslySetInnerHTML={{ __html: normalizedMotif }}
        />
      </div>

      {scene.layout === 'split' && <SplitLayout {...layoutProps} />}
      {scene.layout === 'cause-effect' && (
        <CauseEffectLayout {...layoutProps} />
      )}
      {scene.layout === 'scene' && <NarrativeSceneLayout {...layoutProps} />}

      {captionVisible && (
        <div className="pointer-events-none absolute inset-x-2 bottom-1.5 z-30 flex justify-center">
          <span
            title={scene.caption}
            className="max-w-full truncate rounded-full border border-white/15 bg-slate-950/75 px-2.5 py-0.5 text-[9px] font-medium leading-3 tracking-wide text-white/85 shadow-lg backdrop-blur-md"
          >
            {scene.caption}
          </span>
        </div>
      )}
    </div>
  );
};
