import React from 'react';
import { useInView } from '../hooks/useInView';

interface Props {
    title: string;
    description: string;
    imgUrl: string;
    stack: string[];
    link: string;
    animDelay?: number;
}

const PortfolioItem: React.FC<Props> = ({ title, description, imgUrl, stack, link, animDelay = 0 }) => {
    const [ref, inView] = useInView();

    return (
        <div ref={ref} className="h-full">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block h-full border-stone-900 dark:border-white rounded-md transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-lg ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                style={inView ? { animationDelay: `${animDelay}ms` } : undefined}
            >
                <div className="h-full border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
                    <img
                        src={imgUrl}
                        alt={title}
                        loading="lazy"
                        className="w-full h-36 md:h-48 object-cover cursor-pointer"
                    />
                    <div className="w-full p-4">
                        <h3 className="text-lg md:text-xl dark:text-white mb-1 font-semibold">
                            {title}
                        </h3>
                        <p className="text-sm text-stone-500 dark:text-stone-400 mb-3">
                            {description}
                        </p>
                        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
                            {stack.map((item) => (
                                <span key={item} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                                    {item}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default PortfolioItem;
