import React from 'react';

const Intro: React.FC = () => {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Luca Del Corona</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Mobile Engineer - Android, Flutter & React Native</p>
            <p className="text-1xl max-w-xl mb-6">
                Developer with solid experience building cross-platform and native mobile applications. Passionate about what happens behind the screen: APIs, IoT integrations, and real-world systems. I take a hands-on approach with a strong focus on quality and continuous growth.
            </p>
        </div>
    );
};

export default Intro;