import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useTitle from '../../../hooks/useTitle';

const Services = () => {
    useTitle('Services')
    const [limitedservice, seLimitedservice] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-wine.vercel.app/limitedservice')
            .then(res => res.json())
            .then(data => seLimitedservice(data))
    }, [])
    return (
        <div className='mx-auto'>
            <h2 className='text-5xl text-center font-bold'>Service We Provide</h2>
            <div className='col-span-1 lg:grid grid-cols-3 lg:gap-4 m-7'>
                {
                    limitedservice.map(service =>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
                            <figure>
                                <PhotoProvider>
                                    <PhotoView src={service.img}>
                                        <img src={service.img} alt="Shoes" />
                                    </PhotoView>
                                </PhotoProvider>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.name}</h2>
                                <h2 className='text-lg font-semibold'>Price: ${service.price}</h2>
                                <p>{service.details.slice(0, 200) + '...'}<Link className='link link-primary' to={`/services/services/${service._id}`}>Read More</Link></p>
                                <div className="card-actions justify-end">
                                    <Link to={`/services/services/${service._id}`}>
                                        <button className="btn btn-outline btn-primary rounded-full"><FaArrowRight /></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <Link to='/services' className='flex justify-center'>
                <button className='btn btn-outline btn-primary mb-5'>See More Services</button>
            </Link>
        </div>
    );
};

export default Services;