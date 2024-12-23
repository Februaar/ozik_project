import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

// eslint-disable-next-line react/prop-types
export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const openMenu = () => setIsMenuOpen(true); // 강제로 열어야 할 경우우

  return (
    <MenuContext.Provider
      value={{ isMenuOpen, toggleMenu, closeMenu, openMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMenu = () => useContext(MenuContext);
