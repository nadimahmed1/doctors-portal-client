import React from 'react';
import doctor from '../../assets/images/doctor.png'
import Appointmen from '../../assets/images/appointment.png'
import PrimaryButton from './PrimaryButton';


const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${Appointmen})` }} className='flex justify-center items-center mb-5'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-170px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-10'>
                <h3 className='text-xl text-primary uppercase py-2'>Appointment</h3>
                <h2 className='text-3xl text-white py-2'>Make an Appointment</h2>
                <p className='py-2 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut praesentium ipsa, repellendus voluptatum ratione, dignissimos excepturi rem saepe illo, necessitatibus quia aspernatur laudantium minus temporibus laboriosam doloribus enim nostrum tenetur! Unde sint itaque provident hic fugiat expedita dolores eum nemo.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;