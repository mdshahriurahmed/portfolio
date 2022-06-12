import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProjects from './hooks/useProjects';
import Loading from './Loading/Loading';
import './MyProjects.css'

const MyProjects = () => {
    const [projects, loading] = useProjects();
    const navigate = useNavigate();




    return (
        <div className='lg:px-40 px-5 pb-28'>
            <h1 className='text-base-100 lg:text-5xl text-3xl uppercase font-semibold   mb-3'>MY <span className='text-secondary'>Projects</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>

                {
                    projects.map(project => {
                        const id = project.id;
                        return (
                            <div className='mt-10 customShadow p-5'>
                                <h1 className='text-center text-secondary text-3xl font-bold mb-5'>{project.name}</h1>
                                <img className=' mb-5 ' src={project.img} alt="" />
                                <p className='text-justify text-base-100 mt-5 mb-3 maxLengthSetup'>

                                    {project.des}


                                </p>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <button onClick={() => navigate(`/details/${id}`)} className='bg-primary customShadow  text-red-500 btnstyle  rounded-md '>Details</button>
                                    </div>
                                    <div className='flex gap-2  justify-end justify-items-end'>
                                        <a className=' bg-primary customShadow  text-secondary btnstyle  rounded-md ' href={project.live} target='_blank' rel='noreferrer'>Live Site</a>
                                        <a className='bg-primary customShadow  text-secondary btnstyle  rounded-md ' href={project.client} target='_blank' rel='noreferrer'>Client Site</a>

                                        {project.server ?
                                            <a className=' bg-primary customShadow  text-secondary btnstyle  rounded-md ' href="/" target='_blank' rel='noreferrer'>Server Site </a>
                                            :
                                            <></>
                                        }
                                    </div>
                                </div>



                            </div>
                        )

                    })
                }

            </div>


        </div>
    );
};

export default MyProjects;