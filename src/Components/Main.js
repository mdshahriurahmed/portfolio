import React from 'react';
import Typewriter from 'typewriter-effect';
import './Main.css'
import img from '../Assets/im1.png'
import Download from './Download';

const Main = () => {
    return (
        <div className='main1'>

            <div className='content '>
                <div className="hero  bg-none">
                    <div className=" hero-content flex-col lg:gap-96 lg:flex-row-reverse ">
                        <div className='floating'>
                            <img style={{ width: '500px' }} src={img} alt='img' />
                        </div>
                        <div className='lg:flex lg:flex-col '>
                            <h1 className='lg:text-left lg:text-4xl text-2xl text-base-100 mb-2'>Hi There!</h1>
                            <h1 className="lg:text-5xl text-3xl font-bold lg:text-left text-base-100">I'm  <span className='text-secondary'>Md Shahriur Ahmed</span> </h1>

                            <div className="lg:text-4xl text-2xl font-semibold lg:text-left mt-5 mb-12 text-base-100">
                                <Typewriter
                                    options={{
                                        strings: ['Front-End Developer', 'Full Stack Developer', 'MERN Stack Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />

                            </div>

                            <Download></Download>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main;