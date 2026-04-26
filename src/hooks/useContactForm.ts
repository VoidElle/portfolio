import { useState } from 'react';
import { CONTACT_FORM_ENDPOINT } from '../data/endpoints';

export function useContactForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const form = e.currentTarget;
        fetch(CONTACT_FORM_ENDPOINT, {
            method: 'POST',
            body: new FormData(form),
        }).finally(() => {
            setLoading(false);
            form.reset();
        });
    };

    return { loading, handleSubmit };
}

