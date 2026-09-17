import React from 'react';

import { skills, coreSkills } from '../data/skills';
import { TECH_ICONS } from '../data/techIcons';
import { useInView } from '../hooks/useInView';
import { useLang } from '../context/LangContext';

const Skills: React.FC = () => {
    const { t } = useLang();
    const [ref, inView] = useInView<HTMLDivElement>();

    return (
        <section id="skills" className="py-20 border-t border-subtle">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-3">
                {t('skills.label')}
            </p>
            <h2 className="font-head text-2xl md:text-4xl font-bold tracking-tight text-fg mb-2">
                {t('skills.title')}
            </h2>
            <p className="text-sm md:text-base text-muted leading-relaxed max-w-[520px] mb-10">
                {t('skills.sub')}
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-8">
                <span className="text-[0.72rem] font-semibold tracking-widest uppercase text-accent mr-1">
                    {t('skills.core')}
                </span>
                {coreSkills.map((label) => {
                    const icon = TECH_ICONS[label];
                    return (
                        <span
                            key={`core-${label}`}
                            className="rounded-full border border-accent/40 bg-accent-soft text-fg text-sm font-medium px-3.5 py-1.5 inline-flex items-center gap-1.5"
                        >
                            {icon && <i className={icon} aria-hidden="true" />}
                            {label}
                        </span>
                    );
                })}
            </div>

            <div ref={ref} className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((group, index) => (
                    <div
                        key={group.id}
                        className={`rounded-xl border border-subtle bg-surface p-5 hover:border-strong transition-colors ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                        style={inView ? { animationDelay: `${index * 80}ms` } : undefined}
                    >
                        <div className="text-[0.72rem] font-semibold tracking-widest uppercase text-accent flex items-center gap-2">
                            <i className={group.icon} aria-hidden="true" />
                            {t(`skills.groups.${group.labelKey}`)}
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                            {group.items.map((item) => {
                                const icon = item.icon ?? TECH_ICONS[item.label];
                                return (
                                    <span
                                        key={item.label}
                                        className="rounded-full border border-subtle text-muted text-sm px-3 py-1 inline-flex items-center gap-1.5 transition-[color,border-color,transform] active:scale-[0.97] hover:text-fg hover:border-strong"
                                    >
                                        {icon && <i className={icon} aria-hidden="true" />}
                                        {item.label}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
