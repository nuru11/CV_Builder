import React from 'react';
import './Footer.css'; // Optional, for styling

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </footer>
    );
};

export default Footer;