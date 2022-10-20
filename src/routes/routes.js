import React from 'react';
import {StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home/home';
import Category from '../pages/Category/category';
import SignUp from '../pages/SignUp/signUp';
import Splace from '../pages/Splace/splace';
import Profile from '../pages/Profile/profile';
import Settings from '../pages/Settings/settings';



import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();
const isTabBarVisible = (route) => {
  const routeName = route.state
      ? route.state.routes[route.state.index].name
      : (route.params ? route.params.screen : 'HomeScreen');
  return !['HideScreen1', 'HideScreen2'].includes(routeName);
};
const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({tabBarVisible: isTabBarVisible(route)})}
        initialRouteName="Home"
        activeColor="#312DA4"
        barStyle={{ backgroundColor: '#312DA4' }}
      >
        <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color='#312DA4' size={35} />
          ),
        }}
        />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: false,
          tabBarLabel: 'Categoria',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-grid" color='#312DA4' size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarLabel: 'configurações',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color='#312DA4' size={35} />
          ),
        }}
      />

<Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color='#312DA4' size={35} />
          ),
        }}
      />
       
      </Tab.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Routes;