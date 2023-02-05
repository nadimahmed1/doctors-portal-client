import React from 'react';
import flouride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png'
import Service from './Service';
import PrimaryButton from './PrimaryButton';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Flouride Treatment",
            description: "",
            img: flouride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "",
            img: cavity
        },
        {
            _id: 1,
            name: "Teeth Whitening",
            description: "",
            img: whitening
        }
    ]
    return (
        <div>
            <div className='text-center my-20'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services we provided</h2>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2  gap-10 my-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div>
                <div class="hero min-h-screen ">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 class="text-5xl font-bold">Treatment!</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;