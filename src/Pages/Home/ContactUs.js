import React from 'react';
import contactbg from '../../assets/images/appointment.png';
const ContactUs = () => {
    return (
   <div className='py-10 md:py-20' style={{background: `url(${contactbg})`}}>
        <div className='text-center text-white mb-5'>
            <h4 className='capitalize text-lg text-primary'>Contact Us</h4>
            <h2 className='capitalize text-3xl'>Stay connected with us</h2>
        </div>
            <div className='w-full px-3 md:2/5 md:mx-auto'>
                <form>
                <div>
                <input type="email" placeholder="Enter Your Eamil" class="input input-bordered w-full  block mb-5" />
                </div>                    
               <div>
                <input type="text" placeholder="Subject" class="input form-control input-bordered w-full  block mb-5" />
               </div>
                <div class="form-control mb-5">
                <textarea class="textarea textarea-bordered h-32" placeholder="Your Message"></textarea>
                </div>
                <div className='text-center'>
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white" type='submit'>send message</button>
                </div>
  

                </form>
        </div>
    </div>
    );
};

export default ContactUs;