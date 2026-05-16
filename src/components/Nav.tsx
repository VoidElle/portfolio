import React from 'react';

const Nav: React.FC = () => {
    return (
        <nav className="sticky top-0 z-20 bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-stone-200 dark:border-stone-700">
            <div className="max-w-5xl w-11/12 mx-auto flex items-center justify-between h-12">
                <span className="font-bold text-stone-900 dark:text-white text-sm">
                    Luca Del Corona
                </span>
                <div className="flex gap-6 text-sm font-medium text-stone-600 dark:text-stone-400">
                    <a href="#portfolio" className="hover:text-stone-900 dark:hover:text-white transition-colors">Portfolio</a>
                    <a href="#timeline" className="hover:text-stone-900 dark:hover:text-white transition-colors">Timeline</a>
                    <a href="#contact" className="hover:text-stone-900 dark:hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
