import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';
import UserMenu from '../UserMenu/UserMenu.jsx';
import searchlogo from '../../assets/SearchLogo.png'; // Your search icon image

const Header = ({ logoSrc }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}`);
      // navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

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

      {/* Search Bar */}
      <form className="header-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" aria-label="Search">
          <img src={searchlogo} alt="Search" className="search-icon" />
        </button>
      </form>

      <div className="user-controls">
        <ShoppingCart />
        <UserMenu />
      </div>

    </header>
  );
};

export default Header;
