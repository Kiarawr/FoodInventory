import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  StatusBar,
} from 'react-native';
import {
    Icon,
} from 'react-native-elements';

import HomeScreen from '../screens/HomeScreen';
import ListStack from './ListStack';
import ScanScreen from '../screens/ScanScreen';

const Tab = createBottomTabNavigator();

function AppStack() {
  console.log("app stack");
    return(
      <React.Fragment>
       <StatusBar barStyle="light-content" backgroundColor="#121212"/>

       <Tab.Navigator tabBarOptions = {
         {activeTintColor: "#7C4AF0", 
         style: {backgroundColor: '#000000', borderTopColor: "transparent"}}
        }>

        <Tab.Screen name = "Home" component = {HomeScreen} options = {{
          tabBarIcon: ({focused}) => {
            return <Icon name="home" type="ionicon" color = {focused ? "#7C4AF0" : "#b6c1cd"}/>
          }
        }}/>

        <Tab.Screen name="List" component = {ListStack} options = {{
          tabBarIcon: ({focused}) => {
            return <Icon name="create" type="ionicon" color = {focused ? "#7C4AF0" : "#b6c1cd"}/>
          }
        }} />

        <Tab.Screen name="Scan" component = {ScanScreen} options = {{
          tabBarIcon: ({focused}) => {
            return <Icon name="qr-code" type="ionicon" color = {focused ? "#7C4AF0" : "#b6c1cd"}/>
          }
        }} />
      </Tab.Navigator>
      </React.Fragment>
    );
}

export default AppStack;


