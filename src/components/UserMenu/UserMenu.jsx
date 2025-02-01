import React, { useState } from 'react';
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
      <img src={userIcon} alt="User Icon" className="user-icon" />
      {isMenuOpen && (
        <ul className="dropdown-menu">
          <li className="menu-item">
            <a href="#profile" className="menu-link">Profile</a>
          </li>
          <li className="menu-item">
            <a href="#orders" className="menu-link">My Orders</a>
          </li>
          <li className="menu-item">
            <a href="#logout" className="menu-link">Logout</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
