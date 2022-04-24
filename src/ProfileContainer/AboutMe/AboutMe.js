import React from 'react';
import img7 from '../../assets/purav.png'
import './AboutMe.css'

function AboutMe() {
    return (
        <div className='aboutme' id='aboutme'>
        <h1>About Me</h1>
            <div className='about-container'>
            <div className='imagebg'>
                <div className='image'>
                <img src={img7}/>
                    <div className='name'> I'm <b>Purav Achary</b> , <br></br>
                        <h2>UI/UX Designer</h2>

                        <span>I am a hard-working person .where I can learn more and grow with the organization. Also I am looking forward to be a part of the industry where I can utilize my knowledge and skills. Apart from this, want to learn new things as it is very necessary for me to become successful. To succeed in an environment of growth and excellence and earn a job which provides me job satisfaction and self development and help me achieve personal as well as organizational goals.</span>
                    </div>

                    <div className='icons'>
                    <a href=''>
                    <i className="fa fa-dribbble"></i>
                    </a>
                    <a href=''>
                    <i className="fa fa-behance"></i>
                    </a>
                    
                    <a href='https://www.instagram.com/purav_achary/'>
                           <i className='fa fa-instagram'></i>
                       </a>

                    <a href='https://www.linkedin.com/in/purav-achary-59685a196/'>
                           <i className='fa fa-linkedin'></i>
                       </a> 
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;