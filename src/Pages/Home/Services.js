import React from 'react';
import cavity from "../../assets/images/cavity.png"
import fluoride from "../../assets/images/fluoride.png"
import whitening from "../../assets/images/whitening.png"
import Service from './Service';
const Services = () => {
    return (
        <div className='container my-20'>
            <div className="text-center mb-5">
                <p className='uppercase text-primary'>our services</p>
                <h3 className='capitalize text-2xl text-accent'>services we provide</h3>
            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <Service img={fluoride} serviceTitle="Fluoride Treatment" serviceDes="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" />
            <Service img={cavity} serviceTitle="Cavity Filling" serviceDes="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" />
            <Service img={whitening} serviceTitle="Teeth Whitening" serviceDes="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" />
            </div>
            
        </div>
    );
};

export default Services;