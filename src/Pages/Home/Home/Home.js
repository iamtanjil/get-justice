import React from 'react';
import useTitle from '../../../hooks/useTitle';
import LoadAddedService from '../../Addservice/LoadAddedService';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Methods from '../Methods/Methods';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
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