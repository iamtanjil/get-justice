import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceInfo = () => {
    const serviceInfo = useLoaderData();
    console.log(serviceInfo);
    return (
        <div className='mx-auto p-7'>
            <div className="card w-full glass">
            <figure><img className='h-96 w-full' src={serviceInfo.img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceInfo.name}</h2>
                <p>{serviceInfo.details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book An Appoinment!</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ServiceInfo;