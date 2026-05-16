import React from 'react';
import Title from "./Title";
import { useContactForm } from "../hooks/useContactForm";
import { useInView } from "../hooks/useInView";

const Contact: React.FC = () => {
    const { loading, isValid, isEmailValid, fields, handleChange, handleSubmit } = useContactForm();
    const [ref, inView] = useInView<HTMLFormElement>();

    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form
                    ref={ref}
                    onSubmit={handleSubmit}
                    className={`flex flex-col w-full md:w-7/12 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                >
                    <Title>Contact Me</Title>
                    <label htmlFor="contact-name" className="text-sm font-medium mb-1">Name</label>
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        onChange={handleChange}
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <label htmlFor="contact-email" className="text-sm font-medium mt-3 mb-1">Email</label>
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        onChange={handleChange}
                        className={`p-2 bg-transparent border-2 rounded-md focus:outline-none ${fields.email && !isEmailValid ? 'border-red-500 dark:border-red-400' : ''}`}
                    />
                    {fields.email && !isEmailValid && (
                        <p className="text-xs text-red-500 dark:text-red-400 mt-1">Enter a valid email address.</p>
                    )}
                    <label htmlFor="contact-message" className="text-sm font-medium mt-3 mb-1">Message</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        placeholder="What's on your mind?"
                        rows={10}
                        onChange={handleChange}
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    />
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
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
