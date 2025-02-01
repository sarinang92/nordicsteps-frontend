import React from 'react';
import './Header.css'; // Import the CSS file
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx'; // Import the ShoppingCart component
import UserMenu from '../UserMenu/UserMenu.jsx'; // Import the UserMenu component

const Header = ({ logoSrc }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoSrc} alt="Shoe Store Logo" className="logo" />
        <h1 className="tagline">NORDIC STEPS</h1>
      </div>
      <div className="user-controls">
        <ShoppingCart />
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
