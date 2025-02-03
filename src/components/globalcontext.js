import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User authentication state
  const [cart, setCart] = useState([]); // Shopping cart state
  const [preferences, setPreferences] = useState({ theme: "light" }); // User preferences

  return (
    <GlobalContext.Provider value={{ user, setUser, cart, setCart, preferences, setPreferences }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
