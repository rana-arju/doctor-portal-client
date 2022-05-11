import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
    <div className="card  bg-base-100 shadow-xl">
        <div className="card-body text-center">
            <h2 className="card-title justify-center text-xl text-secondary">{name}</h2>
            <p>
                {
                    slots.length > 0 ?  <span>{slots[0]}</span> : <span className='text-red-400 text-bold'>Try another date</span>
                }
            </p>
            <p>{slots.length} {slots.length > 1 ? "Spaces Available" : "Space Available"}</p>
            <div className="card-actions justify-center">
            <label htmlFor="booking-modal"
            disabled={slots.length === 0}
            className="btn mt-3 btn-modal btn-primary bg-gradient-to-r from-primary to-secondary text-white "
            onClick={()=> setTreatment(service)}>Book Appointment</label>
           
            </div>
        </div>
    </div>
    );
};

export default Service;