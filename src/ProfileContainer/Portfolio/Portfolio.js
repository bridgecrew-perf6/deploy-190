import React from 'react';
import './Portfolio.css'
import img1 from '../../assets/Flash Liquor.png';
import img2 from '../../assets/Manas.png';
import img3 from '../../assets/wwd.png';
import img4 from '../../assets/synoriq.png';
import img6 from '../../assets/Brochure.png';
import img5 from '../../assets/voyage.png';


function Portfolio() {

    const list = []

    return (
        <div className='portfolio' id='portfolio'>
        <h1>Work</h1>

            <div className='container'>
            <div className='item'>
            <a href='#'>
            <img src = {img1} alt="problem"  width={286} height={192}/>

                <h3>Flash Liquor App</h3>
                </a>
                </div>
                
            <div className='item'>
            <a href='#'>
            <img src = {img2} alt="problem"/>

                <h3>Manas App</h3>
                </a>
                </div>

            <div className='item'>
            <a href='#'>
            <img src = {img3} alt="problem"/>

                <h3>WWD WebPage</h3>
                </a>
                </div>
            <div className='item'>
            <a href='#'>
            <img src = {img4} alt="problem"/>

                <h3>Attendance Record App</h3>
                </a>
                </div>
            <div className='item'>
            <a href='https://www.behance.net/gallery/131890877/Voyage'>
            <img src = {img5} alt="problem"/>

                <h3>Voyage</h3>
                </a>
                </div>
            <div className='item'>
            <a href='#'>
            <img src = {img6} alt="problem"/>

                <h3>Brochure</h3>
                </a>
                </div>
            
            </div>
        </div>
    );
}

export default Portfolio;