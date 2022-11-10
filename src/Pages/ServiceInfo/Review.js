import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={review.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{review.name}</h2>
                    <p className='text-lg'>{review.email}</p>
                    <p className='text-xl'>{review.review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;