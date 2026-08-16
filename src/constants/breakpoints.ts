export const BREAKPOINTS = {
  sm: '40rem', // 640px
  md: '48rem', // 768px
  lg: '64rem', // 1024px
  xl: '80rem', // 1280px
} as const;

export const MEDIA_QUERIES = {
  sm: `(min-width: ${BREAKPOINTS.sm})`,
  md: `(min-width: ${BREAKPOINTS.md})`,
  lg: `(min-width: ${BREAKPOINTS.lg})`,
  xl: `(min-width: ${BREAKPOINTS.xl})`,
} as const;

export type BreakpointName = keyof typeof BREAKPOINTS;
