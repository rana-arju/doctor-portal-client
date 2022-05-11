import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointment = ({date}) => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <h2 className='text-xl text-center text-secondary capitalize my-10'>Available date: {format(date, 'PP')}</h2>
        </div>
    );
};

export default AvailableAppointment;