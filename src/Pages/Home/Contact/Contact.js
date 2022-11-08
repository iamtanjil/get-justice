import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='mx-auto mt-10'>
            <h2 className='text-5xl text-center font-bold'>Contact Info</h2>
            <div className='grid col-span-1 lg:grid-cols-3 gap-4 mt-7'>
                <div className='shadow-md rounded-lg m-5 p-8'>
                    <div className='flex justify-center mb-5'>
                        <FaMapMarkerAlt className='h-12 w-12 text-blue-600'></FaMapMarkerAlt>
                    </div>
                    <div className='flex justify-center'>
                        <h2 className="text-xl">Hazrat Shahjalal Int Airport.</h2>
                    </div>
                </div>
                <div className='shadow-md rounded-lg m-5 p-8'>
                    <div className='flex justify-center mb-5'>
                        <FaPhoneAlt className='h-12 w-12 text-blue-600'></FaPhoneAlt>
                    </div>
                    <div className='flex justify-center'>
                        <h2 className="text-xl">+8801711223344</h2>
                    </div>
                </div>
                <div className='shadow-md rounded-lg m-5 p-8'>
                    <div className='flex justify-center mb-5'>
                        <FaMailBulk className='h-12 w-12 text-blue-600'></FaMailBulk>
                    </div>
                    <div className='flex justify-center'>
                        <h2 className="text-xl">helpline@getjustice.com</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;