import React from 'react';
import { useInView } from '../hooks/useInView';

interface Props {
    id: string | number;
    year: string | number;
    type: 'work' | 'education';
    title: string;
    duration: string;
    details: string[];
    chips: string[];
    animDelay?: number;
}

const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25V9.75A2.25 2.25 0 016 7.5h12a2.25 2.25 0 012.25 2.25v4.4zM15.75 7.5V6a2.25 2.25 0 00-2.25-2.25h-3A2.25 2.25 0 008.25 6v1.5" />
    </svg>
);

const GraduationCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
);

const TimelineItem: React.FC<Props> = ({ id, year, type, title, duration, details, chips, animDelay = 0 }) => {
    const [ref, inView] = useInView<HTMLDivElement>();

    return (
        <div
            ref={ref}
            className={`relative border-l border-subtle pl-8 pb-10 last:pb-0 ${inView ? 'animate-slide-in-left' : 'opacity-0'}`}
            style={inView ? { animationDelay: `${animDelay}ms` } : undefined}
        >
            {/* Timeline dot */}
            <div className="absolute -left-3.5 top-0.5 flex items-center justify-center w-7 h-7 rounded-full bg-surface border border-subtle text-accent">
                {type === 'work' ? <BriefcaseIcon /> : <GraduationCapIcon />}
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-md border border-subtle text-accent bg-main">
                    {year}
                </span>
                <h3 className="text-base font-semibold text-fg">
                    {title}
                </h3>
                <span className="text-xs text-muted">
                    {duration}
                </span>
            </div>

            <ul className="list-none mb-3 space-y-0.5">
                {details.map((detail) => (
                    <li key={`timeline-${id}-detail-${detail}`} className="text-sm text-muted leading-relaxed">
                        {detail}
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
                {chips.map((item) => (
                    <span key={`timeline-${id}-chip-${item}`} className="inline-block px-2 py-0.5 text-xs font-medium border border-subtle rounded-md text-muted bg-main">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TimelineItem;

