import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

// eslint-disable-next-line react/prop-types
export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMenu = () => useContext(MenuContext);
