import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])

    return (
        <div className=''>
            <h2 className='text-xl font-bold text-center text-blue-500'>Login</h2>
            <button onClick={() => signInWithGoogle()} className='btn btn-ghost btn-outline w-full'>
                <FcGoogle className='text-2xl' />
                <p className='ml-3 text-xl'>Google sign in</p>
            </button>
        </div>
    );
};

export default Login;