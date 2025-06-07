import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './UserMenu.css';
import userIcon from '../../assets/user.svg';

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);

  const handleIconClick = () => {
    navigate('/login'); // Navigate to login page
  };

  return (
    <div
      className="user-menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={userIcon}
        alt="User Icon"
        className="user-icon"
        onClick={handleIconClick} // Handle click
        style={{ cursor: 'pointer' }}
      />

      {isMenuOpen && (
        <ul className="dropdown-menu">
          <li className="menu-item">
            <span className="menu-link" onClick={() => navigate('/account')}>Profile</span>
          </li>
          <li className="menu-item">
            <span className="menu-link" onClick={() => navigate('/orders')}>My Orders</span>
          </li>
          <li className="menu-item">
            <span className="menu-link" onClick={() => navigate('/logout')}>Logout</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
