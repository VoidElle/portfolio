import React, { useState } from 'react';

interface Props {
    id: string;
    title: string;
    subtitle: string;
    dotColor?: string;
    defaultOpen?: boolean;
    children: React.ReactNode;
}

const AccordionItem: React.FC<Props> = ({ id, title, subtitle, dotColor, defaultOpen = false, children }) => {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="rounded-xl border border-subtle bg-surface overflow-hidden hover:border-strong transition-colors">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-controls={`${id}-body`}
                className="w-full flex items-center gap-3 p-5 text-left cursor-pointer transition-transform active:scale-[0.97]"
            >
                <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: dotColor ?? 'var(--c-accent)' }}
                    aria-hidden="true"
                />
                <span className="flex-1">
                    <span className="block font-semibold text-fg text-[0.95rem]">{title}</span>
                    <span className="block text-sm text-muted mt-0.5">{subtitle}</span>
                </span>
                <i
                    className={`fas fa-chevron-down text-muted transition-transform duration-200 ease-out ${open ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                />
            </button>

            <div
                id={`${id}-body`}
                className={open ? 'block p-5 pt-0 text-sm text-muted leading-relaxed' : 'hidden'}
            >
                {children}
            </div>
        </div>
    );
};

export default AccordionItem;
