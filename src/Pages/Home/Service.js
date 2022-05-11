import React from 'react';

const Service = ({img, serviceTitle, serviceDes}) => {

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="service" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{serviceTitle}</h2>
                <p>{serviceDes}</p>
            </div>
        </div>
    );
};

export default Service;