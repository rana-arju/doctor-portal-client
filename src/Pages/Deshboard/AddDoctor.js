import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgStorgeKey = '58d3c7355cf533547f2645e98915da5c';
    const {isLoading, error, data: services} = useQuery('services', () => fetch(`http://localhost:5000/services`).then(res => res.json()));

    const onSubmit = event =>{
        const image = event.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorgeKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if (result.success) {
                const img = result.data.url;
                const doctor = {
                    name: event.fullName,
                    email: event.email,
                    speciality: event.speciality,
                    image: img
                }
                //send to database
                fetch('http://localhost:5000/doctor', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success('Doctor Added Successfully');
                        reset();
                    }else{
                        toast.error('Failed to addd The Doctor');
                    }
                })
            }
        })
};
  if(isLoading){
        return <Loading />
    }
    if(error){
        return toast.error(error.message);
    }
    return (
        <div className='container flex h-1/2 md:h-screen justify-center items-center'>
            <div className="card w-full md:w-4/5 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold mb-5">Add New Doctor</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p className='mb-3 text-red-500'> {errors.fullName?.type === 'required' && "Full name is required*"}</p>
                    <input type="text" placeholder="Full Name" className="input input-bordered w-full  block mb-5" {...register("fullName", { required: true })} />
                   
                </div>
                <div>
                <p className='mb-3 text-red-500'>
                {errors.email?.type === 'required' && <span>{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span>{errors.email.message}</span> }
                </p>
                <input type="email" autoComplete='off' placeholder="Eamil" className="input input-bordered w-full  block mb-5" {...register("email", {required: {
                    value: true,
                    message: 'Email is required*'
                },
                 pattern: {
                    value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Provide a Valid Email',
                }
                  })} />
                </div>                    
                <div>
                <p className='mb-3 text-red-500'>
                    {errors.speciality?.type === 'required' && <span>{errors.speciality.message}</span>}
                   
                </p>
                 <select className="select select-bordered w-full w-block mb-5" {...register("speciality", {required: {
                    value: true,
                    message: 'Special is required*'
                }})} >
                <option disabled selected>Select Your Speciality</option>
                {
                    services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                }

                </select>

                </div>
                <div>
                <p className='mb-3 text-red-500'>
                {errors.image?.type === 'required' && <span>{errors.image.message}</span>}
                   
                </p>
                <input type="file" placeholder="Image" className="input input-bordered w-full  block mb-5" {...register("image", {required: {
                    value: true,
                    message: 'Image is required*'
                },
            
                  })} />
                </div> 
                <div className='text-center'>
                    <button className="btn btn-block btn-primary bg-gradient-to-r from-primary to-secondary text-white" type='submit'>Register</button>
                </div>
               
                </form>
               
            </div>
            </div>
        </div>
    );
};

export default AddDoctor;