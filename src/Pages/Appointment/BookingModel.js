import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
  import {toast } from 'react-toastify';

const BookingModel = ({treatments,date, setTreatment}) => {
    const [user, loading, error] = useAuthState(auth);
    const {_id, name, slots, price} = treatments;
    const formattedDate = format(date, "PP")
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const number = event.target.number.value;
        const booking ={
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            number,
        }
        fetch('http://localhost:5000/booking',{
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                toast.success(`Successfully Booking on ${formattedDate} at ${slot}`);
                setTreatment(null);
            }else{
              toast.error(`Already have an Booking on ${data.message?.date} at ${data.message?.slot}`);

            }
        })
       
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <div>               
                    <h3 className="text-lg font-bold mb-5">{name}</h3>
                <div className='w-full px-3 md:mx-auto'>
                <form onSubmit={handleBooking}>
                <div>
                    <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full  block mb-5" />
                </div>
               <div className="form-control">
                <select className="select select-bordered  w-full mb-5" name='slot'>
                    {
                        slots.map(slot=> <option key={_id} value={slot} selected>{slot}</option>)
                    }
                    
                </select>
                </div>
                <div>
                    <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full  block mb-5" />
                </div>
                <div>
                    <input type="email" name='email' disabled value={user?.email || ''} className="input form-control input-bordered w-full  block mb-5" />
               </div>                 
               <div>
                    <input type="text" name='number' placeholder="Phone Number" className="input form-control input-bordered w-full  block mb-5" />
                </div>

                <div>
                    <input className="btn w-full bg-accent text-white" type='submit' value='submit' />
                </div>
                </form>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default BookingModel;