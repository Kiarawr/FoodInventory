import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import { Calendar, Text, Layout, Button } from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';


function HomeScreen() {
  const { logout } = useContext(AuthContext);
  const [date, setDate] = React.useState(new Date());
  const [shopDates, setShopDates] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    let temp = []
    const users = firestore().collection('users').doc(currentUser.uid).get()
    .then((user) => {user.data()['items'].forEach(
      item => {
        let day = new Date (item.next_purchase_date._seconds * 1000).getTime();
        temp.push(day);
        setShopDates(temp);
      }
    )});
  }, []);

  const DayCell  = ({ date }, style ) => (
    <View
      style={[styles.dayContainer, style.container]}> 
      <Text style={styles.text}>{`${date.getDate()}`}</Text>
  
      <Text>
      { shopDates.includes(date.getTime()) ? <Text style={[style.text, styles.value]}> yes </Text> : <Text> no </Text>  }
      </Text>
    </View>
    
  );

  return (
    <React.Fragment>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
        
        <Text category='h1' style={{marginLeft: 40}}>
              Overview
        </Text>

        

        <Calendar
          style={{alignSelf: 'center'}}
          date={date}
          renderDay = {DayCell}
          onSelect={nextDate => setDate(nextDate)}
        />
        
        <Button
          onPress = {() => logout()}
          style={{marginLeft: 40}}>
          Log Out
        </Button>

      </Layout>
    </React.Fragment>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  dayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
  },
  value: {
    fontSize: 12,
    fontWeight: '400',
  },
});