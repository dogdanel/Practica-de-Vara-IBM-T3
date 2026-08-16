export const COLORS = {
  brandDark: '#253d4e',
  brandGreen: '#3bb77e',
  brandGray: '#7e7e7e',
  brandGrayLight: '#adadad',
  textDark: '#242424',
  borderLight: '#bce3c9',
  white: '#ffffff',
  surface: '#f3f4f6',
  surfaceMuted: '#f4f6fa',
  surfaceHero: '#e5f6ec',
  placeholder: '#838383',
} as const;

export type ColorName = keyof typeof COLORS;
