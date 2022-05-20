import React from 'react';
import { useParams } from 'react-router-dom';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading/Loading';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'
const stripePromise = loadStripe('pk_test_51L19G4DL7GXo3RyjkaAQ65hkhUGgnm3ePYitn5Kr8n2qYl3o4MSQiYekb0EOc0OBp0j9fLKrilvTG6r60lOmJwGi00HE13LjtN');
const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const {data: appointment, isLoading} = useQuery(['booking', id], () => fetch(url, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
        <div className="card w-96 bg-white text-primary-content">
        <div className="card-body">
            <p className="text-secondary text-xl font-bold">Hello, {appointment.patientName}</p>
        <h2 className="card-title">Pay For {appointment.treatment}</h2>
        <p>We will See You on <span className='text-orange-700'>{appointment.slot}</span> at {appointment.date}</p>
        <p className='text-lg font-bold text-secondary'>Please Pay: $ {appointment.price}</p>
        <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
        </div>
    </div>
    </div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <Elements stripe={stripePromise}>
            <CheckoutForm appointment = {appointment} />
        </Elements>
      </div>
    </div>
  </div>
</div>
    );
};

export default Payment;