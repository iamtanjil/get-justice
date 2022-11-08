import React from 'react';
import bg from '../../../assests/law-bg.jpg';
import { FcCustomerSupport, FcBusinessContact, FcSurvey } from "react-icons/fc";


const Methods = () => {
    return (
        <div className='mx-auto m-10'>
            <h2 className='text-5xl text-center font-bold'>How Its Work</h2>
            <h2 className='text-2xl text-center font-bold'>Get your legal solution in 3 easy steps</h2>
            <div className='col-span-1 lg:grid grid-cols-3 lg:gap-4 m-7'>
                <div>
                    <div className="badge badge-primary">Step-1</div>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={bg} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='felx mx-auto'>
                                <FcCustomerSupport className='text-9xl'></FcCustomerSupport>
                            </div>
                            <h2 className="card-title justify-center text-center">Speak to Our Team</h2>
                            <p className='text-center'>Talk to our team of professionals to get a better understanding of your exact legal needs</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="badge badge-primary">Step-2</div>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={bg} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='felx mx-auto'>
                                <FcBusinessContact className='text-9xl'></FcBusinessContact>
                            </div>
                            <h2 className="card-title justify-center text-center">Connect with a Legal Service Provider</h2>
                            <p className='text-center'>We connect you to a lawyer specialized to your case and assist you with putting together the required paperwork.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="badge badge-primary">Step-3</div>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={bg} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <div className='felx mx-auto'>
                                <FcSurvey className='text-9xl'></FcSurvey>
                            </div>
                            <h2 className="card-title justify-center text-center">Complete Your Legal Request</h2>
                            <p className='text-center'>We see you through complete delivery of your required service until you are satisfied with our services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Methods;