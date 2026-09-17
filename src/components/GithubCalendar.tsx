import React, { useMemo, useState } from 'react';

import type { GithubContribution } from '../hooks/useGithubContributions';
import { useLang } from '../context/LangContext';

interface GithubCalendarProps {
    contributions: GithubContribution[];
    years: number[];
}

const LEVEL_CLASSES = [
    'bg-fg/5',
    'bg-accent/25',
    'bg-accent/45',
    'bg-accent/70',
    'bg-accent',
];

function levelFor(count: number): number {
    if (count <= 0) return 0;
    if (count >= 10) return 4;
    if (count >= 6) return 3;
    if (count >= 3) return 2;
    return 1;
}

function monthLabel(date: Date): string {
    return date.toLocaleDateString(undefined, { month: 'short' });
}

const GithubCalendar: React.FC<GithubCalendarProps> = ({ contributions, years }) => {
    const { t } = useLang();
    const latestYear = years.length ? years[years.length - 1] : null;
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const activeYear =
        selectedYear != null && years.includes(selectedYear) ? selectedYear : latestYear;

    const weeks = useMemo(() => {
        if (activeYear == null) return [];
        const yearData = contributions.filter(
            (c) => new Date(c.date).getFullYear() === activeYear
        );
        const grouped: GithubContribution[][] = [];
        let week: GithubContribution[] = [];
        yearData.forEach((c, i) => {
            week.push(c);
            if (new Date(c.date).getDay() === 6 || i === yearData.length - 1) {
                grouped.push(week);
                week = [];
            }
        });
        return grouped;
    }, [contributions, activeYear]);

    if (activeYear == null) {
        return <p className="text-sm text-muted mt-4">{t('stats.unavailable')}</p>;
    }

    return (
        <div className="mt-3">
            <div className="flex flex-wrap gap-1.5 mb-2.5">
                {years.map((year) => {
                    const active = year === activeYear;
                    return (
                        <button
                            key={year}
                            type="button"
                            onClick={() => setSelectedYear(year)}
                            className={`rounded-full border px-3 py-1 text-[0.72rem] transition-colors ${
                                active
                                    ? 'bg-accent-soft border-accent text-accent'
                                    : 'border-subtle text-muted hover:border-strong hover:text-fg'
                            }`}
                        >
                            {year}
                        </button>
                    );
                })}
            </div>

            <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="w-max">
                    <div className="flex gap-0.5 mb-1 h-[15px] text-[0.7rem] text-muted">
                        {weeks.map((w, i) => {
                            const firstDay = new Date(w[0].date);
                            const prevMonth =
                                i > 0 ? new Date(weeks[i - 1][0].date).getMonth() : -1;
                            const showLabel = firstDay.getMonth() !== prevMonth;
                            return (
                                <div key={i} className="w-2.5 shrink-0 relative">
                                    {showLabel && (
                                        <span className="absolute whitespace-nowrap">
                                            {monthLabel(firstDay)}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex gap-0.5">
                        {weeks.map((w, i) => (
                            <div key={i} className="flex flex-col gap-0.5 shrink-0">
                                {w.map((day) => {
                                    const level = levelFor(day.count);
                                    return (
                                        <div
                                            key={day.date}
                                            data-level={level}
                                            title={`${day.date}: ${day.count}`}
                                            className={`w-2.5 h-2.5 rounded-[2px] shrink-0 ${LEVEL_CLASSES[level]}`}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GithubCalendar;
