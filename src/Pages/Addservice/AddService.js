import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Services')
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const ServiceName = form.name.value;
        const price = form.price.value;
        const duration = form.duration.value;
        const img = form.img.value;
        const detaiils = form.details.value;

        const service = {
            ServiceName,
            duration,
            price,
            detaiils,
            img
        }


        fetch('https://assignment-11-server-wine.vercel.app/addedservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service Added Successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div className='m-5 mx-auto'>
            <h2 className='text-5xl font-bold text-center mb-5'>Add A Service</h2>
            <form onSubmit={handleAddService} className='bg-base-200 rounded-lg p-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="name" type="text" placeholder="Service Name" className="input input-ghost w-full  input-bordered" />
                    <input name="price" type="text" placeholder="Service Price" className="input input-ghost w-full  input-bordered" />
                    <input name="duration" type="text" placeholder="Duration" className="input input-ghost w-full  input-bordered" />
                    <input name="img" type="text" placeholder="Your Img URL" className="input input-ghost w-full  input-bordered" />
                </div>
                <textarea name="details" className="textarea textarea-bordered h-24 w-full mt-3" placeholder="Your Message" required></textarea>

                <input className='btn btn-outline btn-primary mt-3' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default AddService;