import React from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';

function ScanScreen({navigation}) {
    return (
      <SafeAreaView style = {styles.container}>
  
        <SafeAreaView style = {styles.header}>
          <Text style = {styles.headerTitle}> Scan </Text>
        </SafeAreaView>
  
        <Text> scan or add items </Text>
  
     </SafeAreaView>
    )
}

export default ScanScreen;

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