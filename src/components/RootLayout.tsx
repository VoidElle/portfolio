import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import SunIcon from '../assets/sun.svg?react';
import MoonIcon from '../assets/moon.svg?react';

import Nav from './Nav';
import { useLang } from '../context/LangContext';

type Theme = 'dark' | 'light';

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            requestAnimationFrame(() => {
                document.querySelector(hash)?.scrollIntoView();
            });
            return;
        }
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [pathname, hash]);

    return null;
}

function RootLayout() {
    const [theme, setTheme] = useState<Theme | null>(null);
    const { lang, setLang, transitioning } = useLang();

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const handleLangSwitch = () => {
        setLang(lang === 'en' ? 'it' : 'en');
    };

    useEffect(() => {
        const themeColor = theme === 'dark' ? '#0a0a0a' : '#fafafa';
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);
    }, [theme]);

    return (
        <div className="text-fg font-body min-h-screen transition-colors duration-300">
            <ScrollToTop />
            <Nav
                theme={theme}
                lang={lang}
                onThemeToggle={handleThemeSwitch}
                onLangToggle={handleLangSwitch}
                SunIcon={SunIcon}
                MoonIcon={MoonIcon}
            />
            <div className="relative z-[1] max-w-[860px] w-11/12 mx-auto">
                <main>
                    <Outlet context={{ transitioning }} />
                </main>
            </div>
        </div>
    );
}

export default RootLayout;
