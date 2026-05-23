import React from 'react';
import Title from "./Title";
import { useContactForm } from "../hooks/useContactForm";
import { useInView } from "../hooks/useInView";
import { useLang } from '../context/LangContext';

const Contact: React.FC = () => {
    const { loading, isValid, isEmailValid, submitted, error, fields, handleChange, handleSubmit } = useContactForm();
    const [ref, inView] = useInView<HTMLFormElement>();
    const { t } = useLang();

    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                {submitted ? (
                    <div className="flex flex-col items-center gap-4 py-16 w-full md:w-7/12 text-center animate-fade-up">
                        <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-lg font-medium">{t('contact.success')}</p>
                    </div>
                ) : (
                <form
                    ref={ref}
                    onSubmit={handleSubmit}
                    className={`flex flex-col w-full md:w-7/12 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                >
                    <Title>{t('contact.title')}</Title>

                    <label htmlFor="contact-name" className="text-sm font-medium mb-1">{t('contact.name.label')}</label>
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder={t('contact.name.placeholder')}
                        onChange={handleChange}
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none focus:border-stone-500 dark:focus:border-stone-400 transition-colors"
                    />

                    <label htmlFor="contact-email" className="text-sm font-medium mt-3 mb-1">{t('contact.email.label')}</label>
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder={t('contact.email.placeholder')}
                        onChange={handleChange}
                        className={`p-2 bg-transparent border-2 rounded-md focus:outline-none focus:border-stone-500 dark:focus:border-stone-400 transition-colors ${fields.email && !isEmailValid ? 'border-red-500 dark:border-red-400' : ''}`}
                    />
                    {fields.email && !isEmailValid && (
                        <p className="text-xs text-red-500 dark:text-red-400 mt-1">{t('contact.email.error')}</p>
                    )}

                    <label htmlFor="contact-message" className="text-sm font-medium mt-3 mb-1">{t('contact.message.label')}</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        placeholder={t('contact.message.placeholder')}
                        rows={10}
                        onChange={handleChange}
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none focus:border-stone-500 dark:focus:border-stone-400 transition-colors"
                    />

                    {error && (
                        <p className="text-sm text-red-500 dark:text-red-400 mb-3">{t('contact.error')}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading || !isValid}
                        className="text-center inline-flex items-center justify-center gap-2 px-8 py-3 w-max text-base font-medium rounded-md text-white bg-linear-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white disabled:opacity-60"
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
                        <div className="flex-1 h-px bg-stone-300 dark:bg-stone-700" />
                        <span className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest">or</span>
                        <div className="flex-1 h-px bg-stone-300 dark:bg-stone-700" />
                    </div>

                    <a
                        href="mailto:info@lucadelcorona.com"
                        className="self-start inline-flex items-center gap-2 px-4 py-2 border-2 border-stone-900 dark:border-white rounded-md text-sm font-semibold hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-stone-900 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        info@lucadelcorona.com
                    </a>
                </form>
                )}
            </div>
        </div>
    );
};

export default Contact;
