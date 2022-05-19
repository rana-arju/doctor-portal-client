import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModel from './BookingModel';
import Service from './Service';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';
const AvailableAppointment = ({date}) => {
    const [treatments, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    const { isLoading, error, data: services } = useQuery(['available', formattedDate], () =>
     fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>res.json())
   )
    if(isLoading){
        return <Loading />
    }
    if(error){
        return toast.error(error.message);
    }
    return (
        <div className='container mb-10'>
            <h2 className='text-xl text-center text-secondary capitalize my-10'>Available date: {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment ={setTreatment}
                    />)
                }
            </div>
            {treatments && <BookingModel
            treatments ={treatments}
            date={date}
            setTreatment={setTreatment}
            />}
        </div>
    );
};

export default AvailableAppointment;