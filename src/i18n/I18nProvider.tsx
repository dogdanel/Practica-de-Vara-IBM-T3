import { useCallback, useMemo, useState, type ReactNode } from "react";
import { I18nContext, type I18nContextValue } from "./I18nContext";
import { DEFAULT_LOCALE, translations, type Locale } from "./translations";

interface I18nProviderProps {
 children: ReactNode;
 initialLocale?: Locale;
}

function resolve(dictionary: unknown, key: string): string | undefined {
 const value = key.split(".").reduce<unknown>((acc, part) => {
  if (
   acc &&
   typeof acc === "object" &&
   part in (acc as Record<string, unknown>)
  ) {
   return (acc as Record<string, unknown>)[part];
  }
  return undefined;
 }, dictionary);

 return typeof value === "string" ? value : undefined;
}

function interpolate(
 text: string,
 params?: Record<string, string | number>,
): string {
 if (!params) return text;
 return text.replace(/\{\{(\w+)\}\}/g, (match, name: string) =>
  name in params ? String(params[name]) : match,
 );
}

export default function I18nProvider({
 children,
 initialLocale = DEFAULT_LOCALE,
}: I18nProviderProps) {
 const [locale, setLocale] = useState<Locale>(initialLocale);

 const t = useCallback<I18nContextValue["t"]>(
  (key, params) => {
   const text =
    resolve(translations[locale], key) ??
    resolve(translations[DEFAULT_LOCALE], key);
   if (text === undefined) {
    if (import.meta.env.DEV)
     console.warn(`[i18n] Missing translation for "${key}"`);
    return key;
   }
   return interpolate(text, params);
  },
  [locale],
 );

 const value = useMemo<I18nContextValue>(
  () => ({ locale, setLocale, t }),
  [locale, t],
 );

 return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
