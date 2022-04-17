import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../service/Service';
import './Homepage.css'
import bannar from '../../images/bannar.jpg'



const HomePage = () => {

    const [services,setServices]=useState([]);

        useEffect(() => {
            fetch('products.json')
            .then(res => res.json())
            .then(data => setServices(data))
        },[]);

        const mystyle ={
            backgroundImage:`linear-gradient(#181b1bde,#1b1d1fb5),url(${bannar})` ,
           
           
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center',
            
        }

    return (
        <div >

        <div style={mystyle}>
            <div className='row container'>
                <div className='col-md-8 col-lg-6 py-5'>
                <div className='bannar-text'>
                    <h2><span>AR-PHOTOGRAPHY</span> CAPTURE THE STORY OF YOUR BEAUTIFUL WEDDING DAY.</h2>
                    <p>As well as showing the Best Wedding Photographers in Bangladesh in our directory you can also browse through tips and advice on how to choose a photographer, questions to ask them and things to consider when looking at photos and photography styles. View lots of real weddings with real brides captured by top professionals on our wedding photography blogs.</p> 
                    <button>Read More</button>
                </div>
                </div>
                <div className='col-md-4 col-lg-6'></div>
            </div>
                
        </div>
           
           <div className='container'>
           <h2 className='service-header py-5'>Photography <span>Services</span></h2>
            <div className='services'>
            {
              services.map(service => <Service
              key={service.id}
              service={service}
              ></Service>)
            }
            </div>
           </div>
        </div>
    );
};

export default HomePage;