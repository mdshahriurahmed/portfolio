import React from 'react';


import './Main.css'
import img from '../Assets/im1.png'
import Download from './Download';

const Main = () => {
    return (
        <div className='main1'>

            <div className='content '>
                <div class="hero  bg-none">
                    <div class=" hero-content flex-col lg:gap-96 lg:flex-row-reverse ">
                        <img style={{ width: '500px' }} src={img} />
                        <div className='lg:flex lg:flex-col '>
                            <h1 className='lg:text-left text-4xl text-base-100 mb-2'>Hi There!</h1>
                            <h1 class="text-5xl font-bold lg:text-left text-base-100">I'm  <span className='text-secondary'>Md Shahriur Ahmed</span> </h1>
                            <h2 class="text-4xl font-bold lg:text-left mt-5 mb-8 text-base-100" >Front-End Developer</h2>
                            <Download></Download>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main;