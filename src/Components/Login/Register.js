import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="hero min-h-screen flex-col lg:flex-row-reverse py-20">
            <div className="card w-full max-w-sm flex-shrink-0 shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className='text-center text-3xl font-bold text-indigo-500'>Register Now</h2>
                    <form>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type='text' placeholder='First Name' className='input input-bordered w-full max-w-xs' {...register("firstName", { required: true, maxLength: 20 })} />
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type='email' placeholder='Your Email' className='input input-bordered w-full max-w-xs' {...register("email", { required: true, maxLength: 20 })} />
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type='password' placeholder='Your Password' className='input input-bordered w-full max-w-xs' {...register("password", { required: true, maxLength: 20 })} />
                        </form>
                        <button className='btn w-full mt-4'>Register</button>
                    </form>
                    <p className='w-full max-w-sm'>Already have an Account?<Link to='/login' className='btn btn-link'>Login</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;