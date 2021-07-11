import React, { useEffect, useState, useContext} from 'react';
import { SafeAreaView, StyleSheet, FlatList, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';
import { AuthContext } from '../navigation/AuthProvider';
import { List, ListItem, Text, Layout, Button } from '@ui-kitten/components';
import { Divider } from 'react-native-elements/dist/divider/Divider';


function ListScreen({navigation}) 
{
  const [items, setItems] = useState([]);

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
  //  console.log(currentUser);

    const users = firestore()
      .collection('users').doc(currentUser.uid).onSnapshot(
      user => {setItems(user.data()['items'])});
      
      return () => users();
  }, []);

  //console.log(items);

  const displayPosts = ({item}) => (
    <ListItem 
      title={evaProps => <Text {...evaProps} style = {{fontSize:24}}>{item.name}</Text>}
      description={evaProps => <Text {...evaProps}>APPROX NO. PER WEEK: {item.est_frequency}</Text>}
    />

  );

  return (
    <Layout style={{ flex: 1, justifyContent: 'center'}}>
    
    <SafeAreaView style={{flex: 1, flexDirection: "row",justifyContent: "space-between",marginTop: 60}}>
      <Text category='h1' style={{marginLeft: 40}}>
        Items
      </Text>

      <Pressable 
        style = {{marginRight:40, marginTop: 6}}
        onPress = {() => navigation.navigate("AddScreen", {param: items})}>
          <Icon name = "add-circle-outline" type = "ionicon" size = {35} color = "white"></Icon>
      </Pressable>

    </SafeAreaView>

    <SafeAreaView style = {{flex: 5}}>
      <List style = {{marginLeft: 40, marginRight: 40}}
          data = {items}
          renderItem = {displayPosts}
          keyExtractor = {item => item.name}
          ItemSeparatorComponent = {Divider}
      />
    </SafeAreaView>
      
    </Layout>
    
  );
};

export default ListScreen;

/*
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
*/