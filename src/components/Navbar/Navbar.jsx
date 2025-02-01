import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const navLinks = ['Men', 'Women', 'Kids', 'Sale'];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navLinks.map((link, index) => (
          <li key={`${link}-${index}`} className="nav-item">
            <a href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
