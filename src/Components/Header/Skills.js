import React from 'react';
import html from '../../Assets/html.png'
import css from '../../Assets/css.png'
import js from '../../Assets/js.png'
import react from '../../Assets/react.png'
import node from '../../Assets/node.png'
import mongo from '../../Assets/mongodb.png'
import netli from '../../Assets/netlify.png'
import firebase from '../../Assets/firebase.png'
import './Skills.css'

const Skills = () => {
    return (
        <div className='px-20'>
            <h1 className='text-base-100 text-5xl uppercase font-semibold pb-8 mt-20 mb-10'>Professional <span className='text-secondary'>Skillset</span></h1>
            <div className='px-20 pb-40 grid grid-cols-2 lg:grid-cols-5  md:grid-cols-3 gap-8 justify-center items-center justify-items-center '>
                <div className='cards ' >
                    <img style={{ width: '70px' }} src={html} alt="" />
                </div>
                <div className='cards ' >
                    <img style={{ width: '70px' }} src={css} alt="" />
                </div>
                <div className='cards ' >
                    <img style={{ width: '70px' }} src={js} alt="" />
                </div>
                <div className='cards ' >
                    <img style={{ width: '100px' }} src={node} alt="" />
                </div>
                <div className='cards ' >
                    <img style={{ width: '70px' }} src={react} alt="" />
                </div>
                <div className='cards ' >
                    <img style={{ width: '40px' }} src={mongo} alt="" />
                </div>
                <div className='cards ' >
                    <img style={{ width: '70px' }} src={netli} alt="" />
                </div>
                <div className='cards ' >
                    <img style={{ width: '70px' }} src={firebase} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Skills;