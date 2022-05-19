import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor, index, refetch, setDeletingDoctor}) => {
    const {image, name,  speciality} = doctor;
  
    return (
    <tr>
        <th>{index + 1}</th>
        <td>
            <div class="w-16 h-16 rounded-full">
                <img src={image} alt=".." />
        </div>
        </td>
        <td>{name}</td>
        <td>{speciality}</td>
        <td>
            <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn modal-button">Delete</label>
</td>
    </tr>
    );
};

export default DoctorRow;