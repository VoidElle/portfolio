import React, { createContext, useContext, useEffect, useState } from 'react';
import en from '../assets/lang/en.json';

export type Lang = 'en' | 'it';

type Translations = typeof en;

const translations: Partial<Record<Lang, Translations>> = { en };

async function loadLang(lang: Lang): Promise<Translations> {
    if (translations[lang]) return translations[lang]!;
    // Only non-default languages need dynamic loading; 'en' is already bundled
    if (lang === 'it') {
        const mod = await import('../assets/lang/it.json');
        translations['it'] = mod.default as Translations;
    }
    return translations[lang]!;
}

interface LangContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    transitioning: boolean;
    t: (key: string) => any;
}

const LangContext = createContext<LangContextType>({
    lang: 'en',
    setLang: () => {},
    transitioning: false,
    t: (key) => key,
});

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLangState] = useState<Lang>(() => {
        const stored = localStorage.getItem('lang');
        if (stored === 'en' || stored === 'it') return stored;
        return navigator.language.startsWith('it') ? 'it' : 'en';
    });
    const [transitioning, setTransitioning] = useState(false);
    const [loadedLang, setLoadedLang] = useState<Lang>('en');

    // Eagerly preload the initial language (may differ from 'en')
    useEffect(() => {
        loadLang(lang).then(() => setLoadedLang(lang));
    }, []);

    const setLang = (l: Lang) => {
        setTransitioning(true);
        loadLang(l).then(() => {
            setTimeout(() => {
                setLangState(l);
                setLoadedLang(l);
                localStorage.setItem('lang', l);
                setTransitioning(false);
            }, 200);
        });
    };

    const t = (key: string): any => {
        const activeLang = translations[lang] ?? translations[loadedLang] ?? translations['en']!;
        const keys = key.split('.');
        let val: any = activeLang;
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
        <LangContext.Provider value={{ lang, setLang, transitioning, t }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => useContext(LangContext);
