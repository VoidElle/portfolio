import React from 'react';
import { useLang } from '../context/LangContext';

interface NavProps {
    theme: 'dark' | 'light' | null;
    lang: string;
    onThemeToggle: () => void;
    onLangToggle: () => void;
    SunIcon: React.FC<React.SVGProps<SVGSVGElement>>;
    MoonIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Nav: React.FC<NavProps> = ({ theme, lang, onThemeToggle, onLangToggle, SunIcon, MoonIcon }) => {
    const { t } = useLang();

    return (
        <nav className="sticky top-0 z-30 bg-main-blur backdrop-blur-md border-b border-subtle">
            <div className="max-w-5xl w-11/12 mx-auto flex items-center justify-between h-12">
                <a href="/" className="font-semibold text-fg text-sm tracking-tight hover:text-accent transition-colors">
                    Luca Del Corona
                </a>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-5 text-sm font-medium text-muted">
                        <a href="#portfolio" className="hover:text-fg transition-colors">{t('portfolio.title')}</a>
                        <a href="#timeline" className="hover:text-fg transition-colors">{t('timeline.title')}</a>
                        <a href="#contact" className="hover:text-fg transition-colors">{t('contact.title')}</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={onLangToggle}
                            aria-label={lang === 'en' ? 'Passa alla lingua italiana' : 'Switch to English'}
                            className="h-8 w-8 flex items-center justify-center text-xs font-semibold rounded-md border border-subtle text-fg hover:border-accent hover:text-accent transition-colors"
                        >
                            {lang === 'en' ? 'IT' : 'EN'}
                        </button>
                        <button
                            type="button"
                            onClick={onThemeToggle}
                            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                            className="h-8 w-8 flex items-center justify-center rounded-md border border-subtle text-fg hover:border-accent hover:text-accent transition-colors"
                        >
                            {theme === 'dark'
                                ? <SunIcon className="w-4 h-4" />
                                : <MoonIcon className="w-4 h-4" />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;

