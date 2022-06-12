import React from 'react';
import resume from '../../Assets/MD SHAHRIUR AHMED-1.jpg'
import Download from '../Download';

const Resume = () => {
    return (
        <div className='px-5 lg:px-40'>
            <h1 className='text-base-100 lg:text-5xl text-3xl font-semibold my-10 '>RESUME</h1>
            <div className='s mb-40 p-5'>
                <img className='mb-8' src={resume} alt="" />
                <Download></Download>
            </div>

        </div>
    );
};

export default Resume;