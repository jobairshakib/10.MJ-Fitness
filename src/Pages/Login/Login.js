import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/register');
    }

    const handleLogin = (event) => {
        event.preventDefault();
    }

    return (
        <div className='register-form'>
            <h2 className='text-center'>Register</h2>

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