import { useState } from 'react';
import { CONTACT_FORM_ENDPOINT } from '../data/endpoints';

export function useContactForm() {
    const [loading, setLoading] = useState(false);
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
            body: new FormData(form),
        }).finally(() => {
            setLoading(false);
            form.reset();
            setFields({ name: '', email: '', message: '' });
        });
    };

    return { loading, isValid, isEmailValid, fields, handleChange, handleSubmit };
}

