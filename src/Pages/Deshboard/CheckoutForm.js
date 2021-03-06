import React, {useState, useEffect} from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const CheckoutForm = ({appointment}) => {
  const {_id: id, price, patient, patientName} = appointment;
      const stripe = useStripe();
      const elements = useElements();
      const [cardError, setCardError] = useState('');
      const [processing, setProcessing] = useState(false);
      const [cardSuccess, setCardSuccess] = useState('');
      const [clientSecret, setClientSecret] = useState("");
      const [transactionId, setTransactionId] = useState("");
      useEffect(() => {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem('accessToken')}`

        },
        body: JSON.stringify({price}),
      })
      .then(res => res.json())
      .then(data => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret)
        }
      })
        
  }, [price]);

    const handleSubmit= async(event)  => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
    const card = elements.getElement(CardElement);
     if (card == null) {
      return;
    }
     const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    setCardError(error?.message)
    setCardSuccess(" ");
    setProcessing(true);
    //confirm card payment
  const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(clientSecret,
  {
    payment_method: {
      card: card,
      billing_details: {
        name: patientName,
        email: patient
      },
    },
  },
);
  if (intentError) {
    setCardError(intentError?.message);
    setProcessing(false)
  }else{
    setCardError('');
    setTransactionId(paymentIntent.id);
    setCardSuccess('Your Payment is Complated');
    const payment = {
      appointment: id,
      transactionId: paymentIntent.id,
    }
    fetch(`http://localhost:5000/booking/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
    })
    .then(res => res.json())
    .then(data => {
      setProcessing(false);
      console.log(data);
    })
  }
    }
    return (
      <>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-accent px-5 btn-xs mt-5' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    {
      cardError && <p className='text-red-500'>{cardError}</p>
    }
    {
      cardSuccess && <div className='text-green-500'>
        <p>{cardSuccess}</p>
        <p>Your Transaction id: <span className='text-orange-500 font-bold'>{transactionId}</span></p>
        </div>
    }
    </>
    );
};

export default CheckoutForm;