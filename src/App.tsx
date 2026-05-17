import { useEffect, useState } from 'react';
import SunIcon from './assets/sun.svg?react';
import MoonIcon from './assets/moon.svg?react';

import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LangProvider, useLang } from "./context/LangContext";

type Theme = 'dark' | 'light';

function AppInner() {
    const [theme, setTheme] = useState<Theme | null>(null);
    const { lang, setLang } = useLang();

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
        const themeColor = theme === 'dark' ? '#1c1917' : '#ffffff';
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.style.backgroundColor = themeColor;
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);
    }, [theme]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={
                        <>
                            <div className="absolute lg:fixed z-30 right-4 top-4 flex gap-2">
                                <button
                                    type="button"
                                    onClick={handleLangSwitch}
                                    aria-label={lang === 'en' ? 'Passa alla lingua italiana' : 'Switch to English'}
                                    className="px-3 py-2 bg-violet-300 dark:bg-orange-300 text-sm font-bold rounded-md"
                                >
                                    {lang === 'en' ? 'IT' : 'EN'}
                                </button>
                                <button
                                    type="button"
                                    onClick={handleThemeSwitch}
                                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                                    className="p-2 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
                                >
                                    {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
                                </button>
                            </div>
                            <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
                                <div className="max-w-5xl w-11/12 mx-auto">
                                    <Intro />
                                    <Portfolio />
                                    <Timeline />
                                    <Contact />
                                    <Footer />
                                </div>
                            </div>
                        </>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function App() {
    return (
        <LangProvider>
            <AppInner />
        </LangProvider>
    );
}
export default App;
