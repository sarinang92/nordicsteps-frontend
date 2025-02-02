import React, { useEffect, useState } from 'react';
import { fetchMenuItems } from '../services/apiService';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenuItems().then(setMenu);
  }, []);

  return (
    <nav>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
