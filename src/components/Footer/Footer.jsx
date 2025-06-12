import React from 'react';
import './Footer.css'; // Import the CSS file
import Klarna from '../../assets/Klarna.png'; 
import Maestro from '../../assets/Maestro.png'; 
import Mastercard from '../../assets/mastercard.png'; 
import Visa from '../../assets/Visa.png'; 
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="payment-logos">
        <img src={Visa} alt="Visa" />
        <img src={Mastercard} alt="Mastercard" />
        <img src={Klarna} alt="Klarna" />
        <img src={Maestro} alt="Maestro" />
        
      </div>

      <p>&copy; 2025 Nordic Steps. All rights reserved.</p>

        <ul className="footer-links">
        <li><Link to="/about" className="footer-link">About Us</Link></li>
        <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
        <li><Link to="/faq" className="footer-link">FAQ</Link></li>
        <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;
