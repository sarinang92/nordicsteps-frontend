import React, { useState } from 'react';
import './UserInfo.css';

const UserInfo = () => {
  const [user, setUser] = useState({
    name: 'Nordic User',
    email: 'nordic@example.com',
    phone: '+47 123 45 678',
    address: 'Skomakerveien 12, Oslo, Norway',
  });

  const [passwords, setPasswords] = useState({
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'password' || name === 'confirmPassword') {
      setPasswords(prev => ({ ...prev, [name]: value }));
    } else {
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('User info updated!');
    // You could send user data to an API here
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (passwords.password !== passwords.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    alert('Password updated!');
    // You could send password update to an API here
  };

  return (
    <div className="user-info-container">
      <h2>Profile</h2>

      <form onSubmit={handleSubmit} className="user-info-form">
        <label>
          Name:
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </label>

        <label>
          Mobile:
          <input type="tel" name="phone" value={user.phone} onChange={handleChange} />
        </label>

        <label>
          Address:
          <input type="text" name="address" value={user.address} onChange={handleChange} />
        </label>

        <button type="submit">Submit Changes</button>
      </form>

      {/* 👇 Password section below submit */}
      <form onSubmit={handlePasswordChange} className="user-info-form password-section">
        <h3>Change Password</h3>

        <label>
          New Password:
          <input
            type="password"
            name="password"
            value={passwords.password}
            onChange={handleChange}
          />
        </label>

        <label>
          Confirm New Password:
          <input
            type="password"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default UserInfo;
