import React from 'react';
import About from './About';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <About />
        </div>
    );
};

export default Home;