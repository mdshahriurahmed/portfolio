import React from 'react';
import Download from './Download';
import img from '../Assets/My image.jpg'

const About = () => {
    return (
        <div className='mt-16'>
            <div className='content'>
                <div class="hero  bg-none">
                    <div class=" hero-content flex-col lg:gap-48 lg:flex-row-reverse ">
                        <img style={{ width: '300px' }} src={img} />
                        <div className='lg:flex lg:flex-col '>

                            <h1 class="text-5xl font-bold lg:text-left text-base-100 font-semibold mb-5">LET ME   <span className='text-secondary '>INTRODUCE </span> MYSELF</h1>
                            <hr />
                            <p className='text-base-100 lg:text-left text-xl mt-3 mt-12 mb-12'>I fell in love with programming and I have at least learnt something, I think… <br /><br />
                                I am fluent in classics like <span className='text-secondary '>Javascript</span>
                                <br /><br />
                                My field of Interest's are building new <span className='text-secondary '>Web Technologies and Products </span> and also in areas related to <span className='text-secondary '>Software Development </span> <br /><br /> Whenever possible, I also apply my passion for developing products with <span className='text-secondary '>Node.js </span> and <span className='text-secondary '>Modern Javascript Library and Frameworks</span> like <span className='text-secondary '>React.js</span></p>
                            <Download></Download>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;