import React from 'react';
import './BannerItem.css'

const BannerItems = ({ banner }) => {
    const { id, img, next, prev } = banner;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className='banner-img '>
                <img src={img} alt="" className="w-full h-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='mt-16 lg:mt-0 lg:block text-6xl font-bold text-white'>
                    Get Best <br />
                    Law Services <br />
                    Form Us
                </h1>
            </div>
            <div className="hidden  absolute lg:flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-xl text-white mt-12'>Find expert legal advice in three easy steps with Bangladesh’s first online legal-service providing platform. Lawyers, Chartered Accountants and Company Secretaries whatever your needs, we got you covered. Get started today!</p>
            </div>
            <div className="hidden absolute lg:flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <button className="btn btn-outline btn-primary">Contact Us</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;