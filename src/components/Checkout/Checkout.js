import React from 'react';
import './Checkout.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {

    const handelcheckout = event =>{
        toast("Thanks for your valuable order.");
        event.preventDefault();
    }
    return (
        <div className='container'>
           
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6 mt-5 ' >
                <h2 className='checkout-header'>Welcome to <span> AR-PHOTOGRAPHY</span></h2>
                <p className='text-center mb-4 mt-2'>Fill the blank form and confirm your order!</p>

  <form onSubmit={handelcheckout} className='checkout-form' >

<div className="mb-3">
<label for="name"className="form-label">Name</label>
<input type="text"className="form-control" placeholder='Enter your name' required/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1"className="form-label">Email </label>
<input type="email"className="form-control" placeholder='Enter your email' required/>
</div>
<div className="mb-3">
<label for="address"className="form-label">Address </label>
<input type="text"className="form-control" placeholder='Enter your address' required/>
</div>
<div className="mb-3">
<label for="address"className="form-label">Phone number </label>
<input type="text"className="form-control" placeholder='Enter your phone number' required/>
</div>
<ToastContainer/>
<button  type="submit"className="checkout-btn py-2">Submit</button>
</form>
                </div>
                <div className='col-md-3'></div>
            </div>
    
        </div>
    );
};

export default Checkout;