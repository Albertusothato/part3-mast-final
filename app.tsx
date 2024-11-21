import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import EnterScreen from './screens/EnterScreen';
import ViewScreen from './screens/ViewScreen';
import ViewScreen2 from './screens/ViewScreen2';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Enter" component={EnterScreen} />
        <Tab.Screen name="View (Customer)" component={ViewScreen} />
        <Tab.Screen name="View (Chef)" component={ViewScreen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
