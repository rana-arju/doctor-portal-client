import React from 'react';

const Service = ({service}) => {
    const {name, slots} = service;
    return (
    <div class="card  bg-base-100 shadow-xl">
        <div class="card-body text-center">
            <h2 class="card-title justify-center text-xl text-secondary">{name}</h2>
            <p>
                {
                    slots.length > 0 ?  <span>{slots[0]}</span> : <span className='text-red-400 text-bold'>Try another date</span>
                }
            </p>
            <p>{slots.length} {slots.length > 1 ? "Spaces Available" : "Space Available"}</p>
            <div class="card-actions justify-center">
           <button disabled={slots.length === 0} className="btn mt-3 btn-primary bg-gradient-to-r from-primary to-secondary text-white ">Book Appointment</button>
            </div>
        </div>
    </div>
    );
};

export default Service;