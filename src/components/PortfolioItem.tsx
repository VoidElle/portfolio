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
                className={`block h-full rounded-xl border border-subtle bg-surface transition-all duration-200 hover:border-accent hover:-translate-y-0.5 hover:shadow-lg ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                style={inView ? { animationDelay: `${animDelay}ms` } : undefined}
            >
                <div className="h-full rounded-xl overflow-hidden">
                    <img
                        src={imgUrl}
                        alt={title}
                        loading="lazy"
                        className="w-full h-36 md:h-44 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-base font-semibold text-fg mb-1">
                            {title}
                        </h3>
                        <p className="text-sm text-muted mb-3 leading-relaxed">
                            {description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {stack.map((item) => (
                                <span key={item} className="inline-block px-2 py-0.5 text-xs font-medium border border-subtle rounded-md text-muted bg-main">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default PortfolioItem;

