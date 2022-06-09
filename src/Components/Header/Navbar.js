import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import { faHouse, faUser, faBriefcase, faFile, faBlog, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fb from '../../Assets/fb.png'
import linkedin from '../../Assets/li.png'
import github from '../../Assets/g.png'

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/'><span className='text-secondary'><FontAwesomeIcon icon={faHouse} /></span> Home</Link ></li>
        <li><Link to='/'><span className='text-secondary'><FontAwesomeIcon icon={faUser} /></span> About</Link ></li>
        <li><Link to='/'><span className='text-secondary'><FontAwesomeIcon icon={faBriefcase} /></span> Projects</Link ></li>
        <li><Link to='/'><span className='text-secondary'><FontAwesomeIcon icon={faFile} /></span> Resume</Link ></li>
        <li><Link to='/'><span className='text-secondary'><FontAwesomeIcon icon={faBlog} /></span> Blogs</Link ></li>
        <li><Link to='/'><span className='text-secondary'><FontAwesomeIcon icon={faAddressBook} /></span> Contact Me</Link ></li>
    </>
    return (
        <div class="navbar bg-primary justify-between px-20">
            <div class="navbar-start ">
                <div class="dropdown ">
                    <label tabindex="0" class="btn btn-primary lg:hidden bg-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 text-base-100">
                        {menuItems}
                    </ul>
                </div>
                <img style={{ width: '200px' }} src={logo} alt="" />
            </div>
            <div class="navbar-center hidden lg:flex text-white justify-end">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div >
                <a href='https://www.facebook.com/shahriarsvn/' target='_blank' rel='noreferrer'><span className='ml-12'><img className='mb-5' style={{ width: '30px' }} src={fb} alt="" /></span></a>
                <a href='https://www.linkedin.com/in/shahriur-ahmed/' target='_blank' rel='noreferrer'><span className='ml-12'><img className='mb-5' style={{ width: '30px' }} src={linkedin} alt="" /></span></a>
                <a href='https://github.com/shahriurahmed' target='_blank' rel='noreferrer'><span className='ml-12'><img className='mb-5' style={{ width: '30px' }} src={github} alt="" /></span></a>

            </div>

        </div>
    );
};

export default Navbar;