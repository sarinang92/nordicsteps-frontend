import React, { useState, useEffect } from 'react';
import './UserInfo.css';

const UserInfo = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const [passwords, setPasswords] = useState({
    oldPassword: '',
    password: '',
    confirmPassword: ''
  });

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:8080/api/v1/users/${userId}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to load user data");
        return res.json();
      })
      .then(data => {
        setUser({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          address: data.address
        });
      })
      .catch(err => console.error(err.message));
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (['password', 'confirmPassword', 'oldPassword'].includes(name)) {
      setPasswords(prev => ({ ...prev, [name]: value }));
    } else {
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/api/v1/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to update user info");
        alert('User info updated!');
      })
      .catch(err => alert(err.message));
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (passwords.password !== passwords.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    fetch('http://localhost:8080/api/auth/change-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        oldPassword: passwords.oldPassword,
        newPassword: passwords.password
      })
    })
      .then(res => {
        if (!res.ok) throw new Error('Password change failed');
        return res.json();
      })
      .then(data => {
        alert(data.message || 'Password updated!');
        setPasswords({ oldPassword: '', password: '', confirmPassword: '' });
      })
      .catch(err => alert(err.message));
  };

  return (
    <div className="user-info-container">
      <h2>Profile</h2>

      <form onSubmit={handleSubmit} className="user-info-form">
        <label>
          First Name:
          <input type="text" name="firstName" value={user.firstName} onChange={handleChange} />
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" value={user.lastName} onChange={handleChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </label>

        <label>
          Mobile:
          <input type="tel" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} />
        </label>

        <label>
          Address:
          <input type="text" name="address" value={user.address} onChange={handleChange} />
        </label>

        <button type="submit">Submit Changes</button>
      </form>

      <form onSubmit={handlePasswordChange} className="user-info-form password-section">
        <h2>Password Management</h2>

        <label>
          Current Password:
          <input
            type="password"
            name="oldPassword"
            value={passwords.oldPassword}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          New Password:
          <input
            type="password"
            name="password"
            value={passwords.password}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Confirm New Password:
          <input
            type="password"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default UserInfo;
