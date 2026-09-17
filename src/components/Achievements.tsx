import React from 'react';

import { achievements, type Achievement } from '../data/achievements';
import AccordionItem from './AccordionItem';
import { useInView } from '../hooks/useInView';
import { useLang } from '../context/LangContext';

const GROUP_ORDER: Achievement['group'][] = ['education', 'certifications'];

const Achievements: React.FC = () => {
    const { t } = useLang();
    const [ref, inView] = useInView<HTMLDivElement>();

    const groups = GROUP_ORDER.map((group) => ({
        group,
        items: achievements.filter((item) => item.group === group),
    })).filter((entry) => entry.items.length > 0);

    return (
        <section id="achievements" className="py-20 border-t border-subtle">
            <div className="max-w-2xl mx-auto">
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-3">
                    {t('achievements.label')}
                </p>
                <h2 className="font-head text-2xl md:text-4xl font-bold tracking-tight text-fg mb-2">
                    {t('achievements.title')}
                </h2>
                <p className="text-sm md:text-base text-muted leading-relaxed max-w-[520px] mb-10">
                    {t('achievements.sub')}
                </p>

                <div ref={ref} className={`flex flex-col gap-8 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
                    {groups.map(({ group, items }) => (
                        <div key={group} className="flex flex-col gap-1">
                            <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-2">
                                {t(`achievements.groups.${group}`)}
                            </h3>
                            {items.map((item) => {
                                const details: string[] = t(item.detailsKey);

                                return (
                                    <AccordionItem
                                        key={`ach-${item.id}`}
                                        id={`ach-${item.id}`}
                                        title={item.title}
                                        subtitle={item.year ? `${item.subtitle} · ${item.year}` : item.subtitle}
                                        dotColor={item.dotColor}
                                    >
                                        <ul className="space-y-1">
                                            {details.map((line, i) =>
                                                line.startsWith('- ') ? (
                                                    <li key={`ach-${item.id}-detail-${i}`} className="flex gap-2">
                                                        <span aria-hidden="true">•</span>
                                                        <span>{line.slice(2)}</span>
                                                    </li>
                                                ) : (
                                                    <li key={`ach-${item.id}-detail-${i}`}>{line}</li>
                                                )
                                            )}
                                        </ul>

                                        <div className="flex flex-wrap gap-1.5 mt-3">
                                            {item.chips.map((chip) => (
                                                <span
                                                    key={`ach-${item.id}-chip-${chip}`}
                                                    className="rounded-full border border-subtle text-muted text-xs px-3 py-1"
                                                >
                                                    {chip}
                                                </span>
                                            ))}
                                        </div>
                                    </AccordionItem>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
