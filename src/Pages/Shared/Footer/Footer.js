import React from 'react';

const Footer = () => {
    const date = new Date();
    return (
        <footer>
            <p>MJ Fitness</p>
            <p><small>
                ©{date.getFullYear()} MJ Fitness. All Rights Reserved.
            </small></p>
        </footer>
    );
};

export default Footer;