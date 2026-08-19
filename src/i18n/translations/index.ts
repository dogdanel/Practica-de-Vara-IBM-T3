import { en } from "./en";
import { ro } from "./ro";
import { fr } from "./fr";

export const DEFAULT_LOCALE = "en";
export const LOCALES = ["en", "ro", "fr"] as const;

export const translations = {
 en,
 ro,
 fr,
};

export type Language = keyof typeof translations;
export type Locale = Language;
export type Translations = typeof en;
