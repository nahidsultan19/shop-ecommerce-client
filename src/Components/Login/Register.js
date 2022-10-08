import { async } from '@firebase/util';
import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const Register = () => {
    const [signInWithGoogle, gUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();


    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (gUser) {
            navigate(from, { replace: true })
        }
    }, [gUser, from, navigate])

    if (googleLoading || loading) {
        return <Loading />
    }

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        navigate('/login')
    };
    return (
        <div className="hero min-h-screen flex-col lg:flex-row-reverse py-20">
            <div className="w-full max-w-sm flex-shrink-0 shadow-xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"{...register("name")} />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"{...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs"{...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Should be 6 characters or longer'
                                }
                            })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <button className="btn btn-success text-white font-bold w-full max-w-xs">Register</button>
                    </form>
                    <p className='w-full max-w-sm'>Already have an Account?<Link to='/login' className='btn btn-link'>Login</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;