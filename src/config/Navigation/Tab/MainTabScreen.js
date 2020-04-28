import React from 'react';
import {View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../../../pages/Home';
import Scene1 from '../../../pages/Scene1';
import Scene2 from '../../../pages/Scene2';
import Scene3 from '../../../pages/Scene3';
import Scene3Detail from '../../../pages/Scene3Detail';

const HomeStack = createStackNavigator();
const Scene1Stack = createStackNavigator();
const Scene2Stack = createStackNavigator();
const Scene3Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
//const Tab = createBottomTabNavigator();

const screenOpt = {
  headerStyle: {
    backgroundColor: '#009387',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Scene1"
      component={Scene1Screen}
      options={{
        tabBarLabel: 'Scene1',
        tabBarColor: '#93093f',
        tabBarIcon: ({color}) => (
          <Icon name="ios-contact" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Scene2"
      component={Scene2Screen}
      options={{
        tabBarLabel: 'Scene 2',
        tabBarColor: '#559368',
        tabBarIcon: ({color}) => (
          <Icon name="ios-document" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Scene3"
      component={Scene3Screen}
      options={{
        tabBarLabel: 'Scene3',
        tabBarColor: '#782993',
        tabBarIcon: ({color}) => (
          <Icon name="ios-eye" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{headerStyle: {
          backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
      },}}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home Screen',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const Scene1Screen = ({navigation}) => (
  <Scene1Stack.Navigator screenOptions={{headerStyle: {
          backgroundColor: '#93093f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
      },}}>
    <Scene1Stack.Screen
      name="Scene1"
      component={Scene1}
      options={{
        title: 'Scene1 Screen',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </Scene1Stack.Navigator>
);

const Scene2Screen = ({navigation}) => (
  <Scene2Stack.Navigator screenOptions={{headerStyle: {
          backgroundColor: '#559368',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
      },}}>
    <Scene2Stack.Screen
      name="Scene2"
      component={Scene2}
      options={{
        title: 'Scene2 Screen',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </Scene2Stack.Navigator>
);

const Scene3Screen = ({navigation}) => (
  <Scene3Stack.Navigator screenOptions={{headerStyle: {
          backgroundColor: '#782993',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
      },}}>
    <Scene3Stack.Screen
      name="Scene3"
      component={Scene3}
      options={{
        title: 'Scene3 Screen',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <Scene3Stack.Screen
      name="Scene3Detail"
      component={Scene3Detail}
      options={{
        title: 'Scene3 Screen Detail',
        headerBackTitleVisible: false,
      }}
    />
  </Scene3Stack.Navigator>
);
