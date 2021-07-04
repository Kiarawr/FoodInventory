import React, { useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView, Text, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';



function ListScreen({ navigation }) 
{
  const [items, setItems] = useState([]);

  useEffect(() => {
    const users = firestore()
      .collection('users').doc('test_dummy').onSnapshot(
      user => {setItems(user.data()['items'])});
      
      // .then(
      // user.forEach(item => setItems(items => [...items, item]))); 
      return () => users();
  }, []);


  let displayPosts = items.map((p) => (
      <Text>{p.name}</Text>
))
  

  return (
    <SafeAreaView style={styles.container}>

      <SafeAreaView style={styles.header}>
        <Text style={styles.headerTitle}> List </Text>
      </SafeAreaView>
      <SafeAreaView>
        <Text> {displayPosts} </Text>
      
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
    fontSize: 16,
  }
});