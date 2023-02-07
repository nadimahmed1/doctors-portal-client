import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);

    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text-secondary text-center font-bold text-2xl m-10'>Available Appointments on {format(date, 'PPP')}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <BookingModal date={date} setTreatment={setTreatment} treatment={treatment}></BookingModal>
            }
        </div>

    );
};

export default AvailableAppointments;