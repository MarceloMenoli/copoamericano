import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfilePage from '../pages/ProfilePage';
import HomePage from '../pages/HomePage';
import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 140,
          right: 140,
          elevation: 0,
          borderRadius: 50,
          height: 65,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 20,
          backgroundColor: '#0d101b',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
                backgroundColor: focused ? '#fff' : '#0d101b',
                height: 60,
                width: 60,
                borderRadius: 30,
              }}>
              <Feather
                name="home"
                color={focused ? '#0d101b' : '#fff'}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
                backgroundColor: focused ? '#fff' : '#0d101b',
                height: 60,
                width: 60,
                borderRadius: 30,
              }}>
              <Feather
                name="map"
                color={focused ? '#0d101b' : '#fff'}
                size={size}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  selected: {
    backgroundColor: '#000', // cor do preenchimento ao ser selecionado
  },
});

export default MainTabs;
