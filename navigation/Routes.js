import React, { useContext, useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';

import AuthStack from './AuthStack';
import AppStack from './AppStack';


function Routes () {

    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    function onAuthStateChanged (user){
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;  //when app is establishing connection with firebase
                                    //alternatively, could provide loading page
    
    return (
        <NavigationContainer>
            {console.log('hi')}
            { user ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}

export default Routes;
