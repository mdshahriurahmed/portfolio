import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import { faHouse, faUser, faBriefcase, faFile, faBlog, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fb from '../../Assets/fb.png'
import linkedin from '../../Assets/li.png'
import github from '../../Assets/g.png'
import './Navbar.css'

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/'><span className='text-secondary'><FontAwesomeIcon icon={faHouse} /></span> Home</Link ></li>
        <li><Link to='/about'><span className='text-secondary'><FontAwesomeIcon icon={faUser} /></span> About</Link ></li>
        <li><Link to='/myprojects'><span className='text-secondary'><FontAwesomeIcon icon={faBriefcase} /></span> Projects</Link ></li>

        <li><Link to='/resume'><span className='text-secondary'><FontAwesomeIcon icon={faFile} /></span> Resume</Link ></li>
        <li><Link to='/blogs'><span className='text-secondary'><FontAwesomeIcon icon={faBlog} /></span> Blogs</Link ></li>
        <li><Link to='/contact'><span className='text-secondary'><FontAwesomeIcon icon={faAddressBook} /></span> Contact Me</Link ></li>

    </>
    return (
        <div className="navbar bg-primary justify-between px-20 customshadownav">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <label tabIndex="0" className="btn btn-primary lg:hidden bg-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 text-base-100">
                        {menuItems}
                    </ul>
                </div>
                <img style={{ width: '200px' }} src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex text-white justify-end">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className='hidden lg:flex'>
                <a href='https://www.facebook.com/shahriarsvn/' target='_blank' rel='noreferrer'><span className='ml-12'><img className='mb-5' style={{ width: '30px' }} src={fb} alt="" /></span></a>
                <a href='https://www.linkedin.com/in/shahriur-ahmed/' target='_blank' rel='noreferrer'><span className='ml-12'><img className='mb-5' style={{ width: '30px' }} src={linkedin} alt="" /></span></a>
                <a href='https://github.com/shahriurahmed' target='_blank' rel='noreferrer'><span className='ml-12'><img className='mb-5' style={{ width: '30px' }} src={github} alt="" /></span></a>

            </div>

        </div>
    );
};

export default Navbar;