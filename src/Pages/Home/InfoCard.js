import React from 'react';

const InfoCard = ({img, cardTitle, cardDes, bgClass}) => {
    return (
    <div className={`card lg:card-side shadow-xl bg-accent ${bgClass}`}>
    <figure className='pt-4 pl-0 md:pl-4 md:pt-0'>
        <img src={img} alt="Album" />
    </figure>
    <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDes}</p>
    </div>
    </div>
    );
};

export default InfoCard;