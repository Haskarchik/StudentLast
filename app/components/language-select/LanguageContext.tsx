import { createContext } from 'react';

export type Language = "ua" | "ru";

interface ILanguageContext {
  language: string;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<ILanguageContext>({
  language: "ua",
  setLanguage: (language: Language) => {}
});
