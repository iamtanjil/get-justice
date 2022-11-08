import React from 'react';
import img1 from '../../../assests/Banner/1.jpg';
import img2 from '../../../assests/Banner/2.jpg';
import img3 from '../../../assests/Banner/3.jpg';
import img4 from '../../../assests/Banner/4.jpg';
import img5 from '../../../assests/Banner/5.jpg';
import BannerItems from './BannerItems';

const Banner = () => {
    const bannerData = [
        {
            id:1,
            img: img1,
            next: 2,
            prev: 5
        },
        {
            id:2,
            img: img2,
            next: 3,
            prev: 1
        },
        {
            id:3,
            img: img3,
            next: 4,
            prev: 2
        },
        {
            id:4,
            img: img4,
            next: 5,
            prev: 4
        },
        {
            id:5,
            img: img5,
            next: 1,
            prev: 4
        },
    ]
    return (
        <div className="carousel w-full py-10 lg:h-[700px]">
            {
                bannerData.map(banner => <BannerItems
                key={banner.id}
                banner={banner}
                ></BannerItems>)
            }
        </div>
    );
};

export default Banner;