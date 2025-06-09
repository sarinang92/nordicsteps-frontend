import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserMenu.css';
import userIcon from '../../assets/user.svg';

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls dropdown visibility
  const navigate = useNavigate();

  // Dynamically check if user is logged in by checking localStorage
  const isLoggedIn = !!localStorage.getItem('userId');

  // Show menu on hover
  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);

  // Click on user icon:
  // - If logged in, toggle dropdown
  // - If not logged in, redirect to login page
  const handleIconClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      setIsMenuOpen(prev => !prev);
    }
  };

  // Clear session and local storage on logout and redirect to login
  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <div
      className="user-menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* User icon image */}
      <img
        src={userIcon}
        alt="User Icon"
        className="user-icon"
        onClick={handleIconClick}
        style={{ cursor: 'pointer' }}
      />

      {/* Dropdown menu visible only when logged in and menu is open */}
      {isMenuOpen && isLoggedIn && (
        <ul className="dropdown-menu">
          <li className="menu-item">
            <span className="menu-link" onClick={() => navigate('/account')}>Profile</span>
          </li>
          <li className="menu-item">
            <span className="menu-link" onClick={() => navigate('/account/orders')}>My Orders</span>
          </li>
          <li className="menu-item">
            <span className="menu-link" onClick={handleLogout}>Logout</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
