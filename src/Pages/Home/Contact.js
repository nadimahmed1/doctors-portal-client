import React from 'react';
import PrimaryButton from './PrimaryButton';
import Appointmen from '../../assets/images/appointment.png'

const Contact = () => {
    return (


        <section className='my-10' style={{ background: `url(${Appointmen})` }}>

            <div class="hero min-h-screen ">

                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='text-center'>
                        <h4 className='text-xl text-primary font-bold'>Contact Us</h4>
                        <h2 className='text-3xl text-white'>Stay connected with us..</h2>
                    </div>

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <div class="card-body">
                            <div class="form-control">
                                <input type="text" placeholder="Email" class="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div class="form-control">

                                <input type="text" placeholder="Subject" class="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <textarea class="textarea textarea-primary" placeholder="Your message"></textarea>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;