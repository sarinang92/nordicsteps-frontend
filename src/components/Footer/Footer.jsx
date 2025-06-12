import React from 'react';
import './Footer.css'; // Import the CSS file
import Klarna from '../../assets/Klarna.png'; 
import Maestro from '../../assets/Maestro.png'; 
import Mastercard from '../../assets/mastercard.png'; 
import Visa from '../../assets/Visa.png'; 

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
        <li><a href="#aboutus" className="footer-link">About Us</a></li>
        <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
        <li><a href="#terms" className="footer-link">Terms of Service</a></li>
        <li><a href="#contact" className="footer-link">Contact Us</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
