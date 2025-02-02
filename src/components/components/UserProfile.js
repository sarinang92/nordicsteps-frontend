import React, { useEffect, useState } from 'react';
import { fetchUserProfiles } from '../services/apiService';

const UserProfile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserProfiles().then(setUsers);
  }, []);

  return (
    <div>
      <h2>User Profiles</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
