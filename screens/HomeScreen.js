import React, { useContext } from 'react';
import { SafeAreaView, Text, StyleSheet, Button} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { AuthContext } from '../navigation/AuthProvider';



function HomeScreen() {
  const { logout } = useContext(AuthContext);
  console.log("home");

    return (
      <React.Fragment>
       <SafeAreaView style = {styles.container}>
 
         <SafeAreaView style = {styles.header}>
           <Text style = {styles.headerTitle}> Home </Text>
         </SafeAreaView>
 
         <SafeAreaView style = {styles.calendarContainer}>
           <Calendar style = {styles.calendar} theme = {{ 
             calendarBackground: "white",
             arrowColor: "#8bafd6",
             dayTextColor: "#2d4150",
             monthTextColor: "black",
             todayTextColor: "#8bafd6",
           }}/>
         </SafeAreaView>

         <Button 
            title = "Log Out"
            onPress = {() => logout()}
         />
 
       </SafeAreaView>
      </React.Fragment>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      height: 35,
      backgroundColor: "white",
      borderBottomColor: "#eeeeee",
      borderBottomWidth: 2,
  
      alignItems: "center",
    },
    headerTitle: {
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
});