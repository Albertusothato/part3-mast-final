import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveMenuToStorage = async (menu: any) => {
  try {
    const menuJSON = JSON.stringify(menu);
    await AsyncStorage.setItem('menu', menuJSON);
  } catch (error) {
    console.error('Error saving menu:', error);
  }
};

export const loadMenuFromStorage = async () => {
  try {
    const menuJSON = await AsyncStorage.getItem('menu');
    return menuJSON ? JSON.parse(menuJSON) : [];
  } catch (error) {
    console.error('Error loading menu:', error);
    return [];
  }
};
