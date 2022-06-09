import React from 'react';
import first from '../Assets/Screenshot_4.png'
import second from '../Assets/Screenshot_5.png'
import third from '../Assets/Screenshot_6.png'
import './MyProjects.css'

const MyProjects = () => {
    return (
        <div className='px-40'>
            <h1 className='text-base-100 text-5xl uppercase font-semibold pb-8  mb-10'>MY <span className='text-secondary'>Projects</span></h1>

            <div className='pb-40 grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-5 justify-center items-center justify-items-center '>
                <div class="card w-72 bg-base-100 customShadow ">
                    <figure><img src={first} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-2xl font-bold text-center text-secondary">Dream Pictures</h2>
                        <p className='text-justify mb-3'>

                            This is a wedding photography service providing website. Currently here
                            some services are added and authentication system implemented. User can login/signup using google authentication also email, password
                            based authentication system is implemented


                        </p>
                        <div class="card-actions justify-center">
                            <div className='grid grid-cols-1 gap-3  justify-center justify-items-center'>
                                <a href="https://dream-pictures.web.app/" target='_blank' rel='noreferrer' class="btn text-secondary  btn-primary w-36">View Project</a>
                                <div className='grid grid-cols-1 gap-3 justify-between'>
                                    <a href="https://github.com/shahriurahmed/dream-pictures" class="btn  btn-primary text-secondary w-36">Client </a>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="card w-72 bg-base-100 customShadow ">
                    <figure><img src={second} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-2xl font-bold text-center text-secondary">Electro Point</h2>
                        <p className='text-justify mb-3'>

                            This is an Inventory Management website. This inventory management
                            system is related to laptop items. Here different suppliers can manage their
                            products. where users can Login/registration by google authentication/
                            Email, Password.


                        </p>
                        <div class="card-actions justify-center">
                            <div className='grid grid-cols-1 gap-3  justify-center justify-items-center'>
                                <a href="https://electro-point.web.app/" target='_blank' rel='noreferrer' class="btn text-secondary  btn-primary w-36">View Project</a>
                                <div className='grid grid-cols-2 gap-3 justify-between'>
                                    <a href="https://github.com/shahriurahmed/electro-point-client" class="btn  btn-primary text-secondary w-28">Client </a>
                                    <a href="https://github.com/shahriurahmed/electro-point-server" class="btn btn-primary w-28 text-secondary ">Server </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="card w-72 bg-base-100 customShadow ">
                    <figure><img src={third} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-2xl font-bold text-center text-secondary">BD Tools</h2>
                        <p className='text-justify mb-3'>

                            This is a Manufacturer website where users can Login/registration by google
                            authentication & User name, Email, Password, User & Admin Role separated
                            Dashboard. Add products, manage all orders & Manage all Products & delete
                            products, upgraded  by Admin


                        </p>
                        <div class="card-actions justify-center">
                            <div className='grid grid-cols-1 gap-3  justify-center justify-items-center'>
                                <a href="https://bd-tools-20f34.firebaseapp.com/" target='_blank' rel='noreferrer' class="btn text-secondary  btn-primary w-36">View Project</a>
                                <div className='grid grid-cols-2 gap-3 justify-between'>
                                    <a href="https://github.com/shahriurahmed/BD-Tools-client-side" class="btn  btn-primary text-secondary w-28">Client </a>
                                    <a href="https://github.com/shahriurahmed/BD-Tools_server-side" class="btn btn-primary w-28 text-secondary ">Server </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default MyProjects;