import React from 'react';
import './Footer.css'; // Optional, for styling

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} N-Tech Agent. All rights reserved.</p>
        </footer>
    );
};

export default Footer;