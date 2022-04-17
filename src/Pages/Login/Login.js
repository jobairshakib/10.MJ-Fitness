import React, { useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import Social from './Social/Social';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const navigateRegister = () => {
        navigate('/register');
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return (
            <Loading></Loading>
        );
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form'>
            <h2 className='text-center'>Login</h2>

            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder='Email' required />
                <input type="password" name='password' placeholder='Password' required />
                <input type="submit" className='input-btn' value="Login" />

            </form>
            <p>Don't have an account? <Link to="/register" onClick={navigateRegister}>Please Register</Link></p>
            <Social></Social>
        </div>
    );
};

export default Login;