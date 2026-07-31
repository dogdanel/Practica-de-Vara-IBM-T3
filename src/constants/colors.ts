/**
 * Single source of truth for every colour used in the application.
 * The same values are exposed to CSS through `src/styles/tokens.css`.
 */
export const COLORS = {
  white: '#ffffff',
  primary: '#3bb77e',
  primaryDark: '#25ab71',
  primaryDarker: '#29a56c',
  primarySoft: '#def9ec',
  info: '#67bcee',
  danger: '#f74b81',
  starFilled: '#d5e400',
  starEmpty: '#888888',
  textPrimary: '#253d4e',
  textMuted: '#adadad',
  textSubtle: '#b6b6b6',
  textSecondary: '#6c757d',
  border: '#ececec',
} as const;

export type ColorName = keyof typeof COLORS;
