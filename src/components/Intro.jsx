import React from 'react';

const Intro = () => {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Luca Del Corona</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Full Stack developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                Passionate and curious developer, specialized in the design and implementation of mobile applications and software with various utilities.
                Excellent knowledge of the English language, spoken and written.
                Familiar with Agile development models.
                Excellent knowledge of operating systems and suites, programming languages such as Java, Dart, Javascript, Typescript, C, C++, SQL, PHP,
                frameworks and libraries such as Flutter, Symfony, React, Node.js, Express.js, Socket.io and relational and non-relational databases,
                such as MySQL, PostgresQL, MariaDB and MongoDB.
            </p>
        </div>
    );
};

export default Intro;