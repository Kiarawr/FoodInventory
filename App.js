/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React from 'react';
 //import type {Node} from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
 
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
 
 const Stack = createStackNavigator();
 const Tab = createBottomTabNavigator();
 


 function App() {
   return (
     <NavigationContainer>
       <Tab.Navigator>

        <Tab.Screen name = "Home" component = {HomeScreen} options = {{
          tabBarIcon:() => (
          <Icon name="home-outline" type="ionicon"/>
          )
        }}/>
        <Tab.Screen name="List" component = {ListScreen} />

       </Tab.Navigator>
     </NavigationContainer>
   );
 }
 
 function HomeScreen({navigation}) {
   const handlePress = () => navigation.navigate('List')

   return (
     <React.Fragment>
      <SafeAreaView style = {styles.container}>
        <Text>Welcome</Text>
      
        <Pressable style = {styles.button} onPress={handlePress}>
          <Text style = {styles.buttonText}>LIST</Text>
        </Pressable>

      </SafeAreaView>
     </React.Fragment>
   );
 }
 
 function ListScreen({navigation}) {
   return (
    <SafeAreaView style = {styles.container}>
     <Text> put list here</Text>
    </SafeAreaView>
   )
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 100,
    height: 30,
    paddingVertical: 5,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#7EA3CC",
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