import React from 'react';

const Review = ({review}) => {
    return (
    <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quis error, deleniti magni officia quaerat!</p>
            <div className='flex gap-5 mt-5'>
              
               <div class="avatar">
                    <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img} alt="..." />
                    </div>
                </div>
                <div className='capitalize'>
                    <h4 className='text-lg'>{review.name}</h4>
                    <p>{review.loc}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Review;