import React from 'react';
import treatment from '../../assets/images/treatment.png';
const About = () => {
    return (
    <div class="hero min-h-screen mb-8">
    <div class="hero-content px-fit md:px-32 flex-col lg:flex-row">
        <img src={treatment} alt="..." className='w-full md:w-2/5 mr-0 md:mr-10 rounded-lg'/>
        <div>
            <h2 class="text-2xl md:text-4xl font-bold">Exceptional Dental Care, on Your Terms</h2>
            <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
        </div>
    </div>
    </div>
    );
};

export default About;