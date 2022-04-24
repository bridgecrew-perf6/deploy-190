import React from 'react';
import Topbar from '../Topbar/Topbar';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';

import "./Home.css";
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import { Menu } from './Menu/Menu';



export default function Home() {
    return (
        <div className='home-container' id='Home'>
        <Topbar title= "Purav."></Topbar>
        <Profile></Profile>
        <Footer></Footer>  
        

        </div>
    );
}

