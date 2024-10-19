import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfilePage from '../pages/ProfilePage';
import DetailsPage from '../pages/DetailsPage';
import HomePage from '../pages/HomePage';

const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
      <Tab.Screen name="Details" component={DetailsPage} />
    </Tab.Navigator>
  );
};

export default MainTabs;
