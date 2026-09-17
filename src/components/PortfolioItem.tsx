import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { useLang } from '../context/LangContext';
import { TECH_ICONS } from '../data/techIcons';

interface Props {
    title: string;
    description: string;
    imgUrl?: string;
    imgContain?: boolean;
    stack: string[];
    link?: string;
    source?: string;
    caseStudy?: string;
    animDelay?: number;
}

const PortfolioItem: React.FC<Props> = ({ title, description, imgUrl, imgContain = false, stack, link, source, caseStudy, animDelay = 0 }) => {
    const { t } = useLang();
    const [ref, inView] = useInView<HTMLDivElement>();
    const isGithub = link?.includes('github.com') ?? false;

    const links: { href: string; label: string; icon: string }[] = [];
    if (link && !isGithub) links.push({ href: link, label: t('projects.live'), icon: 'fas fa-external-link-alt' });
    if (link && isGithub) links.push({ href: link, label: t('projects.code'), icon: 'fab fa-github' });
    if (source && source !== link) links.push({ href: source, label: t('projects.code'), icon: 'fab fa-github' });

    return (
        <div
            ref={ref}
            className={`group flex flex-col rounded-[14px] border border-subtle bg-surface overflow-hidden transition-all duration-300 hover:border-strong hover:-translate-y-1 hover:shadow-2xl ${inView ? 'animate-fade-up' : 'opacity-0'}`}
            style={inView ? { animationDelay: `${animDelay}ms` } : undefined}
        >
            <div className="overflow-hidden">
                {imgUrl ? (
                    <img
                        src={imgUrl}
                        alt={title}
                        loading="lazy"
                        className={`w-full h-48 transition-transform duration-500 group-hover:scale-105 ${imgContain ? 'object-contain p-6' : 'object-cover'}`}
                    />
                ) : (
                    <div
                        aria-hidden="true"
                        className="w-full h-48 flex items-center justify-center bg-accent-soft transition-transform duration-500 group-hover:scale-105"
                    >
                        <span className="font-head text-4xl font-bold text-accent/70 tracking-tight">
                            {title.slice(0, 2).toUpperCase()}
                        </span>
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2.5 flex-wrap">
                    <h3 className="font-head font-bold text-fg">{title}</h3>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                        {caseStudy && (
                            <Link
                                to={`/projects/${caseStudy}`}
                                aria-label={`${title} - ${t('projects.caseStudy')}`}
                                className="inline-flex items-center gap-1 rounded-full border border-subtle text-[0.68rem] font-semibold text-muted px-2.5 py-0.5 transition-colors hover:text-fg hover:border-strong group-hover:text-fg group-hover:border-strong"
                            >
                                <i className="fas fa-book-open" aria-hidden="true" />
                                {t('projects.caseStudy')}
                            </Link>
                        )}
                        {links.map(({ href, label, icon }) => (
                            <a
                                key={`${href}-${label}`}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${title} - ${label}`}
                                className="inline-flex items-center gap-1 rounded-full border border-subtle text-[0.68rem] font-semibold text-muted px-2.5 py-0.5 transition-colors hover:text-fg hover:border-strong group-hover:text-fg group-hover:border-strong"
                            >
                                <i className={icon} aria-hidden="true" />
                                {label}
                            </a>
                        ))}
                    </div>
                </div>

                <p className="text-xs text-muted leading-relaxed mb-3.5 flex-1">
                    {description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {stack.map((item) => (
                        <span
                            key={item}
                            className="inline-flex items-center gap-1 rounded border border-subtle text-[0.64rem] text-muted px-2 py-0.5"
                        >
                            {TECH_ICONS[item] && <i className={TECH_ICONS[item]} aria-hidden="true" />}
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;
