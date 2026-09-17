import React from 'react';

interface Props {
    title: string;
    body?: string;
    bullets?: string[];
    callout?: string;
}

function renderRich(text: string): React.ReactNode {
    return text.split('**').map((segment, index) =>
        index % 2 === 1 ? (
            <strong key={index} className="text-fg">
                {segment}
            </strong>
        ) : (
            <React.Fragment key={index}>{segment}</React.Fragment>
        )
    );
}

const CaseStudySection: React.FC<Props> = ({ title, body, bullets, callout }) => {
    return (
        <section className="mb-14">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-4">
                {title}
            </h2>
            <div className="text-base text-muted leading-relaxed space-y-4 break-words">
                {body && <p>{renderRich(body)}</p>}
                {bullets && bullets.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2">
                        {bullets.map((item, index) => (
                            <li key={index}>{renderRich(item)}</li>
                        ))}
                    </ul>
                )}
                {callout && (
                    <div className="rounded-xl border border-subtle bg-accent-soft p-4 text-sm text-fg break-words">
                        {renderRich(callout)}
                    </div>
                )}
            </div>
        </section>
    );
};

export default CaseStudySection;
