import React from 'react';
import './Header.css'; // Make sure to create this CSS file

import Skywaylogo from "../image_placeholder/skywayimg.jpeg"
import ntechlogo from "../image_placeholder/ntechlogo.png"

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={ntechlogo} alt="Your Logo" className="logo" />
               
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="/a">Home</a></li>
                    <li><a href="/list">Applicants</a></li>
                    <li><a href="/list">Login</a></li>
                    <li><a href="/setting">Setting</a></li>
                </ul>
            </nav>


                <div>
                <img src={Skywaylogo} alt="Client Logo" className="client-logo" />
                </div>
            
        </header>
    );
};

export default Header;