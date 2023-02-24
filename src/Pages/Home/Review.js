import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl my-5">
            <div className="card-body">
                <h2 className="card-title"></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa, doloribus accusamus corporis ab consequuntur.</p>
                <div className="flex items-center my-5">
                    <div>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={review.img} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>{review.name}</h2>
                        <h6>{review.location}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;