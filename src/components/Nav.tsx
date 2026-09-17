import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LangContext';

interface NavProps {
    theme: 'dark' | 'light' | null;
    lang: string;
    onThemeToggle: () => void;
    onLangToggle: () => void;
    SunIcon: React.FC<React.SVGProps<SVGSVGElement>>;
    MoonIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const NAV_LINKS = [
    { id: 'hero', key: 'nav.home' },
    { id: 'projects', key: 'nav.projects' },
    { id: 'skills', key: 'nav.skills' },
    { id: 'stats', key: 'nav.stats' },
    { id: 'achievements', key: 'nav.achievements' },
    { id: 'contact', key: 'nav.contact' },
] as const;

const Nav: React.FC<NavProps> = ({ theme, lang, onThemeToggle, onLangToggle, SunIcon, MoonIcon }) => {
    const { t } = useLang();
    const { pathname } = useLocation();
    const isHome = pathname === '/';
    const [active, setActive] = useState<string>('hero');
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const handleAnchorClick = () => setMenuOpen(false);

    return (
        <>
            <nav className="sticky top-0 z-30 h-16 border-b border-subtle bg-main-blur backdrop-blur-md">
                <div className="max-w-[860px] w-11/12 mx-auto h-full flex items-center justify-between">
                    <Link
                        to="/"
                        className="font-head font-bold text-xl tracking-tight text-fg hover:opacity-90 transition-[opacity,transform] active:scale-[0.97]"
                    >
                        Luca<span className="text-accent">.</span>
                    </Link>

                    {isHome && (
                        <div className="hidden md:flex gap-1">
                            {NAV_LINKS.map(({ id, key }) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-[color,background-color,transform] active:scale-[0.97] ${
                                        active === id
                                            ? 'text-fg bg-fg/5'
                                            : 'text-muted hover:text-fg hover:bg-fg/5'
                                    }`}
                                >
                                    {t(key)}
                                </a>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={onLangToggle}
                            aria-label={lang === 'en' ? 'Passa alla lingua italiana' : 'Switch to English'}
                            className="h-8 w-8 flex items-center justify-center text-xs font-semibold rounded-lg border border-subtle text-fg hover:border-strong hover:text-accent transition-[color,border-color,transform] active:scale-[0.97]"
                        >
                            {lang === 'en' ? 'IT' : 'EN'}
                        </button>
                        <button
                            type="button"
                            onClick={onThemeToggle}
                            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                            className="h-8 w-8 flex items-center justify-center rounded-lg border border-subtle text-fg hover:border-strong hover:text-accent transition-[color,border-color,transform] active:scale-[0.97]"
                        >
                            {theme === 'dark'
                                ? <SunIcon className="w-4 h-4" />
                                : <MoonIcon className="w-4 h-4" />
                            }
                        </button>
                        {isHome && (
                            <button
                                type="button"
                                onClick={() => setMenuOpen(true)}
                                aria-label="Open menu"
                                className="md:hidden h-8 w-8 flex items-center justify-center rounded-lg border border-subtle text-fg hover:border-strong hover:text-accent transition-[color,border-color,transform] active:scale-[0.97]"
                            >
                                <i className="fas fa-bars" aria-hidden="true" />
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            {isHome && menuOpen && (
                <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-main/95 backdrop-blur-md md:hidden">
                    <button
                        type="button"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className="absolute top-5 right-6 text-xl text-muted hover:text-fg transition-[color,transform] active:scale-[0.97]"
                    >
                        <i className="fas fa-times" aria-hidden="true" />
                    </button>
                    {NAV_LINKS.map(({ id, key }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={handleAnchorClick}
                            className={`font-head text-2xl font-semibold transition-[color,transform] active:scale-[0.97] ${
                                active === id ? 'text-fg' : 'text-muted hover:text-fg'
                            }`}
                        >
                            {t(key)}
                        </a>
                    ))}
                </div>
            )}
        </>
    );
};

export default Nav;
