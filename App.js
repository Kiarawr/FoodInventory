/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React, {useState, useEffect} from 'react';
 //import type {Node} from 'react';
 import { NavigationContainer, useIsFocused } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 //import { Calendar } from 'react-native-calendars';
 
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
       <Tab.Navigator tabBarOptions = {{activeTintColor: "#7EA3CC"}} >

        <Tab.Screen name = "Home" component = {HomeScreen} options = {{
          tabBarIcon: ({focused}) => {
            return <Icon name="home-outline" type="ionicon" color = {focused ? "#7EA3CC" : "#DDE2E9"}/>
          }
        }}/>

        <Tab.Screen name="List" component = {ListScreen} options = {{
          tabBarIcon: ({focused}) => {
            return <Icon name="create-outline" type="ionicon" color = {focused ? "#7EA3CC" : "#DDE2E9"}/>
          }
        }} />

        <Tab.Screen name="Scan" component = {ScanScreen} options = {{
          tabBarIcon: ({focused}) => {
            return <Icon name="qr-code-outline" type="ionicon" color = {focused ? "#7EA3CC" : "#DDE2E9"}/>
          }
        }} />

       </Tab.Navigator>
     </NavigationContainer>
   );
 }


  
 
 function HomeScreen({navigation}) {
   const handlePress = () => navigation.navigate('List')
   
   /*
   const [currentDate, setCurrentDate] = useState('');

   useEffect(() => {
     var date = new Date().getDate(); //Current Date
     var month = new Date().getMonth() + 1; //Current Month
     var year = new Date().getFullYear(); //Current Year
     setCurrentDate(
       date + '/' + month + '/' + year
     );
   }, []);
   */
 
   return (
     <React.Fragment>
      <SafeAreaView style = {styles.container}>

        <View style = {styles.header}>
          
        </View>
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

 function ScanScreen({navigation}) {
  return (
   <SafeAreaView style = {styles.container}>
    <Text> scan or add items </Text>
   </SafeAreaView>
  )
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 300,
    flexDirection: "row",
    backgroundColor: "#7EA3CC",
    justifyContent: "center",
    alignItems: "center",
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
  },
  navIconFocused: {
    color: "#7EA3CC",
  }
 });
 
 export default App;