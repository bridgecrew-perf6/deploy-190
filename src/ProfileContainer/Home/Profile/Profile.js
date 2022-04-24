import { Button } from 'bootstrap';
import React from 'react';
import './Profile.css';

export default function Profile() {

   
    return (
        
        <div className='profile-container'>
        
            <div className='profile-parent'>
                
                    <div className='colz'>
                    <div className='colz-icon'>
                       <a href='https://www.linkedin.com/in/purav-achary-59685a196/'>
                           <i className='fa fa-linkedin'></i>
                       </a>              
                       <a href='https://www.instagram.com/purav_achary/'>
                           <i className='fa fa-instagram'></i>
                       </a>              
                    </div>
                    
                    </div>
                 <div className='profile-details'>
                 <span className='primary-text'>
                     {" "}
                     Hello, I'm <span className='highlighted-text'>Purav Achary</span>
                 </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>{""}
                    <h1>
                     UI/UXdesigner    
                     </h1>
                    <span className='profile-role-tagline'>
                        knack of designing web & mobile application.
                    </span>
                    </span>
                </div>

                <div className='profile-options'>
                    <button className='btn primary-btn'>
                    {""}
                    Hire Me{" "}
                    </button>
                    <a href='https://drive.google.com/file/d/1YLrhGfM6p84ZbAxmt1LbxXxxEzQAThE7/view?usp=sharing'>
                        <button className='btn highlighted-btn'> Get Resume</button>
                    </a>
                </div>
            </div> 

            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    );
}

