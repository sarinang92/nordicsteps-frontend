import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './UserMenu.css'; // Import the CSS file
import userIcon from '../../assets/user.svg';

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);

  return (
    <div
      className="user-menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to="/account">
        <img src={userIcon} alt="User Icon" className="user-icon" />
      </Link>
      
      {isMenuOpen && (
        <ul className="dropdown-menu">
          <li className="menu-item">
            <Link to="/account" className="menu-link">Profile</Link> 
          </li>
          <li className="menu-item">
            <Link to="/orders" className="menu-link">My Orders</Link> 
          </li>
          <li className="menu-item">
            <Link to="/logout" className="menu-link">Logout</Link> 
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
