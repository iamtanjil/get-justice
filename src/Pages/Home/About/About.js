import React from 'react';
import img from '../../../assests/about.png'


const About = () => {
    return (
        <div>
            <h2 className='text-5xl text-center font-bold'>About Us</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl m-5">
                <figure><img src={img} alt="Album"className='lg:h-80 lg:w-80' /></figure>
                <div className="card-body w-96">
                    <h2 className="card-title text-3xl font-medium">About GetJustice</h2>
                    <p>Our heartiest welcome goes to you. Let us allow to introduce ourselves. ADVOCACY LEGAL is a full service law firm in Bangladesh, which is located very close to the Hazrat Shahjalal International Airport Dhaka, Bangladesh. As a result of being a full service law firm, one can get complete legal services including family, company, IP and high court matters. The legal team of ADVOCACY LEGAL is one of the strongest and largest legal teams in Bangladesh. We are committed to serve our clients with highest priority. We get better with every clients we deal with and we grow by solving their legal problems. ADVOCACY LEGAL also deals with immigration and visa matters. Most importantly, ADVOCACY LEGAL provides complete legal assistance to its foreign clients to setup a new business in Bangladesh and provides post registration legal services. ADVOCACY LEGAL likes to consider our client’s problem as our own problem. We have a strong advisory panel consisting of senior lawyers regularly practicing in the courts.</p>
            
                </div>
            </div>
        </div>
    );
};

export default About;