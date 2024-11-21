import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import EnterScreen from '../screens/EnterScreen';
import ViewScreen from '../screens/ViewScreen';
import ViewScreen2 from '../screens/ViewScreen2';
import TabIcon from '../components/TabIcon';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ tabBarIcon: (props) => <TabIcon name="login" {...props} /> }}
      />
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarIcon: (props) => <TabIcon name="home" {...props} /> }}
      />
      <Tab.Screen 
        name="Enter" 
        component={EnterScreen} 
        options={{ tabBarIcon: (props) => <TabIcon name="edit" {...props} /> }}
      />
      <Tab.Screen 
        name="View (Customer)" 
        component={ViewScreen} 
        options={{ tabBarIcon: (props) => <TabIcon name="eye" {...props} /> }}
      />
      <Tab.Screen 
        name="View (Chef)" 
        component={ViewScreen2} 
        options={{ tabBarIcon: (props) => <TabIcon name="chef-hat" {...props} /> }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
