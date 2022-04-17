import React from 'react';
import myphoto from  '../../images/my.jpg'
import './About.css'


const About = () => {
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-md-6 mt-5 '>
                <div className='about-me'>
                    <h2>HELLO, MY NAME IS <span>MD ARIF HOSSAIN</span></h2>
                    <p>I Have Been Designing And Developing Website For 4 months.i  try my best  to learn this language. daily i am working 8 hours for learning . if i work hard one day i will success.so i can't waste my time any where withuot coading. i have learned html,css,bootstrap,tailwind css, simple javascript and now react js. It Will Be Responsive, Mobile-Friendly.If You Need To Build A Full Complete Website With More Functions And Unque Look For Your Service/Business/Protfolio, Please Contact Me</p>
                    <button>Learn more</button>
                </div>
            </div>
            <div className='col-md-6 mt-5 align-self-center text-center'>
                <img src={myphoto} className='img-fluid' alt="" />
            </div>
            </div>
        </div>
    );
};

export default About;