import React from 'react';
import './Footer.css'
import icon from '../Assets/logo i.png'
import fb from '../Assets/fb.png'
import linkedin from '../Assets/li.png'
import github from '../Assets/g.png'

const Footer = () => {
    return (
        <div>
            <footer class="footer items-center p-4 bg-primary text-neutral-content customshadow">
                <div class="items-center grid-flow-col">
                    <img style={{ width: '60px' }} src={icon} alt="" />
                    <p>Copyright © 2022 - Md Shahriur Ahmed</p>
                </div>
                <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">

                    <a href='https://www.facebook.com/shahriarsvn/' rel='noreferrer' target='_blank'><span className='ml-12'><img className='mb-5' style={{ width: '30px' }} src={fb} alt="" /></span></a>
                    <a href='https://www.linkedin.com/in/shahriur-ahmed/' rel='noreferrer' target='_blank'><span className='ml-12'><img className='mb-5' style={{ width: '30px' }} src={linkedin} alt="" /></span></a>
                    <a href='https://github.com/shahriurahmed' target='_blank' rel='noreferrer'><span className='ml-12'><img className='mb-5' style={{ width: '30px' }} src={github} alt="" /></span></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;