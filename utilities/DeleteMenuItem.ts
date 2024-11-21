type MenuItem = {
    name: string;
  };
  
  export const deleteMenuItem = (
    itemName: string,
    menu: MenuItem[],
    setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>
  ) => {
    const updatedMenu = menu.filter(item => item.name !== itemName);
    setMenu(updatedMenu);
  };
  