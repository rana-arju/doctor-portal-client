import React from 'react';

const Service = ({img, serviceTitle, serviceDes}) => {

    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="service" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{serviceTitle}</h2>
                <p>{serviceDes}</p>
            </div>
        </div>
    );
};

export default Service;