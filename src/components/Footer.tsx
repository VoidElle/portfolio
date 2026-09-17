import React from 'react';
import { useLang } from '../context/LangContext';
import { SITE } from '../data/site';

const Footer: React.FC = () => {
    const { t } = useLang();

    return (
        <footer className="relative z-[1] pb-14 pt-7">
            <div className="max-w-[860px] mx-auto px-1">
                <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle at 20% 0%, rgba(207,232,189,0.35), transparent 55%), linear-gradient(135deg, #0b1a10, #17452a, #3f9e63, #cfe8bd)',
                        }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-5 gap-0.5 text-center bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <p className="text-xs sm:text-sm text-white/90">
                            {t('footer.credit')}{' '}
                            <a
                                href="https://github.com/VoidElle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white underline underline-offset-[3px] decoration-white/50 hover:decoration-white"
                            >
                                {SITE.name}
                            </a>
                        </p>
                        <p className="text-xs sm:text-sm text-white/85">
                            &copy; {new Date().getFullYear()} {t('footer.rights')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
