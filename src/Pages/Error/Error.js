import React from 'react';
import './Error.css'
import Error404 from '../../Images/Error.png'

const Error = () => {
    return (
        <div className='error'>
            <img src={Error404} alt="" />
        </div>
    );
};

export default Error;