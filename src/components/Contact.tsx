import React from 'react';
import Title from "./Title";
import { useContactForm } from "../hooks/useContactForm";
import { useInView } from "../hooks/useInView";
import { useLang } from '../context/LangContext';

const inputClass = "p-2.5 bg-main border border-subtle rounded-md text-fg placeholder:text-muted text-sm focus:outline-none focus:border-accent transition-colors";

const Contact: React.FC = () => {
    const { loading, isValid, isEmailValid, submitted, error, fields, handleChange, handleSubmit } = useContactForm();
    const [ref, inView] = useInView<HTMLFormElement>();
    const { t } = useLang();

    return (
        <section id="contact" className="mb-10 mx-auto">
            <div className="flex justify-center items-center">
                {submitted ? (
                    <div className="flex flex-col items-center gap-4 py-16 w-full md:w-7/12 text-center animate-fade-up">
                        <div className="w-14 h-14 rounded-full border border-green-500/50 flex items-center justify-center bg-green-500/10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-base font-medium text-fg">{t('contact.success')}</p>
                    </div>
                ) : (
                <form
                    ref={ref}
                    onSubmit={handleSubmit}
                    className={`flex flex-col w-full md:w-7/12 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                >
                    <Title>{t('contact.title')}</Title>

                    <label htmlFor="contact-name" className="text-xs font-medium text-muted mb-1.5 uppercase tracking-wider">{t('contact.name.label')}</label>
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder={t('contact.name.placeholder')}
                        onChange={handleChange}
                        className={inputClass}
                    />

                    <label htmlFor="contact-email" className="text-xs font-medium text-muted mb-1.5 mt-4 uppercase tracking-wider">{t('contact.email.label')}</label>
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder={t('contact.email.placeholder')}
                        onChange={handleChange}
                        className={`${inputClass} ${fields.email && !isEmailValid ? '!border-red-500/70' : ''}`}
                    />
                    {fields.email && !isEmailValid && (
                        <p className="text-xs text-red-500 mt-1">{t('contact.email.error')}</p>
                    )}

                    <label htmlFor="contact-message" className="text-xs font-medium text-muted mb-1.5 mt-4 uppercase tracking-wider">{t('contact.message.label')}</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        placeholder={t('contact.message.placeholder')}
                        rows={8}
                        onChange={handleChange}
                        className={`${inputClass} mb-4 resize-none`}
                    />

                    {error && (
                        <p className="text-sm text-red-500 mb-3">{t('contact.error')}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading || !isValid}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 w-max text-sm font-semibold rounded-md text-white bg-accent hover:opacity-90 disabled:opacity-40 transition-opacity"
                    >
                        {loading && (
                            <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                            </svg>
                        )}
                        {loading ? t('contact.sending') : t('contact.send')}
                    </button>

                    <div className="flex items-center gap-3 my-5">
                        <div className="flex-1 h-px bg-subtle" />
                        <span className="text-xs font-medium text-muted uppercase tracking-widest">or</span>
                        <div className="flex-1 h-px bg-subtle" />
                    </div>

                    <a
                        href="mailto:info@lucadelcorona.com"
                        className="self-start inline-flex items-center gap-2 px-4 py-2 border border-subtle rounded-md text-sm font-medium text-fg hover:border-accent hover:text-accent transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        info@lucadelcorona.com
                    </a>
                </form>
                )}
            </div>
        </section>
    );
};

export default Contact;

