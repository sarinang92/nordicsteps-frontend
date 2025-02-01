import React from 'react';
import './ShoppingCart.css';
import shoppingCartIcon from '../../assets/shoppingcart.svg'; // Import the SVG correctly


const ShoppingCart = () => {
  return (
    <div className="cart-icon">
      <img src={shoppingCartIcon} alt="Shopping Cart" /> 
    </div>
  );
};

export default ShoppingCart; // Correct the export statement typo
