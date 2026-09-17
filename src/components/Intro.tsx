import React from 'react';
import { useLang } from '../context/LangContext';
import { SITE } from '../data/site';

const initials = SITE.name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

const Intro: React.FC = () => {
    const { t } = useLang();
    const socials = SITE.socials.filter((social) => social.url.length > 0);

    return (
        <section id="hero" className="pt-14 pb-20">
            <div className="relative rounded-2xl border border-subtle bg-surface transition-colors hover:border-strong animate-fade-up">
                <div
                    className="relative h-40 rounded-t-2xl overflow-hidden"
                    style={{
                        background:
                            'linear-gradient(135deg, #0d1b0f 0%, #0e2a14 20%, #1a4a25 45%, #2d7d44 65%, #4dab68 80%, #c8e6b0 100%)',
                    }}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                'radial-gradient(ellipse at 60% 40%, rgb(0 199 88 / 0.35) 0%, transparent 65%), radial-gradient(ellipse at 20% 70%, rgb(0 102 255 / 0.2) 0%, transparent 50%)',
                        }}
                    />
                </div>

                <div className="relative z-[2] -mt-13 ml-7 w-[100px] h-[100px]">
                    {SITE.avatar ? (
                        <img
                            src={SITE.avatar}
                            alt={SITE.name}
                            className="w-[100px] h-[100px] rounded-full border-4 border-main object-cover"
                        />
                    ) : (
                        <div className="w-[100px] h-[100px] rounded-full border-4 border-main bg-surface bg-gradient-to-br from-accent-soft to-surface flex items-center justify-center font-head text-2xl font-bold text-fg select-none">
                            {initials}
                        </div>
                    )}
                </div>

                <div className="px-7 pt-3 pb-7">
                    <div
                        className="flex items-center gap-2 mb-0.5 animate-fade-up"
                        style={{ animationDelay: '120ms' }}
                    >
                        <h1 className="font-head text-2xl font-bold tracking-tight text-fg leading-tight">
                            {SITE.name}
                        </h1>
                        <span
                            className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent text-accent-contrast text-[0.65rem] font-bold"
                            title="Verified"
                            aria-hidden="true"
                        >
                            &#10003;
                        </span>
                    </div>

                    <p
                        className="text-sm text-muted mb-4 animate-fade-up"
                        style={{ animationDelay: '200ms' }}
                    >
                        {t('intro.subtitle')}
                    </p>

                    <p
                        className="text-sm md:text-base text-muted leading-relaxed max-w-[560px] mb-6 animate-fade-up"
                        style={{ animationDelay: '280ms' }}
                    >
                        {t('intro.bio')}
                    </p>

                    {SITE.resumeUrl && (
                        <div
                            className="flex flex-wrap items-center gap-3 mb-7 animate-fade-up"
                            style={{ animationDelay: '360ms' }}
                        >
                            <a
                                href={SITE.resumeUrl}
                                download
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#14de5e] to-[#00f068] text-black font-semibold text-sm px-6 py-2.5 transition-all hover:opacity-85 hover:-translate-y-0.5"
                            >
                                <i className="fas fa-file-alt" aria-hidden="true" />
                                {t('hero.resume')}
                            </a>
                        </div>
                    )}

                    <div
                        className="flex flex-col gap-2.5 animate-fade-up"
                        style={{ animationDelay: '440ms' }}
                    >
                        <span className="text-[0.82rem] text-muted">{t('hero.meOnInternet')}</span>
                        <div className="flex flex-wrap gap-2">
                            {socials.map((social) => (
                                <a
                                    key={social.id}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-full border border-subtle text-muted text-[0.8rem] font-medium px-3.5 py-1.5 transition-colors hover:text-fg hover:border-strong"
                                >
                                    <i className={social.icon} aria-hidden="true" />
                                    {t(social.labelKey)}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
