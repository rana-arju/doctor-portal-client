import { format } from 'date-fns';
import React from 'react';

const BookingModel = ({treatments,date, setTreatment}) => {
    const {_id, name, slots} = treatments;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        setTreatment(null);
        console.log(slot, name, email, number);

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
                    <input type="text" name='name' placeholder="Full Name" className="input input-bordered w-full  block mb-5" />
                </div>                    
               <div>
                    <input type="text" name='number' placeholder="Phone Number" className="input form-control input-bordered w-full  block mb-5" />
                </div>
                <div>
                    <input type="email" name='email' placeholder="Enter Email" className="input form-control input-bordered w-full  block mb-5" />
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