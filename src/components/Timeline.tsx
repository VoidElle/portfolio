import React from 'react';

import timeline from "../data/timeline";
import { getTechIcon } from '../data/techIcons';
import AccordionItem from "./AccordionItem";
import { useLang } from '../context/useLang';

const DOT_COLORS = ['var(--c-swatch-green)', 'var(--c-swatch-purple)', 'var(--c-swatch-blue)', 'var(--c-swatch-amber)'];

const Timeline: React.FC = () => {
    const { t, lang } = useLang();
    const dateFormatter = new Intl.DateTimeFormat(lang, { month: 'long', year: 'numeric', timeZone: 'UTC' });
    const formatDate = (date: string) => dateFormatter.format(new Date(`${date}-01T00:00:00Z`));

    const work = timeline.filter((item) => item.type === 'work');

    return (
        <section id="timeline" className="py-20 border-t border-subtle">
            <div className="max-w-2xl mx-auto">
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-3">
                    {t('timeline.label')}
                </p>
                <h2 className="font-head text-2xl md:text-4xl font-bold tracking-tight text-fg mb-2">
                    {t('timeline.title')}
                </h2>
                <p className="text-sm md:text-base text-muted leading-relaxed max-w-[520px] mb-10">
                    {t('timeline.sub')}
                </p>

                <div className="flex flex-col gap-1">
                    {work.map((item, index) => {
                        const dateRange = `${formatDate(item.startDate)} – ${item.endDate ? formatDate(item.endDate) : t('timeline.current')}`;
                        const details: string[] = t(`timeline.entries.${item.id}.details`);

                        return (
                            <AccordionItem
                                key={`timeline-${item.id}`}
                                id={`timeline-${item.id}`}
                                title={item.title}
                                subtitle={dateRange}
                                dotColor={DOT_COLORS[index % DOT_COLORS.length]}
                            >
                                <ul className="space-y-1">
                                    {details.map((line, i) =>
                                        line.startsWith('- ') ? (
                                            <li key={`timeline-${item.id}-detail-${i}`} className="flex gap-2">
                                                <span aria-hidden="true">•</span>
                                                <span>{line.slice(2)}</span>
                                            </li>
                                        ) : (
                                            <li key={`timeline-${item.id}-detail-${i}`}>{line}</li>
                                        )
                                    )}
                                </ul>

                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {item.chips.map((chip) => (
                                        <span
                                            key={`timeline-${item.id}-chip-${chip}`}
                                            className="inline-flex items-center gap-1.5 rounded-full border border-subtle text-muted text-xs px-3 py-1"
                                        >
                                            <i className={`${getTechIcon(chip)} shrink-0`} aria-hidden="true" />
                                            {chip}
                                        </span>
                                    ))}
                                </div>
                            </AccordionItem>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
