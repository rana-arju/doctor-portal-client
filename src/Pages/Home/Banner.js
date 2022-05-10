import React from 'react';
import chair from '../../assets/images/chair.png';
const Banner = () => {
    return (
       <div className="hero max-h-screen ">
        <div className="hero-content container flex-col mb-5 lg:flex-row-reverse lg:my-10 ">
            <img src={chair} alt="..." className="w-fit rounded-lg shadow-2xl md:w-6/12" />
            <div>
            <h1 className="font-bold  text-base md:text-4xl ">Your New Smile Starts Here</h1>
            <p className="py-6 mx-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;