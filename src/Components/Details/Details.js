import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../hooks/useProjects';
import Loading from '../Loading/Loading';
import './Details.css'

const Details = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 700)
    }, [])
    const [projects] = useProjects();
    const { id } = useParams();
    const id1 = parseInt(id);
    // var item = projects.find(item => item.id === id1);

    // print

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='pb-40 '>

            <h1 className='lg:text-5xl text-3xl  text-base-100 uppercase font-semibold my-10 mb-16'>Project <span className='text-secondary'>Details</span></h1>
            {
                projects.map(project => {
                    return (
                        <div className='px-5 lg:px-40 md:px-24  '>
                            {
                                project.id === id1 ?
                                    <div>
                                        <div className='flex flex-col-reverse lg:flex-row  s p-8 gap-3'>

                                            <div className='lg:w-1/2'>
                                                <h1 className='text-xl text-base-100 lg:text-left text-secondary text-4xl font-semibold'>{project.name}</h1>
                                                <p className='text-base-100 text-justify mt-5'>{project.des}</p>
                                                <p className='text-base-100 text-justify mt-5'><span className='text-secondary'>Technology Used: </span>{project.tech}</p>
                                                <div className='flex gap-2 align-items mt-5'>
                                                    <a className=' bg-primary customShadow  text-secondary btnstyle  rounded-md ' href={project.live} target='_blank' rel='noreferrer'>Live Site</a>
                                                    <a className='bg-primary customShadow  text-secondary btnstyle  rounded-md ' href={project.client} target='_blank' rel='noreferrer'>Client Site</a>

                                                    {project.server ?
                                                        <a className=' bg-primary customShadow  text-secondary btnstyle  rounded-md ' href="/" target='_blank' rel='noreferrer'>Server Site </a>
                                                        :
                                                        <></>
                                                    }
                                                </div>

                                            </div>
                                            <div className='flex justify-center lg:justify-end lg:w-1/2 mb-5 lg:mb-0 items-center'>
                                                <img style={{ width: '600px' }} src={project.img} alt="" />
                                            </div>
                                        </div>
                                        <h3 className='text-4xl text-base-100 font-semibold mt-12 mb-8'>Site Snapshot</h3>
                                        <div className='s p-5'>
                                            <img src={project.snap1} alt="" />

                                        </div>
                                        <div className='s p-5 mt-5'>
                                            <img src={project.snap2} alt="" />

                                        </div>
                                    </div>
                                    :
                                    <></>
                            }
                        </div>
                    )


                })
            }

        </div>
    );
};

export default Details;