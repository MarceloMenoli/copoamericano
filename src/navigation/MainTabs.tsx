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
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 90,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Feather name="home" color={color} size={size} />
              <Text style={{color: color, fontSize: 15}}>Home</Text>
            </View>
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Feather name="map" color={color} size={size} />
              <Text style={{color: color, fontSize: 15}}>Localização</Text>
            </View>
          ),
          tabBarLabel: '',
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
