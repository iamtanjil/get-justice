import React, { useEffect, useState } from 'react';
import ShowAddedService from './ShowAddedService';

const LoadAddedService = () => {
    const [addedService, setAddedService] =useState([])
    useEffect(() => {
        fetch('https://assignment-11-server-wine.vercel.app/addedservice')
        .then(res => res.json())
        .then(data => setAddedService(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl font-bold text-center mb-3'>Added Service</h2>
            <div className='col-span-1 lg:grid grid-cols-3 lg:gap-4 m-7'>
            {
                addedService.map(service => <ShowAddedService
                key={service._id}
                service={service}
                ></ShowAddedService>)
            }
            </div>
            
        </div>
    );
};

export default LoadAddedService;