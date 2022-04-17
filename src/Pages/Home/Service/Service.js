import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    } 
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>{price}/<small>month</small></h5>
            <p>{description}</p>
            <button onClick={()=>navigateToServiceDetail(id)} className='btn w-50'>Start Now</button>
        </div>
    );
};

export default Service;