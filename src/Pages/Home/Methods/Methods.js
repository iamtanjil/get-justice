import React from 'react';

const Methods = () => {
    return (
        <div className='mx-auto m-10'>
            <h2 className='text-5xl text-center font-bold'>How Its Work</h2>
            <h2 className='text-2xl text-center font-bold'>Get your legal solution in 3 easy steps</h2>
            <div className='col-span-1 lg:grid grid-cols-3 lg:gap-4 m-7'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Speak to Our Team</h2>
                        <p>Talk to our team of professionals to get a better understanding of your exact legal needs</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Connect with a Legal Service Provider</h2>
                        <p>We connect you to a lawyer specialized to your case and assist you with putting together the required paperwork.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title ">Complete Your Legal Request</h2>
                        <p>We see you through complete delivery of your required service until you are satisfied with our services</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Methods;