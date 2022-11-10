import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShowAddedService = ({ service }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
            <figure><img src={service.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service.ServiceName}</h2>
                <h2 className='text-lg font-semibold'>Price: ${service.price}</h2>
                <p>{service.detaiils.slice(0, 200) + '...'}<Link className='link link-primary' to={`services/${service._id}`}>Read More</Link></p>
                <div className="card-actions justify-end">
                    <Link to={`services/${service._id}`}>
                        <button className="btn btn-outline btn-primary rounded-full"><FaArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowAddedService;