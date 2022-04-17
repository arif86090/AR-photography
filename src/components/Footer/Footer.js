import React from 'react';
import gallery from '../../images/gallery.jpg'
import './Footer.css'

const Footer = () => {
    
    return (

        <div className='bg-dark py-4 mt-5'>
          <div className='container'>
          <div className='row '>
            <div className='col-md-4 mt-4'>
                <div className='footer-card'>
                    <h4>About</h4>
                    <p>As well as showing the Best Wedding Photographers in Bangaldesh in our directory you can also browse through tips and advice on how to choose a photographer, questions to ask them and things to consider when looking at photos and photography styles</p>
                    <button>Read more</button>
                </div>
            </div>
            <div className='col-md-4 mt-4'>
            <div className='footer-card contact'>
                    <h4>Contact</h4>

                    <h6>Phone:</h6>
                    <p>+880150146389</p>
                    <h6>Email:</h6>
                    <p>aharif281@gmail.com</p>
                    <h6>Address</h6>
                    <p>Mirpur,Dhaka,Bangaldesh</p>

                    
                </div>
            </div>
            <div className='col-md-4 mt-4'>
            <div className='footer-card'>
                    <h4>Wedding Gallery</h4>
                    <img src={gallery} className='img-fluid' alt="" />
                    
                </div>
            </div>
           
            </div>
        <div className='py-2 mt-4 text-center text-white'>
           <p>Copyright &copy; 2022 <span className='ar-copy'>AR-PHOTOGRAPHY</span> </p>
         </div>
          </div>
        </div>

      
    );
};

export default Footer;