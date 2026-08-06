import React, { createContext, useCallback, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { DEFAULT_LOCALE, translations } from './translations';
import type { Locale, TranslationKey } from './translations';

type TranslateValues = Record<string, string | number>;

export interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey, values?: TranslateValues) => string;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

const interpolate = (template: string, values?: TranslateValues): string => {
  if (!values) return template;
  return Object.entries(values).reduce(
    (text, [name, value]) => text.split(`{${name}}`).join(String(value)),
    template,
  );
};

interface I18nProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({
  children,
  initialLocale = DEFAULT_LOCALE,
}) => {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const t = useCallback(
    (key: TranslationKey, values?: TranslateValues) =>
      interpolate(translations[locale][key] ?? key, values),
    [locale],
  );

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t }),
    [locale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
