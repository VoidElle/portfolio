import React from 'react';

import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";
import { useLang } from '../context/LangContext';

const Timeline: React.FC = () => {
    const { t } = useLang();

    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12 pl-6 md:pl-0">
                <Title>{t('timeline.title')}</Title>
                {timeline.map((item, index) => (
                    <TimelineItem
                        id={item.id}
                        key={`timeline-${item.id}`}
                        year={item.year}
                        type={item.type as 'work' | 'education'}
                        title={item.title}
                        duration={item.duration === 'Actual' ? t('timeline.current') : item.duration}
                        details={t(`timeline.entries.${item.id}.details`)}
                        chips={item.chips}
                        animDelay={index * 100}
                    />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
