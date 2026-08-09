/**
 * Typography scale. All values are in `rem` (1rem = 16px) so the UI scales
 * with the user's browser font-size settings. Never use `px` in components.
 */
export const FONT_SIZES = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  base: '0.9375rem', // 15px
  md: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.5rem', // 24px
  xxl: '1.625rem', // 26px
  display: '4.5rem', // 72px
  displayMobile: '2.25rem', // 36px
} as const;

export const LINE_HEIGHTS = {
  tight: '1.15',
  snug: '1.35',
  normal: '1.5',
  relaxed: '1.625',
  loose: '1.75',
} as const;

export const FONT_WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const FONT_FAMILIES = {
  heading: "'Quicksand', sans-serif",
  body: "'Lato', sans-serif",
} as const;

export type FontSizeName = keyof typeof FONT_SIZES;
