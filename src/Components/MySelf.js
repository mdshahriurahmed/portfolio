import React from 'react';
import img from '../Assets/My image.jpg'
import Typewriter from 'typewriter-effect';
import Download from './Download';

const MySelf = () => {
    return (
        <div className='lg:px-40 px-5'>
            <h1 className='lg:text-5xl text-3xl  text-base-100 uppercase font-semibold my-16 '>About </h1>
            <div className='flex flex-col-reverse lg:flex-row  s p-8 gap-3  mb-40 items-center'>

                <div className='lg:w-1/2'>
                    <div className='lg:flex lg:flex-col '>
                        <h1 className='lg:text-left lg:text-4xl text-2xl text-base-100 mb-2'>Hi There!</h1>
                        <h1 className="lg:text-5xl text-3xl font-bold lg:text-left text-base-100">I'm  <span className='text-secondary'>Md Shahriur Ahmed</span> </h1>

                        <div className="lg:text-4xl text-2xl font-semibold lg:text-left mt-5 mb-4 text-base-100">
                            <Typewriter
                                options={{
                                    strings: ['Front-End Developer', 'Full Stack Developer', 'MERN Stack Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />

                        </div>
                        <p className='text-base-100 mb-12 text-justify'>I am working on MERN stack web development. I want to be a full-stack web developer in my career. Skilled in HTML5, CSS3, JavaScript, ES6, React, ReactJS, NodeJS,Express JS. MongoDB, DaisyUI, Firebase Authentication, Stripe. Strong education professional with a Bachelor of Engineering - BE focused in Computer Engineering from Bangladesh University of Business and Technology.</p>

                        <Download></Download>
                    </div>

                </div>
                <div className='flex justify-center lg:justify-end lg:w-1/2 mb-5 lg:mb-0 items-center '>
                    <div className=' s'><img style={{ width: '400px' }} src={img} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default MySelf;