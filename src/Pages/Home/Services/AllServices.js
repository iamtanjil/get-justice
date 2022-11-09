import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const AllServices = () => {
    const services = useLoaderData();
    return (
        <div className='col-span-1 lg:grid grid-cols-3 lg:gap-4 m-7'>
            {
                services.map(service =>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
                        <figure><img src={service.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.name}</h2>
                            <h2 className='text-lg font-semibold'>Price: ${service.price}</h2>
                            <p>{service.details.slice(0, 200) + '...'}<Link className='link link-primary' to={`services/${service._id}`}>Read More</Link></p>
                            <div className="card-actions justify-end">
                                <Link to={`services/${service._id}`}>
                                    <button className="btn btn-outline btn-primary rounded-full"><FaArrowRight /></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AllServices;