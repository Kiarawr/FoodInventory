import React from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';

function ListScreen({navigation}) {
    return (
     <SafeAreaView style = {styles.container}>
 
       <SafeAreaView style = {styles.header}>
           <Text style = {styles.headerTitle}> List </Text>
       </SafeAreaView>
 
     </SafeAreaView>
    )
}

export default ListScreen;

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
      fontFamily: "avenir",
      fontSize: 16,
    }
});