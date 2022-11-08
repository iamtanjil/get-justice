import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='mx-auto'>
            <h2 className='text-5xl text-center font-bold'>Service We Provide</h2>
            <div className='col-span-1 lg:grid grid-cols-3 lg:gap-4 m-7'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Get Service</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Get Service</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Get Service</button>
                        </div>
                    </div>
                </div>
            </div>
            <Link className='flex justify-center'>
                <button className='btn btn-outline btn-primary mb-5'>See More Services</button>
            </Link>
        </div>
    );
};

export default Services;