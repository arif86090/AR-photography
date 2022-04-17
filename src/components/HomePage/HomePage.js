import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../service/Service';
import './Homepage.css'


const HomePage = () => {

    const [services,setServices]=useState([]);

        useEffect(() => {
            fetch('products.json')
            .then(res => res.json())
            .then(data => setServices(data))
        },[])

    return (
        <div className='container'>

           
            <h2 className='service-header'>Photography <span>Services</span></h2>
            <div className='services'>
            {
              services.map(service => <Service
              key={service.id}
              service={service}
              ></Service>)
            }
            </div>
        </div>
    );
};

export default HomePage;