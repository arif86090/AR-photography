import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = ({service}) => {
   const{name,img,price,text}=service;
    return (
        <div>
          <div className='service-card'>
            <img src={img} className='img-fluid' alt="" />
            <h4>{name}</h4>
            <h6>Per-hours= {price} <span>BDT</span> </h6>
            <p>{text}</p>
            <button><Link to='/checkout'>Confirm Order</Link></button>
          </div>
        </div>
    );
};

export default Service;