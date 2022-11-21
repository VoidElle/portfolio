import React from 'react';

import portfolio from "../data/portfolio";

import PortfolioItem from "./PortfolioItem.jsx";

const Portfolio = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                    {
                        portfolio.map(project => (
                            <PortfolioItem
                                key={project.id}
                                imgUrl={project.imgUrl}
                                title={project.title}
                                stack={project.stack}
                                link={project.link}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;