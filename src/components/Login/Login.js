import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle  } from 
'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css';
import google from '../../images/google.png'
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const [forget,setForget]=useState(false);
    const [forgetPassword,setForgrtPassword]=useState('');
   
    const [signInWithGoogle,user2] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


// RequredAuth     
const navigate =useNavigate();
const location=useLocation();
const from =location?.state?.from?.pathname || '/';


      if(user){
        navigate(from,{relace:true});
       
    }
    if(user2){
        navigate(from,{relace:true});

    }

    const handelEmail = event =>{
        setEmail(event.target.value);
    }
    const handelPassword = event => {
        setPassword(event.target.value);
    }

    const fromLogin = event =>{
        signInWithEmailAndPassword(email,password)
        event.preventDefault();

    }


    const loginGoogle = () => {
        signInWithGoogle();
         
    }

    const handelForgetPassword = event =>{
        setForgrtPassword(event.target.value);
    }
    
const handelForgetPassEmail = () =>{
    sendPasswordResetEmail(forgetPassword);
    if(forgetPassword){
        toast("Check your Email");
    }
    else{
        toast("Please enter your  Email");
    }
    
    
}




    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <div className='from-container'>
                        <h2>Login</h2>
                        <form onSubmit={fromLogin}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={handelEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                               
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input onBlur={handelPassword} type="password" className="form-control" id="exampleInputPassword1" required />
                            </div>
                            <p className='text-danger'>{error?.message}</p>

                            

                            <button type="submit" className="submit-btn">{loading ?  'loding..' : 'Login' }</button>

                         </form>

                         
                        <button onClick={loginGoogle} className='google-btn p-2 w-100 text-dark fw-bold mt-3'>
                            <span>
                                <img className='g-img' src={google} alt="" />
                               
                            </span>
                            login with google
                        </button>

                         <button className=' forgetpass-btn p-2 d-inline-block fw-bold mt-2' onClick={() =>setForget(!forget)}>Forget password</button>

                        <div className={`py-4 ${forget ? 'd-block' : 'd-none'}`}>
                            <input onBlur={handelForgetPassword} type="email" className="form-control" placeholder='Enter your Email' />
                            <button onClick={handelForgetPassEmail} className='google-btn p-2 px-3 d-inline-block  fw-bold mt-3'>{sending ? 'Sending..' :'sent'}</button> 
                            <ToastContainer/>
                        </div>



 

                         <p className='mt-2'>
                             New to Ar-photography? <Link className='signup-link' to='/signup'>Create an account</Link>
                         </p>
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    );
};

export default Login;