import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingDoctor, refetch, setDeletingDoctor}) => {
    const {name, email} = deletingDoctor;
      const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                toast.success("you are Delete One Doctor");
                setDeletingDoctor(null);
                refetch();
            }
        })
    }
    return (
        <div>

        <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
            <h3 class="font-bold text-lg text-red-500">Are You Sure you want to delete {name} ?</h3>
            <div class="modal-action">
            <button class="btn btn-primary" onClick={() => handleDelete()}>Delete</button>

            <label htmlFor="delete-confirm-modal" class="btn">Cancle</label>
            </div>
        </div>
        </div>
        </div>
    );
};

export default DeleteConfirmModal;