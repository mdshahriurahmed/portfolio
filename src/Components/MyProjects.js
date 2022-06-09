import React from 'react';
import first from '../Assets/Screenshot_4.png'
import second from '../Assets/Screenshot_5.png'
import third from '../Assets/Screenshot_6.png'
import './MyProjects.css'

const MyProjects = () => {
    return (
        <div className='px-40 pb-28'>
            <h1 className='text-base-100 text-5xl uppercase font-semibold pb-8  mb-10'>MY <span className='text-secondary'>Projects</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                <div className='mt-10 customShadow p-5'>
                    <h1 className='text-center text-secondary text-3xl font-bold mb-5'>Dream Pictures</h1>
                    <img className=' mb-5 ' src={first} alt="" />
                    <p className='text-justify text-base-100 mt-5 mb-3'>

                        This is a wedding photography service providing website. Currently here
                        some services are added and authentication system implemented. User can login/signup using google authentication also email, password
                        based authentication system is implemented


                    </p>
                    <div className='grid grid-cols-1 gap-3  justify-center'><a className='px-8 bg-secondary customShadow  font-bold text-white  rounded-md py-2' href="https://dream-pictures.web.app/" target='_blank' rel='noreferrer'>Live Site</a>
                        <a className='px-8 bg-secondary customShadow  font-bold text-white  rounded-md py-2' href="https://github.com/shahriurahmed/dream-pictures" target='_blank' rel='noreferrer'>Client Site</a>

                        <a className='px-8 bg-secondary customShadow  font-bold text-white  rounded-md py-2' href="/" target='_blank' rel='noreferrer'>N/A</a></div>

                </div>


                <div className='mt-10 customShadow p-5'>
                    <h1 className='text-center text-3xl font-bold mb-5 text-secondary'>Electro Point</h1>
                    <img className='mb-5 ' src={second} alt="" />
                    <p className='text-justify text-base-100 mt-5 mb-3'>

                        This is an Inventory Management website. This inventory management
                        system is related to laptop items. Here different suppliers can manage their
                        products. where users can Login/registration by google authentication/
                        Email, Password also can add/delete item.

                    </p>
                    <div className='grid grid-cols-1 gap-3  justify-center'>

                        <a className='px-8 bg-secondary customShadow  font-bold text-white  rounded-md py-2' href="https://electro-point.web.app/" target='_blank' rel='noreferrer'>Live Site</a>

                        <a className='px-8 bg-secondary customShadow  font-bold text-white  rounded-md py-2' href="https://github.com/shahriurahmed/electro-point-client" target='_blank' rel='noreferrer'>Client Site</a>

                        <a className='px-8 bg-secondary customShadow  font-bold text-white  rounded-md py-2' href="https://github.com/shahriurahmed/electro-point-server" target='_blank' rel='noreferrer'>Server Site</a></div>

                </div>

                <div className='mt-10 customShadow p-5'>
                    <h1 className='text-center text-3xl font-bold mb-5 text-secondary'>BD Tools</h1>
                    <img className='mb-5 ' src={third} alt="" />
                    <p className='text-justify text-base-100 mt-5 mb-3'>

                        This is a Manufacturer website where users can Login/registration by google authentication & User name, Email, Password, User & Admin Role separated Dashboard. Add products, manage all orders & Manage all Products & delete products, upgraded by Admin.

                    </p>
                    <div className='grid grid-cols-1 gap-3  justify-center'>

                        <a className='px-8 bg-secondary customShadow  font-bold text-white  rounded-md py-2' href="https://bd-tools-20f34.firebaseapp.com/" target='_blank' rel='noreferrer'>Live Site</a>

                        <a className='px-8 bg-secondary customShadow  font-bold text-white  rounded-md py-2' href="https://github.com/shahriurahmed/BD-Tools-client-side" target='_blank' rel='noreferrer'>Client Site</a>

                        <a className='px-8 bg-secondary customShadow  font-bold text-white  rounded-md py-2' href="https://github.com/shahriurahmed/BD-Tools_server-side" target='_blank' rel='noreferrer'>Server Site</a></div>
                </div>

            </div>


        </div>
    );
};

export default MyProjects;