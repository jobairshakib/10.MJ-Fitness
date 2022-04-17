import React from 'react';
import './Social.css';
import google from '../../../Images/google.png';

const Social = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className="bg-danger w-50"></div>
                <p className='mt-3 mx-3'>Or</p>
                <div style={{ height: '1px' }} className="bg-danger w-50"></div>
            </div>
            <div>
                <button className='social-btn'>
                    <img src={google} alt="" /><span className='px-2'> Google Sign In</span></button>
            </div>
        </div>
    );
};

export default Social;