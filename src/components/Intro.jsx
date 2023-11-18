import React from 'react';

const Intro = () => {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Luca Del Corona</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Full Stack developer</p>
            <p className="text-1xl max-w-xl mb-6">
                Passionate and curious developer, specialized in the design and implementation of mobile applications and software with various utilities.
            </p>
        </div>
    );
};

export default Intro;