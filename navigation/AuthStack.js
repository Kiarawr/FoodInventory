import React, {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  StatusBar,
} from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return(
    <Stack.Navigator initialRouteName= "OnBoarding" screenOptions = {{ headerShown: false}}>
      <Stack.Screen name = "OnBoarding" component = {OnBoardingScreen}/>
      <Stack.Screen name = "Login" component = {LoginScreen}/>
      <Stack.Screen name = "SignUp" component = {SignUpScreen}/>
    </Stack.Navigator>
  );
}

