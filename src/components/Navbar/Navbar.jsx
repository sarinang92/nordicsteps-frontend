import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const navLinks = ['Men', 'Women', 'Kids', 'Sale'];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navLinks.map((link, index) => (
          <li key={`${link}-${index}`} className="nav-item">
            <Link to={`/${link.toLowerCase()}`} className="nav-link">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
