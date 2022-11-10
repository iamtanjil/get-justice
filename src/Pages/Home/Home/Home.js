import React from 'react';
import LoadAddedService from '../../Addservice/LoadAddedService';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Methods from '../Methods/Methods';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <LoadAddedService></LoadAddedService>
            <About></About>
            <Methods></Methods>
            <Contact></Contact>
        </div>
    );
};

export default Home;