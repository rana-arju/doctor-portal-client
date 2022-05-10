import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
const MakeAppointment = () => {
    return (
    
        <section  style={{ background: `url(${appointment})`}}>
            <div className=' p-4 container grid grid-cols-1 content-center items-center md:grid-cols-2 md:p-0'>
            <div className='hidden md:block'>
                <img src={doctor} alt="" className='mt-[-120px]'/>
            </div>
            <div>
                <h3 className='text-lg  text-primary md:text-xl'>Appointment</h3>
                <h2 className='text-2xl my-5 text-white md:text-4xl '>Make an appointment Today</h2>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-10">Get Started</button>

            </div>
            </div>
        </section>
    );
};

export default MakeAppointment;