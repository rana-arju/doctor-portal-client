import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from './Review';
const Testimonials = () => {
     const reviews =[
         {
             _id: 1,
             name: "winson Herry",
             img: people1,
             loc: "cox's bazar"
         }, 
        {
             _id: 2,
             name: "winson Herry",
             img: people2,
             loc: "cox's bazar"
         },
         {
             _id: 3,
             name: "winson Herry",
             img: people3,
             loc: "cox's bazar"
         }
     ]
    return (
        <section className='my-10 container'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} alt="" className='w-20 md:w-36' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>
        </section>
    );
};

export default Testimonials;