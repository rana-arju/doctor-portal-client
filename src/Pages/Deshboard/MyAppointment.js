import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyAppointment = () => {
  const [user] = useAuthState(auth);
    const [appointments, setAppointment] = useState([]);
    useEffect(() => {
        if (user) {
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
        }

    },[user])
    return (
        <div>
            <h2>{appointments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra  w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
        {
            appointments.map((booking, index)=> <tr key={index}>
        <th>{index + 1}</th>
        <td>{booking.patientName}</td>
        <td>{booking.date}</td>
        <td>{booking.slot}</td>
        <td>{booking.treatment}</td>
      </tr>)
        }
   
 
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;