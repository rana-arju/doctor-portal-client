import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [appointments, setAppointment] = useState([]);
    useEffect(() => {
        if (user) {
        fetch(`http://localhost:5000/booking?patient=${user.email}`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
        })
        .then(res => {
        if (res.status === 401 || res.status === 403) {
         signOut(auth);
         localStorage.removeItem('accessToken');
         navigate('/')
        }
        return res.json()
      })
        .then(data => {
          setAppointment(data)
        })
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
        <th>Payment</th>
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
        <td>
          {(booking.price && !booking.paid) && <Link to={`/deshboard/payment/${booking._id}`}><button className='btn btn-xs btn-success'>Pay Now</button></Link>}
          {(booking.price && booking.paid) && <span className='btn btn-xs btn-success px-5'>Paid</span>}
        </td>
      </tr>)
        }
   
 
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;