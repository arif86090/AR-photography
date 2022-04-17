import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 mt-5'>
                    <div className="q-1">
                        <h4>Difference between authorization and authentication?</h4>
                        <p> Authorization determines what resources a user can access and Authentication	Authorization
Authentication verifies who the user is. authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.</p>

                    </div>
                </div>
                <div className='col-md-4 mt-5'>
                    <div className="q-1">
                        <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                        <p> Firebase manages all data real-time in the database. So, the exchange of data to and for from the database is easy and quick.if you are looking to develop mobile apps such as live streaming, chat messaging, etc.Password-based authentication,. Single sign-on, Certificate-based authentication,. Token-based authentication,Biometric authentication many kinds of authentication</p>

                    </div>
                </div>
                <div className='col-md-4 mt-5'>
                    <div className="q-1">
                        <h4>What other services does firebase provide other than authentication?</h4>
                        <p> Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;