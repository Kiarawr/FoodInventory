import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import ItemScreen from '../screens/ItemScreen';
import AddScreen from '../screens/AddScreen';

function ListStack(){
    return (
        <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen name ="ItemsScreen" component={ItemScreen}/>
            <Stack.Screen name ="AddScreen" component={AddScreen}/>
        </Stack.Navigator>
    );
}

export default ListStack;