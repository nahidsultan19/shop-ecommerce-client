import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';



const Login = () => {
    const [signInWithGoogle, gUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

    let errorMessage;

    useEffect(() => {
        if (gUser || user) {
            navigate(from, { replace: true })
        }
    }, [gUser, user, from, navigate])


    if (loading || googleLoading) {
        return <Loading />
    }

    if (error || googleError) {
        errorMessage = <p className='text-red-500'>Error: {googleError?.message || error?.message}</p>
    }


    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);

    };


    return (
        <div className="hero-content min-h-screen flex-col lg:flex-row-reverse py-20">
            <div className="card w-full max-w-sm flex-shrink-0 shadow-2xl bg-base-100">
                <div className="card-body">
                    {/* <h2 className='text-center text-3xl font-bold'>Login</h2> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type='email' placeholder='Your Email' className='input input-bordered w-full max-w-xs' {...register("email", {
                            required: {
                                value: true,
                                message: "Email Address is required"
                            },

                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid email'
                            }
                        })} />
                        <p className='text-red-500 mt-2'>{errors.email?.message}</p>

                        <label className='label'>
                            <span className='label-text'>Password</span>
                        </label>
                        <input type='password' placeholder='Your Password' className='input input-bordered w-full max-w-xs'{...register('password', {
                            required: {
                                value: 'true',
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Should be 6 characters or longer'
                            }
                        })} />
                        <p className='text-red-500 mt-2'>{errors.password?.message}</p>
                        {errorMessage}
                        <button className='btn btn-success font-bold text-lg text-white w-full mt-4'>Login</button>
                    </form>
                    <p className='w-full max-w-sm'>Need an Account?<Link to='/register' className='btn btn-link'><small>Create an Account</small></Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;