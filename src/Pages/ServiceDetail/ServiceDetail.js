import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const handleCheckout=(event) => {
        event.preventDefault();
        navigate('/checkout');
    }
    return (
        <div>
            <h2 className='text-center text-danger mt-5 mb-3'>Please Fill Up The Form for Booking</h2>
            <div className='text-center checkout-form'>

                <form onSubmit={handleCheckout}>
                    <input type="text" name='name' placeholder='Your Name' required/>
                    <input type="email" name="email" placeholder='Email' required />
                    <input type="text" name='address' placeholder='Address' required />
                    <input type="text" name='phone' placeholder='Phone' required />
                    <input type="submit" className='input-btn' value="Proceed Checkout" />

                </form>
            </div>
        </div>
    );
};

export default ServiceDetail;