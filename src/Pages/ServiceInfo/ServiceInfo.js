import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../Contexts/AuthContext';
import useTitle from '../../hooks/useTitle';
import ReviewCard from './Review';

const ServiceInfo = () => {
    useTitle('Service')
    const serviceInfo = useLoaderData();
    const { user } = useContext(AuthProvider)
    localStorage.setItem('userEmail', user?.email);
    localStorage.setItem('serviceId', serviceInfo._id)
    const [review, setReview] = useState([])

    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = localStorage.getItem('userEmail');
        const serviceId = localStorage.getItem('serviceId');
        const img = form.imgurl.value;
        const review = form.review.value;

        const reviewData = {
            serviceId,
            name,
            email,
            img,
            review
        }

        fetch('https://assignment-11-server-wine.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review successfully Added')
                    form.reset();
                }
            })
            .catch(er => console.error(er));

    }
    useEffect(() => {
        fetch('https://assignment-11-server-wine.vercel.app/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user])
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
            <div className='mt-10'>
                <h2 className='text-3xl'>See People What Saying About {serviceInfo.name}</h2>
                <h2 className='text-xl'>Write a Review</h2>
                {
                    user ? <div className='bg-base-200 rounded-lg w-1/2 p-7'>
                        <form onSubmit={handleReview}>
                            <div className='p-5 mx-auto'>
                                <div className='flex flex-col md:flex-row '>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-primary w-full m-3" />
                                    <input type="text" readOnly defaultValue={user?.email} name='email' placeholder="Your Email" className="input input-bordered input-primary w-full m-3" />
                                </div>
                                <input type="text" name='imgurl' placeholder="Image url" className="input input-bordered input-primary w-full m-3" />
                                <textarea name='review' className="textarea textarea-primary h-80 w-full m-3" placeholder="Write a review here"></textarea>
                                <button className='btn btn-outline btn-primary m-3' type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                        : <div className='bg-base-200 m-5 rounded-lg p-5'>
                            <p>Please <Link className='link link-primary' to='/login'> Login</Link> For Write a review.</p>
                        </div>

                }
            </div>
            <div className='grid col-span-1 lg:grid-cols-3 gap-4 mt-5'>
                {
                    review.map(rev => <ReviewCard
                        key={rev._id}
                        review={rev}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default ServiceInfo;