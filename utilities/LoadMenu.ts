import React, { createContext, useContext, useState } from 'react';

type MenuItem = {
  name: string;
  description: string;
  course: string;
  price: number;
};

type MenuContextType = {
  menu: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

export const addMenuItem = (
  item: MenuItem,
  menu: MenuItem[],
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>
) => {
  setMenu([...menu, item]);
};
