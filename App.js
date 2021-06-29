import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import Tabs from './navigation/AppStack';
import Providers from "./navigation/index";
import AuthStack from "./navigation/AuthStack";
import AppStack from './navigation/AppStack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

/*
function App() {
  return (
    <SignUpScreen/>
  );
}

export default App;
*/


function App() {
  return <Providers/>;
}

export default App;


/*
function App(){
  return(
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}

export default App;

*/
/*
 import 'react-native-gesture-handler';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   Button,
   useColorScheme,
   View,
   Pressable,
 } from 'react-native';
 
 import {
   Icon,
   SearchBar,
 } from 'react-native-elements';

 const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    paddingVertical: 5,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#8bafd6",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 12,
    color: "white",
    letterSpacing: 0.25,
    textAlign: "center",
  }
 });
 
 export default App;
 */