import { useState } from 'react';
import idTranslations from '@/i18n/id.json';
import enTranslations from '@/i18n/en.json';

type Language = 'id' | 'en';
type TranslationValue = string | string[] | Record<string, unknown>;

const translations = {
  id: idTranslations,
  en: enTranslations,
};

export function useTranslation() {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): TranslationValue => {
    const keys = key.split('.');
    let value: TranslationValue = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        value = value[k] as TranslationValue;
      } else {
        return key;
      }
    }
    
    return value ?? key;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return { t, language, changeLanguage };
}
