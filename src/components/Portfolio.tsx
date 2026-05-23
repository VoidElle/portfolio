import React from 'react';

import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";
import { useLang } from '../context/LangContext';

const Portfolio: React.FC = () => {
    const { t } = useLang();

    return (
        <section id="portfolio" className="mb-20">
            <Title>{t('portfolio.title')}</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {portfolio.map((project, index) => (
                    <PortfolioItem
                        key={`portfolio-${project.id}`}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        description={t(`portfolio.projects.${project.id}.description`)}
                        stack={project.stack}
                        link={project.link}
                        animDelay={(index % 3) * 80}
                    />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;

