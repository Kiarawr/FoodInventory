import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import { AuthContext } from '../navigation/AuthProvider';
import { Calendar, Text, Layout, Button } from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';
import { useIsFocused } from '@react-navigation/native';

function HomeScreen(props) {

  const { logout } = useContext(AuthContext);
  const [date, setDate] = React.useState(new Date());
  const [shopDates, setShopDates] = useState([]);

  const [isLoading, setLoading] = React.useState(true);
  // const isFocused = useIsFocused();

  useEffect(async () => {
    const currentUser = firebase.auth().currentUser;
    let temp = [];
    await firestore().collection('users').doc(currentUser.uid)
    .get().then(user => {user.data()['items'].forEach(
      item => {
        let day = new Date (item.next_purchase_date._seconds * 1000).getTime();
        temp.push(day);
        setShopDates(temp);
      }
    )});

    setLoading(false);

  }, []);

  const DayCell  = ({ date }, style ) => (

    <View
      style={[styles.dayContainer, style.container]}> 
      <Text style={styles.text}>{`${date.getDate()}`}</Text>
  
      <Text>
        { shopDates.includes(date.getTime()) ? 
        <Icon name = "ellipse" type = "ionicon" size = {5} color = "#7C4AF0"></Icon> : 
        <View></View>}
      </Text>

    </View>
    
  );

  return (
    <React.Fragment>
    {isLoading ? 
      
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
      </Layout>
      
      : 
    
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
    
    }
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