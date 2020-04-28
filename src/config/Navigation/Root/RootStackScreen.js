import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../../pages/Auth/SplashScreen';
import SignInScreen from '../../../pages/Auth/SignInScreen';
import SignUpScreen from '../../../pages/Auth/SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
