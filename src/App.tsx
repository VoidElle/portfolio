import { useEffect, useState } from 'react';
import SunIcon from './assets/sun.svg?react';
import MoonIcon from './assets/moon.svg?react';

import Nav from "./components/Nav";
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
        const themeColor = theme === 'dark' ? '#0f0e13' : '#fafaf9';
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);
    }, [theme]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={
                        <div
                            className="bg-main text-fg font-satoshi min-h-screen transition-colors duration-300"
                            style={{ background: 'var(--c-bg) radial-gradient(ellipse 60% 40% at 40% 0%, oklch(0.65 0.18 275 / 0.12) 0%, transparent 65%)' }}
                        >
                            <Nav
                                theme={theme}
                                lang={lang}
                                onThemeToggle={handleThemeSwitch}
                                onLangToggle={handleLangSwitch}
                                SunIcon={SunIcon}
                                MoonIcon={MoonIcon}
                            />
                            <div
                                className="max-w-5xl w-11/12 mx-auto transition-opacity duration-200"
                                style={{ opacity: transitioning ? 0 : 1 }}
                            >
                                <Intro />
                                <Portfolio />
                                <Timeline />
                                <Contact />
                                <Footer />
                            </div>
                        </div>
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

