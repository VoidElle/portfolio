import React from 'react';

import { COMPETITIVE_PROFILES, GITHUB_USERNAME, LEETCODE_USERNAME } from '../data/stats';
import { useGithubContributions } from '../hooks/useGithubContributions';
import { useInView } from '../hooks/useInView';
import { useLang } from '../context/useLang';
import GithubCalendar from './GithubCalendar';
import LeetCodeCard from './LeetCodeCard';
import CompetitiveCard from './CompetitiveCard';

const Stats: React.FC = () => {
    const { t } = useLang();
    const [ref, inView] = useInView<HTMLDivElement>();
    const { contributions, total, streak, years, loading, error } =
        useGithubContributions(GITHUB_USERNAME);

    return (
        <section id="stats" className="py-20 border-t border-subtle">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-3">
                {t('stats.label')}
            </p>
            <h2 className="font-head text-2xl md:text-4xl font-bold tracking-tight text-fg mb-2">
                {t('stats.title')}
            </h2>
            <p className="text-sm md:text-base text-muted leading-relaxed max-w-[520px] mb-10">
                {t('stats.sub')}
            </p>

            <div
                ref={ref}
                className={`grid grid-cols-1 min-[480px]:grid-cols-2 gap-4 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
            >
                <div className="min-[480px]:col-span-2 rounded-xl border border-subtle bg-surface p-6 hover:border-strong transition-colors">
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted flex items-center gap-2">
                        <i className="fab fa-github" aria-hidden="true" />
                        {t('stats.github')}
                        <span className="ml-auto text-muted normal-case tracking-normal">
                            {loading ? (
                                t('stats.loading')
                            ) : error ? (
                                t('stats.unavailable')
                            ) : (
                                <>
                                    <span>
                                        {t('stats.total')}{' '}
                                        <strong className="text-fg">{total}</strong>
                                    </span>
                                    <span className="mx-2">·</span>
                                    <span>
                                        {t('stats.streak')}{' '}
                                        <strong className="text-accent">{streak}</strong>
                                    </span>
                                </>
                            )}
                        </span>
                    </div>

                    {error ? (
                        <p className="text-sm text-muted mt-4">{t('stats.unavailable')}</p>
                    ) : (
                        !loading && <GithubCalendar contributions={contributions} years={years} />
                    )}
                </div>

                {LEETCODE_USERNAME ? <LeetCodeCard /> : null}
                {COMPETITIVE_PROFILES.length > 0 ? <CompetitiveCard /> : null}
            </div>
        </section>
    );
};

export default Stats;
