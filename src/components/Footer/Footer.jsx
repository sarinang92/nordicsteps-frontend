import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Nordic Steps. All rights reserved.</p>
      <ul className="footer-links">
        <li>
          <a href="#privacy" className="footer-link">Privacy Policy</a>
        </li>
        <li>
          <a href="#terms" className="footer-link">Terms of Service</a>
        </li>
        <li>
          <a href="#contact" className="footer-link">Contact Us</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
