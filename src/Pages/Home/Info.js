import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='container grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" cardDes="Lorem Ipsum is simply dummy text of the pri" img={clock} bgclassName="bg-gradient-to-r from-primary to-secondary" />
            <InfoCard cardTitle="Visit our location" cardDes="Brooklyn, NY 10036, United States" img={marker} bgclassName="bg-accent" />
            <InfoCard cardTitle="Contact us now" cardDes="+8801881220413" img={phone} bgclassName="bg-gradient-to-r from-primary to-secondary" />
        </div>
    );
};

export default Info;