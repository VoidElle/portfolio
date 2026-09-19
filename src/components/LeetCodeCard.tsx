import React from 'react';

import { LEETCODE_URL, LEETCODE_USERNAME } from '../data/stats';
import { useLeetCode } from '../hooks/useLeetCode';
import { useLang } from '../context/useLang';

const DIFFICULTIES = [
    { key: 'easy', color: 'var(--c-swatch-green)' },
    { key: 'medium', color: 'var(--c-swatch-amber)' },
    { key: 'hard', color: 'var(--c-swatch-red)' },
] as const;

const LeetCodeCard: React.FC = () => {
    const { t } = useLang();
    const { data } = useLeetCode(LEETCODE_USERNAME);

    if (!LEETCODE_USERNAME) return null;

    const easy = data?.easySolved ?? 0;
    const medium = data?.mediumSolved ?? 0;
    const hard = data?.hardSolved ?? 0;
    const total = data?.solvedProblem ?? easy + medium + hard;
    const pct = (value: number) => (total > 0 ? (value / total) * 100 : 0);

    const counts: Record<(typeof DIFFICULTIES)[number]['key'], number> = {
        easy,
        medium,
        hard,
    };

    return (
        <div className="rounded-xl border border-subtle bg-surface p-6 hover:border-strong transition-colors">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted flex items-center gap-2">
                <i className="fas fa-code" aria-hidden="true" />
                {t('stats.leetcode')}
                {LEETCODE_URL && (
                    <a
                        href={LEETCODE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-muted hover:text-fg transition-[color,transform] active:scale-[0.97]"
                        aria-label={t('stats.viewProfile')}
                    >
                        <i className="fas fa-external-link-alt" aria-hidden="true" />
                    </a>
                )}
            </div>

            <div className="font-head text-3xl font-bold tracking-tight text-fg mt-4 leading-none">
                {data ? data.solvedProblem : '-'}
            </div>
            <div className="text-xs text-muted mt-1">{t('stats.problemsSolved')}</div>

            <div className="mt-4">
                <div className="flex justify-between items-center text-[0.78rem] font-medium mb-1.5">
                    {DIFFICULTIES.map(({ key, color }) => (
                        <span key={key} style={{ color }}>
                            {t(`stats.${key}`)}{' '}
                            <span className="text-fg">{data ? counts[key] : '-'}</span>
                        </span>
                    ))}
                </div>
                <div className="h-1.5 rounded-full bg-fg/10 flex overflow-hidden">
                    {DIFFICULTIES.map(({ key, color }) => (
                        <div
                            key={key}
                            className="h-full origin-left transition-transform duration-200 ease-out lc-bar"
                            style={{ width: `${pct(counts[key])}%`, transform: `scaleX(${data ? 1 : 0})`, backgroundColor: color }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeetCodeCard;
