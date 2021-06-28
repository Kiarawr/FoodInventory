import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  StatusBar,
} from 'react-native';
import {
    Icon,
} from 'react-native-elements';

import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import ScanScreen from './screens/ScanScreen';

const Tab = createBottomTabNavigator();

function Tabs() {
    return(
      <React.Fragment>
       <StatusBar barStyle="dark-content" backgroundColor="white"/>

       <Tab.Navigator tabBarOptions = {{activeTintColor: "#8bafd6"}} >

        <Tab.Screen name = "Home" component = {HomeScreen} options = {{
          tabBarIcon: ({focused}) => {
            return <Icon name="home" type="ionicon" color = {focused ? "#8bafd6" : "#b6c1cd"}/>
          }
        }}/>

        <Tab.Screen name="List" component = {ListScreen} options = {{
          tabBarIcon: ({focused}) => {
            return <Icon name="create" type="ionicon" color = {focused ? "#8bafd6" : "#b6c1cd"}/>
          }
        }} />

        <Tab.Screen name="Scan" component = {ScanScreen} options = {{
          tabBarIcon: ({focused}) => {
            return <Icon name="qr-code" type="ionicon" color = {focused ? "#8bafd6" : "#b6c1cd"}/>
          }
        }} />
      </Tab.Navigator>
      </React.Fragment>

    );
}

export default Tabs;


