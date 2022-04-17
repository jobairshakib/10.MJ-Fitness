import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = (event) => {
        event.preventDefault();
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
        </div>
    );
};

export default Register;