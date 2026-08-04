import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../public/locales/en/translation.json'
import ro from '../public/locales/ro/translation.json'

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ro: { translation: ro },
  },
  lng: 'en',
  fallbackLng: 'ro',
  interpolation: { escapeValue: false },
})