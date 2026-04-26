import { useEffect, useState } from 'react';
import SunIcon from './assets/sun.svg?react';
import MoonIcon from './assets/moon.svg?react';

import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

type Theme = 'dark' | 'light';

function App() {
    const [theme, setTheme] = useState<Theme | null>(null);

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

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={
                        <>
                            <button
                                type="button"
                                onClick={handleThemeSwitch}
                                className="absolute lg:fixed p-2 z-10 right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
                            >
                                {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
                            </button>
                            <div
                                className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
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

export default App;