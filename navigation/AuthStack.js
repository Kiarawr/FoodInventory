import React, {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import {
  StatusBar,
} from 'react-native';


import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  console.log("auth stack");
    return(
        <Stack.Navigator initialRouteName= "Login">
            <Stack.Screen name = "Login" component = {LoginScreen}/>
            <Stack.Screen name = "SignUp" component = {SignUpScreen}/>
        </Stack.Navigator>
    );
}

