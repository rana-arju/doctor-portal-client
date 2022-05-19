import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const {data: doctors, isLoading, refetch} = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-2xl'>Manage Doctors: {doctors.length}</h2>
            <div class="overflow-x-auto">
  <table class="table table-zebra w-full">
    <thead>
      <tr>
        <th>SL</th>
        <th>Image</th>
        <th>Name</th>
        <th>Specialist</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
         doctors.map((doctor, index) => <DoctorRow key={doctor._id} doctor = {doctor} index={index} refetch = {refetch} setDeletingDoctor= {setDeletingDoctor}  />)
     }
    </tbody>
    </table>
    </div>
     {deletingDoctor && <DeleteConfirmModal deletingDoctor ={deletingDoctor} refetch={refetch} setDeletingDoctor= {setDeletingDoctor} />}
    </div>
    );
};

export default ManageDoctor;