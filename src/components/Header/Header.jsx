import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx'; // Import the ShoppingCart component
import UserMenu from '../UserMenu/UserMenu.jsx'; // Import the UserMenu component

const Header = ({ logoSrc }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logoSrc} alt="Shoe Store Logo" className="logo" />
        </Link>
        
        <Link to="/" className="logo-link">
          <h1 className="tagline">NORDIC STEPS</h1>
        </Link>
      </div>
      <div className="user-controls">
        <ShoppingCart />
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
