import React from 'react';
import auth from '../Appointment/firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updatingLoading, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (loading || googleLoading || updatingLoading) {
        return <Loading></Loading>
    }

    let signInError;
    if (error || googleError || updateError) {
        signInError = <p className='text-red-500'>{error.message}</p>
    }

    const onSubmit = async (data) => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
        navigate('/Appointment')
    }



    if (user) {
        console.log(user);
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Name</span>

                            </label>
                            <input type="name" placeholder="Your name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }

                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <p role="alert"><span className='text-red-500'>{errors.name.message}</span></p>}


                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Email</span>

                            </label>
                            <input type="email" placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <p role="alert"><span className='text-red-500'>{errors.email.message}</span></p>}
                                {errors.email?.type === 'minLength' && <p role="alert"><span className='text-red-500'>{errors.email.message}</span></p>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Password</span>

                            </label>
                            <input type="password" placeholder="Your Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'must be a 6 charecter or longer'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <p role="alert"><span className='text-red-500'>{errors.password.message}</span></p>}
                                {errors.password?.type === 'minLength' && <p role="alert"><span className='text-red-500'>{errors.password.message}</span></p>}

                            </label>
                        </div>

                        <input

                            aria-invalid={errors.firstName ? "true" : "false"}
                        />


                        {signInError}



                        <input className='btn w-full max-w-xs' type="submit" value={'Sign Up'} />
                    </form>
                    <small>Already have an account <Link to={'/Login'}><small className='text-primary'>Please Login first</small></Link></small>

                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn">Continue with Google</button>


                </div>
            </div>
        </div>
    );
};

export default SignUp;