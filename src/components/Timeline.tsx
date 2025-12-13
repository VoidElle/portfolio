import React from 'react';

import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

const Timeline: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Title>Timeline</Title>
                {timeline.map((item) => (
                    <TimelineItem
                        id={item.id}
                        key={`timeline-${item.id}`}
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                        chips={item.chips}
                    />
                ))}
            </div>
        </div>
    );
};

export default Timeline;