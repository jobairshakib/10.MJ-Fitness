import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css'
import { Spinner } from 'react-bootstrap';
import Social from '../Login/Social/Social';
import Loading from '../Loading/Loading';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true});
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
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
        navigate('/home');
    }

    const handleRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form'>
            <h2 className='text-center'>Register</h2>

            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your Name'/>
                <input type="email" name="email" placeholder='Email' required/>
                <input type="password" name='password' placeholder='Password' required />
                <input type="submit" className='input-btn' value="Register" />

            </form>
            <p>Already have an account? <Link to="/login" onClick={navigateLogin}>Please Login</Link></p>
            <Social></Social>
        </div>
    );
};

export default Register;