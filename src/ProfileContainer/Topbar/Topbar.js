import React, {useState} from 'react';
import { Menu } from '../Home/Menu/Menu';


import './Topbar.css';

 function Topbar(props) 
{
    return (
        <div className='topbar'>
            <div className='wrapper'>
                <div className='right'>
                <a href='#Home' className="logo">{props.title}</a>
                    <div className='itemcontainer'>
                    <i className='fa fa-phone'></i>
                        <span>+91 8763940720</span>
                    </div>

                    <div className='itemcontainer'>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span>purav.achary@gmail.com</span>
                    </div>

                </div>
                    <div className='left'>
                    
                    <div className="menu">
                
        
            <ul >
                            <li>
                                <a href='#Home'>Home</a>
                            </li>
                            <li>
                                <a href='#portfolio'>Work</a>
                            </li>
                            
                            <li>
                                <a href='#aboutme'>About Me</a>
                            </li>

                            <li>
                                <a href='#contact'>Contact</a>
                            </li>
                            
                        </ul>

                        
        </div>

                   <div className='menu-icon' >
                   <img src='menu.svg'></img>
                   
                    </div>
                    </div>
                
            </div>
        </div>
    );
}
export default Topbar;
// Topbar.propTypes = {

//     // eslint-disable-next-line no-undef
//     title: propTypes.string,
    
// }

// Topbar.defaultProps = {

//     title: "set title here",

// }
