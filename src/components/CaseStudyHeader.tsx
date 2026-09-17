import React from 'react';

export interface CaseStudyLink {
    href: string;
    label: string;
    icon: string;
}

interface Props {
    title: string;
    subtitle: string;
    role: string;
    stack: string[];
    links: CaseStudyLink[];
    coverImg?: string;
    coverCaption?: string;
    titleRef?: React.Ref<HTMLHeadingElement>;
}

const badgeClass = 'rounded-full border border-subtle text-muted text-xs px-3 py-1 break-words';
const linkClass =
    'inline-flex items-center gap-1.5 rounded-full border border-subtle text-muted text-xs px-3 py-1 break-words transition-colors hover:text-fg hover:border-strong';

const CaseStudyHeader: React.FC<Props> = ({
    title,
    subtitle,
    role,
    stack,
    links,
    coverImg,
    coverCaption,
    titleRef,
}) => {
    return (
        <>
            <header className="pb-8 mb-12 border-b border-subtle">
                <h1
                    ref={titleRef}
                    tabIndex={-1}
                    className="font-head text-3xl md:text-5xl font-bold tracking-tight text-fg mb-4 focus:outline-none"
                >
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-base md:text-lg text-muted leading-relaxed mb-6">{subtitle}</p>
                )}
                <div className="flex flex-wrap gap-2">
                    {role && <span className={badgeClass}>{role}</span>}
                    {stack.length > 0 && <span className={badgeClass}>{stack.join(' · ')}</span>}
                    {links.map((link) => (
                        <a
                            key={`${link.href}-${link.label}`}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClass}
                        >
                            <i className={link.icon} aria-hidden="true" />
                            {link.label}
                        </a>
                    ))}
                </div>
            </header>

            {coverImg && (
                <>
                    <img
                        src={coverImg}
                        alt={title}
                        className="w-full h-auto rounded-xl border border-subtle mb-2"
                    />
                    {coverCaption && (
                        <p className="text-xs text-muted mb-12">{coverCaption}</p>
                    )}
                </>
            )}
        </>
    );
};

export default CaseStudyHeader;
