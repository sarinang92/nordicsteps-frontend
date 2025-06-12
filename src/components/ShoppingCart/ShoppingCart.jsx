import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';
import shoppingCartIcon from '../../assets/shoppingcart.svg';

const ShoppingCart = () => {
  return (
    <div className="cart-icon">
      <Link to="/cart">
        <img src={shoppingCartIcon} alt="Shopping Cart" />
      </Link>
    </div>
  );
};

export default ShoppingCart;
