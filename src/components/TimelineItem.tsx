import React from 'react';

interface Props {
    id: string | number;
    year: string | number;
    type: 'work' | 'education';
    title: string;
    duration: string;
    details: string[];
    chips: string[];
}

const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25V9.75A2.25 2.25 0 016 7.5h12a2.25 2.25 0 012.25 2.25v4.4zM15.75 7.5V6a2.25 2.25 0 00-2.25-2.25h-3A2.25 2.25 0 008.25 6v1.5" />
    </svg>
);

const GraduationCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
);

const TimelineItem: React.FC<Props> = ({ id, year, type, title, duration, details, chips }) => {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone border-stone-200 dark:border-stone-700">
            <li className="mb-10 ml-8">
                <div className="absolute -left-4 mt-0 flex items-center justify-center w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-700 border-2 border-white dark:border-stone-900 text-stone-700 dark:text-stone-200">
                    {type === 'work' ? <BriefcaseIcon /> : <GraduationCapIcon />}
                </div>
                <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                        {title}
                    </h3>
                    <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                        {duration}
                    </div>
                </div>
                <ul className="list-none list-outside">
                    {details.map((detail) => (
                        <li key={`timeline-${id}-detail-${detail}`} className="my-0.5 text-base font-normal text-stone-500 dark:text-stone-400">
                            {detail}
                        </li>
                    ))}
                </ul>
                <p className="my-5 flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
                    {chips.map((item) => (
                        <span key={`timeline-${id}-chip-${item}`} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </li>
        </ol>
    );
};

export default TimelineItem;