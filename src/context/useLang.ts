import { createContext, useContext } from 'react';
import en from '../assets/lang/en.json';

export type Lang = 'en' | 'it';

export type Translations = typeof en;

export interface LangContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (key: string) => any;
}

export const LangContext = createContext<LangContextType>({
    lang: 'en',
    setLang: () => {},
    t: (key) => key,
});

export const useLang = () => useContext(LangContext);
