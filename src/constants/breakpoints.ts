/**
 * Responsive breakpoints (rem based, 1rem === 16px).
 * These are the only breakpoints allowed in the app; the CSS media queries
 * in `src/styles/responsive.css` mirror these exact values.
 */
export const BREAKPOINTS = {
  xs: '27.5rem', // 440px
  sm: '40rem', // 640px
  md: '47.5rem', // 760px
  lg: '56.25rem', // 900px
  xl: '65.625rem', // 1050px
  xxl: '82.25rem', // 1316px
} as const;

export type BreakpointName = keyof typeof BREAKPOINTS;

export const mediaMaxWidth = (name: BreakpointName): string =>
  `(max-width: ${BREAKPOINTS[name]})`;
