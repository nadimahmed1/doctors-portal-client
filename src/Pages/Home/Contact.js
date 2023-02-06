import React from 'react';
import PrimaryButton from './PrimaryButton';
import Appointmen from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section style={{ background: `url(${Appointmen})` }} className='m-20 p-10'>
            <div className='text-center'>
                <h4 className='text-xl text-primary font-bold'>Contact Us</h4>
                <h2 className='text-3xl text-white'>Stay connected with us..</h2>
            </div>

            <div className='text-center my-5'>

                {/* <!-- xs --> */}
                <input type="text" placeholder="Email Address" class="input input-bordered input-xs w-full max-w-xs m-2" />

                {/* <!-- sm --> */}
                <br />
                <input type="text" placeholder="Subject" class="input input-bordered input-sm w-full max-w-xs m-2" />
                {/* <!-- md --> */}
                <br />

                <input type="text" placeholder="Your message" class="input input-bordered input-lg w-full max-w-xs m-2" />
                <br />
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default Contact;