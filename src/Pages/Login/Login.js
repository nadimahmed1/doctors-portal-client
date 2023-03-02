import React from 'react';
import auth from '../Appointment/firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let navigate = useNavigate();
    let location = useLocation();

    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    let signInError;
    if (error || googleError) {
        signInError = <p className='text-red-500'>{error.message}</p>
    }

    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    let from = location.state?.from?.pathname || "/";


    if (user || googleUser) {
        console.log(user);
        navigate(from, { replace: true });
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

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



                        <input className='btn w-full max-w-xs' type="submit" value={'Login'} />
                    </form>
                    <small>New to Doctors Portal <Link to={'/signUp'}><small className='text-primary'>Please Create a Account</small></Link></small>

                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn">Continue with Google</button>


                </div>
            </div>
        </div>
    );
};

export default Login;