import React from 'react';

import { COMPETITIVE_PROFILES } from '../data/stats';
import { useLang } from '../context/LangContext';

const CompetitiveCard: React.FC = () => {
    const { t } = useLang();

    if (COMPETITIVE_PROFILES.length === 0) return null;

    return (
        <div className="rounded-xl border border-subtle bg-surface p-6 hover:border-strong transition-colors">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted flex items-center gap-2">
                <i className="fas fa-chart-line" aria-hidden="true" />
                {t('stats.competitive')}
            </div>

            <div className="flex flex-col gap-2.5 mt-3.5">
                {COMPETITIVE_PROFILES.map((profile) => (
                    <div
                        key={profile.id}
                        className="flex items-center gap-3 rounded-lg border border-subtle bg-fg/[0.03] px-3.5 py-2.5 hover:border-strong transition-colors"
                    >
                        <span className="text-muted text-[0.95rem] shrink-0">
                            <i className={profile.icon} aria-hidden="true" />
                        </span>
                        <span className="flex-1 text-sm font-medium text-fg">
                            {profile.label}
                        </span>
                        <a
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-accent/35 text-accent hover:bg-accent-soft text-xs font-semibold px-3 py-1 transition-colors"
                        >
                            {t('stats.viewProfile')}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompetitiveCard;
