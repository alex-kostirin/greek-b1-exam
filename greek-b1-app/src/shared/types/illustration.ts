/**
 * Represents the visual scene configuration for a word illustration.
 *
 * This type describes the layout, visual styling, emoji elements,
 * caption, and SVG motif used to render a word's illustrative scene.
 */
export interface WordVisualScene {
  /**
   * The layout mode used to present the scene.
   *
   * - `split`: Displays content in a divided layout.
   * - `cause-effect`: Displays a causal relationship between elements.
   * - `scene`: Displays a single unified scene.
   */
  layout: 'split' | 'cause-effect' | 'scene';

  /**
   * The gradient definition used as the scene background or fill.
   *
   * This may be a CSS gradient string or a theme-specific gradient token.
   */
  gradient: string;

  /**
   * The glow effect applied to emphasized scene elements.
   *
   * This may be a CSS shadow/glow string or a design token.
   */
  glow: string;

  /**
   * The primary emoji representing the main concept of the word.
   */
  primaryEmoji: string;

  /**
   * The secondary emoji supporting the primary concept.
   */
  secondaryEmoji: string;

  /**
   * An optional accent emoji used for additional visual emphasis.
   */
  accentEmoji?: string;

  /**
   * The caption displayed alongside the illustration.
   */
  caption: string;

  /**
   * The SVG motif identifier or definition used in the scene.
   */
  svgMotif: string;
}
