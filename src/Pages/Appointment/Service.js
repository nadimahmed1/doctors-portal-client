import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg  bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary font-bold">{name}</h2>
                <p>{slots.length ? <span>{slots[0]}</span> : <span className='text-xl text-red-500'>Not Slot Available</span>}</p>
                <p>{slots.length ? <span>{slots.length} Spaces Available</span> : "0 Space Available"}</p>
                <div class="card-actions justify-center">


                    <label for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class="btn btn-secondary uppercase text-white ">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;