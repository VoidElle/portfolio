import React from 'react';

interface Props {
    id: string | number;
    year: string | number;
    title: string;
    duration: string;
    details: string[];
    chips: string[];
}

const TimelineItem: React.FC<Props> = ({ id, year, title, duration, details, chips }) => {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone border-stone-200 dark:border-stone-700">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
                <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
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