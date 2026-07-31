import { en, type Translations } from './en';

export const LOCALES = ['en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const translations: Record<Locale, Translations> = { en };
export type { Translations };
