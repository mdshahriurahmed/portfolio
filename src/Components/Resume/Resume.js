import React from 'react';
import Download from '../Download';

const Resume = () => {
    return (
        <div className='px-5 lg:px-40'>
            <h1 className='text-base-100 lg:text-5xl text-3xl font-semibold my-10 '>RESUME</h1>
            <div className='s mb-40 p-5'>
                <img className='mb-8' src="https://i.ibb.co/5M7YYKG/MD-SHAHRIUR-AHMED-1.jpg" alt="" />
                <Download></Download>
            </div>

        </div>
    );
};

export default Resume;