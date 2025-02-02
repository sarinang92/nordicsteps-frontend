import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './ShoppingCart.css';
import shoppingCartIcon from '../../assets/shoppingcart.svg'; // Import the SVG correctly

const ShoppingCart = () => {
  return (
    <div className="cart-icon">
      <Link to="/shopping-cart"> {/* Wrap the image with a Link */}
        <img src={shoppingCartIcon} alt="Shopping Cart" />
      </Link>
    </div>
  );
};

export default ShoppingCart; // Correct the export statement typo
