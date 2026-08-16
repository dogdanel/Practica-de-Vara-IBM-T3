export { default as I18nProvider } from './I18nProvider';
export { default as useTranslation } from './useTranslation';
export { I18nContext, type I18nContextValue } from './I18nContext';
export { DEFAULT_LOCALE, LOCALES, translations, type Locale, type Translations } from './translations';

/** Dot-separated key into the translation dictionary, e.g. `category.all`. */
export type TranslationKey = string;
