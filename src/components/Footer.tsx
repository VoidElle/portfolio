import React from 'react';
import { useLang } from '../context/useLang';
import { SITE } from '../data/site';

const Footer: React.FC = () => {
    const { t } = useLang();

    return (
        <footer className="relative z-[1] pb-14 pt-7">
            <div className="max-w-[860px] mx-auto px-1">
                <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 cover-footer" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-5 gap-0.5 text-center bg-gradient-to-t from-overlay/80 via-overlay/40 to-transparent">
                        <p className="text-xs sm:text-sm text-on-media/90">
                            {t('footer.credit')}{' '}
                            <a
                                href="https://github.com/VoidElle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-on-media underline underline-offset-[3px] decoration-on-media/50 hover:decoration-on-media"
                            >
                                {SITE.name}
                            </a>
                        </p>
                        <p className="text-xs sm:text-sm text-on-media/85">
                            &copy; {new Date().getFullYear()} {t('footer.rights')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
