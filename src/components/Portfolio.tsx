import React from 'react';

import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import { useLang } from '../context/LangContext';

const Portfolio: React.FC = () => {
    const { t } = useLang();

    return (
        <section id="projects" className="py-20 border-t border-subtle">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-3">
                {t('projects.label')}
            </p>
            <h2 className="font-head text-2xl md:text-4xl font-bold tracking-tight text-fg mb-2">
                {t('projects.title')}
            </h2>
            <p className="text-sm md:text-base text-muted leading-relaxed max-w-[520px] mb-10">
                {t('projects.sub')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {portfolio.map((project, index) => (
                    <PortfolioItem
                        key={`portfolio-${project.id}`}
                        imgUrl={project.imgUrl}
                        imgContain={project.imgContain}
                        title={project.title}
                        description={t(`portfolio.projects.${project.id}.description`)}
                        stack={project.stack}
                        link={project.link}
                        source={project.source}
                        caseStudy={project.caseStudy}
                        animDelay={(index % 2) * 80}
                    />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
