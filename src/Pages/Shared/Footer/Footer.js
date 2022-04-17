import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date();
    return (
        <footer className=' footer text-center mt-5'>
            <p>MJ Fitness</p>
            <p><small>
                ©{date.getFullYear()} MJ Fitness. All Rights Reserved.
            </small></p>
        </footer>
    );
};

export default Footer;