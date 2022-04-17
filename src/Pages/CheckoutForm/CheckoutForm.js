import React from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CheckoutForm.css'

const CheckoutForm = () => {
    const { serviceId } = useParams();
    const handleCheckout=(event) => {
        event.preventDefault();
        toast('Thank you for the booking.');
    }
    return (
        <div>
            <h2 className='text-center text-danger mt-5 mb-3'>Please Fill Up The Form for Booking service no: {serviceId}</h2>
            <div className='text-center checkout-form'>

                <form onSubmit={handleCheckout}>
                    <input type="text" name='name' placeholder='Your Name' required/>
                    <input type="email" name="email" placeholder='Email' required />
                    <input type="text" name='address' placeholder='Address' required />
                    <input type="text" name='phone' placeholder='Phone' required />
                    <input type="submit" className='input-btn' value="Proceed Checkout" />
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default CheckoutForm;