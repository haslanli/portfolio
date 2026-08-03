/**
 * Geometry for the ruled field beside the name.
 *
 * Coordinates are normalised to 0..1 and mapped to pixels by the consumer, so the
 * inline SVG rendered at build time and the canvas that takes over on the client
 * describe the same composition. Nothing here encodes a quantity.
 */

export type FieldLine = {
  x: number;
  y0: number;
  y1: number;
  accent: boolean;
};

export const LINE_COUNT = 22;
export const ACCENT_INDEX = 6;

/** Stable pseudo-irregularity: golden-angle rotation, so no two neighbours match. */
function wobble(i: number): number {
  return Math.sin(i * 2.399963229728653);
}

export function fieldLines(): FieldLine[] {
  const lines: FieldLine[] = [];
  for (let i = 0; i < LINE_COUNT; i++) {
    const t = i / (LINE_COUNT - 1);
    // Gaps open on the left, where the field meets the text, and close toward the
    // right margin. The rhythm is the composition; every line runs the full height.
    const x = 0.03 + 0.94 * Math.pow(t, 0.56);
    const w = wobble(i);
    lines.push({
      x,
      y0: 0.05 + 0.03 * w,
      y1: 0.95 + 0.03 * wobble(i + 7),
      accent: i === ACCENT_INDEX,
    });
  }
  return lines;
}

/** Vertical samples per line when the field is deformed. */
export const SAMPLES = 26;
