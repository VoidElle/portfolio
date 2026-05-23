import React from 'react';

interface Props {
    children: React.ReactNode;
    id?: string;
}

const Title: React.FC<Props> = ({ children, id }) => {
    return (
        <h2
            id={id}
            className="text-2xl font-bold text-fg mb-6"
        >
            {children}
            <span className="block mt-2 h-px w-10 bg-accent" />
        </h2>
    );
};

export default Title;