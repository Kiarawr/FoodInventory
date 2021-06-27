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
 import { Calendar } from 'react-native-calendars';
 
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
       <Tab.Navigator tabBarOptions = {{activeTintColor: "#8bafd6"}} >

        <Tab.Screen name = "Home" component = {HomeScreen} options = {{
          tabBarIcon: ({focused}) => {
            return <Icon name="home-outline" type="ionicon" color = {focused ? "#8bafd6" : "#b6c1cd"}/>
          }
        }}/>

        <Tab.Screen name="List" component = {ListScreen} options = {{
          tabBarIcon: ({focused}) => {
            return <Icon name="create-outline" type="ionicon" color = {focused ? "#8bafd6" : "#b6c1cd"}/>
          }
        }} />

        <Tab.Screen name="Scan" component = {ScanScreen} options = {{
          tabBarIcon: ({focused}) => {
            return <Icon name="qr-code-outline" type="ionicon" color = {focused ? "#8bafd6" : "#b6c1cd"}/>
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

        <SafeAreaView style = {styles.header}>
          <Text style = {styles.headerTitle}> Food Inventory </Text>
        </SafeAreaView>

        <SafeAreaView style = {styles.calendarContainer}>
          <Calendar style = {styles.calendar} theme = {{ 
            calendarBackground: "white",
            arrowColor: "#8bafd6",
            dayTextColor: "#2d4150",
            monthTextColor: "black",
            todayTextColor: "#8bafd6",
            textMonthFontFamily: "avenir",
            textDayFontFamily: "avenir",
          }}/>
        </SafeAreaView>

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
    height: 50,
    backgroundColor: "white",
    borderBottomColor: "#eeeeee",
    borderBottomWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "avenir",
    fontSize: 16,
  },
  calendarContainer: {
    alignItems: "center",
  },
  calendar: {
    width: 320,
    margin: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 30,
  },
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
  },
  navIconFocused: {
    color: "#8bafd6",
  }
 });
 
 export default App;