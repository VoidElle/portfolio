import React from 'react';
import Title from "./Title";
import { useContactForm } from "../hooks/useContactForm";

const Contact: React.FC = () => {
    const { loading, handleSubmit } = useContactForm();

    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact Me</Title>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={10}
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <button
                        type="submit"
                        disabled={loading}
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