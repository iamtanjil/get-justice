import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2 className='text-5xl text-center font-bold'>Contact Info</h2>
            <div className='grid grid-cols-3 gap-4'>
                <div className='shadow-md rounded-lg m-5 p-8'>
                    <div className='flex justify-center'>
                        Icon
                    </div>
                    <div className='flex justify-center'>
                        <h2 className="text-xl">Hazrat Shahjalal Int Airport.</h2>
                    </div>
                </div>
                <div className='shadow-md rounded-lg m-5 p-8'>
                    <div className='flex justify-center'>
                        Icon
                    </div>
                    <div className='flex justify-center'>
                        <h2 className="text-xl">Hazrat Shahjalal Int Airport.</h2>
                    </div>
                </div>
                <div className='shadow-md rounded-lg m-5 p-8'>
                    <div className='flex justify-center'>
                        Icon
                    </div>
                    <div className='flex justify-center'>
                        <h2 className="text-xl">Hazrat Shahjalal Int Airport.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;