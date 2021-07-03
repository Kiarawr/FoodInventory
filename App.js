import React from 'react';
import Providers from "./navigation/index";
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';
import { default as theme } from './theme.json'; // <-- Import app theme
import { default as mapping } from './mapping.json'; // <-- Import app mapping


function App() {
  return (
    <ApplicationProvider 
      {...eva} 
      theme={{ ...eva.dark, ...theme}}
      customMapping={mapping}>
        <Providers/>
    </ApplicationProvider>
  );
}

export default App;


/*
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