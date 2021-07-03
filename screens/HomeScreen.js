import React, { useContext , View } from 'react';
// import { SafeAreaView, \ StyleSheet, Button} from 'react-native';
// import { Calendar } from 'react-native-calendars';
import { AuthContext } from '../navigation/AuthProvider';
import { Calendar, Text, Layout, Button } from '@ui-kitten/components';



function HomeScreen() {
  const { logout } = useContext(AuthContext);
  const [date, setDate] = React.useState(new Date());

  return (
    <React.Fragment>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
        
        <Text category='h1' style={{marginLeft: 40}}>
              Overview
        </Text>

        <Calendar
          style={{alignSelf: 'center'}}
          date={date}
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