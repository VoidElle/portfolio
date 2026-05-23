import { useState } from 'react';
import { CONTACT_FORM_ENDPOINT } from '../data/endpoints';

export function useContactForm() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [fields, setFields] = useState({ name: '', email: '', message: '' });

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email);
    const isValid = fields.name.trim() !== '' && isEmailValid && fields.message.trim() !== '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isValid) return;
        setLoading(true);
        const form = e.currentTarget;
        fetch(CONTACT_FORM_ENDPOINT, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: new FormData(form),
        }).then(res => {
            if (res.ok) {
                setSubmitted(true);
                setError(false);
            } else {
                setError(true);
            }
        }).catch(() => {
            setError(true);
        }).finally(() => {
            setLoading(false);
            form.reset();
            setFields({ name: '', email: '', message: '' });
        });
    };

    return { loading, isValid, isEmailValid, submitted, error, fields, handleChange, handleSubmit };
}

