import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

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
        return <p>Loading...</p>;
    }
    if (user) {
        navigate('/home');
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
        </div>
    );
};

export default Login;