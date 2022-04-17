import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const {name,price,img,description} = service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>{price}/<small>month</small></h5>
            <p>{description}</p>
            <button className='btn w-50'>Start Now</button>
        </div>
    );
};

export default Service;