import React from 'react';
import About from './About';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <About />
            <MakeAppointment />
            <Testimonials />
        </div>
    );
};

export default Home;