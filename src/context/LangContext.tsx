import React, { createContext, useContext, useEffect, useState } from 'react';
import en from '../assets/lang/en.json';
import it from '../assets/lang/it.json';

export type Lang = 'en' | 'it';

const translations: Record<Lang, typeof en> = { en, it };

interface LangContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (key: string) => any;
}

const LangContext = createContext<LangContextType>({
    lang: 'en',
    setLang: () => {},
    t: (key) => key,
});

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLangState] = useState<Lang>(() => {
        const stored = localStorage.getItem('lang');
        if (stored === 'en' || stored === 'it') return stored;
        return navigator.language.startsWith('it') ? 'it' : 'en';
    });

    const setLang = (l: Lang) => {
        setLangState(l);
        localStorage.setItem('lang', l);
    };

    const t = (key: string): any => {
        const keys = key.split('.');
        let val: any = translations[lang];
        for (const k of keys) {
            if (val == null) return key;
            val = val[k];
        }
        return val ?? key;
    };

    useEffect(() => {
        document.documentElement.setAttribute('lang', lang);
    }, [lang]);

    return (
        <LangContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => useContext(LangContext);
