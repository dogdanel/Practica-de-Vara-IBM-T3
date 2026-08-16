export const FONT_FAMILIES = {
  heading: 'Quicksand, Arial, sans-serif',
  body: 'Lato, Arial, sans-serif',
} as const;

export const FONT_SIZES = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  md: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '2rem', // 32px
} as const;

export const LINE_HEIGHTS = {
  xs: '0.875rem', // 14px
  sm: '1.1875rem', // 19px
  md: '1.5rem', // 24px
  lg: '1.625rem', // 26px
  xl: '1.875rem', // 30px
  body: 1.4,
  none: 1,
} as const;

export const FONT_WEIGHTS = {
  regular: 400,
  semibold: 600,
  bold: 700,
} as const;

export type FontSizeName = keyof typeof FONT_SIZES;
