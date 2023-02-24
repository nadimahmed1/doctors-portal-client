import React from 'react';
import PrimaryButton from './PrimaryButton';
import Appointmen from '../../assets/images/appointment.png'

const Contact = () => {
    return (


        <section className='my-10' style={{ background: `url(${Appointmen})` }}>

            <div className="hero min-h-screen ">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='text-center'>
                        <h4 className='text-xl text-primary font-bold'>Contact Us</h4>
                        <h2 className='text-3xl text-white'>Stay connected with us..</h2>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Email" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="Subject" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <textarea className="textarea textarea-primary" placeholder="Your message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;