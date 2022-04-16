import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const {name,price,img,description} = service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>{price}/<small>month</small></h4>
            <p>{description}</p>
            <button className='btn btn-primary w-100'>Buy</button>
        </div>
    );
};

export default Service;