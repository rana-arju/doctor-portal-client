import React, { useState } from 'react';
import AppointmentBannner from './AppointmentBannner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBannner date={date} setDate={setDate} />
            <AvailableAppointment date={date} />
        </div>
    );
};

export default Appointment;