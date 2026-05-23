import React from 'react';

import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";
import { useLang } from '../context/LangContext';

const Timeline: React.FC = () => {
    const { t } = useLang();

    return (
        <section id="timeline" className="mb-20">
            <div className="max-w-2xl mx-auto">
                <Title>{t('timeline.title')}</Title>
                <div className="pl-4">
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
                            animDelay={index * 80}
                        />
                    ))}
                    </div>
            </div>
        </section>
    );
};

export default Timeline;

