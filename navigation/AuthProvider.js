import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value = {{
                user,
                setUser,
                login: async (email , password) => {

                    // check for valid input
        
                    if ( email == null || email.trim() === "" ){
                        Alert.alert('Invalid Email', 'Please enter a valid email address');
                        return;
                    }
                    if ( password == null || password.trim() === "" ){
                        Alert.alert('Invalid Password', 'Please enter the correct password');
                        return;
                    }
                    
                    // sign in

                    try {
                        await auth().signInWithEmailAndPassword(email , password);
                    }
                    catch (e) {
                        console.log(e);

                        if (e.code === 'auth/invalid-email')
                            Alert.alert('Invalid Email', 'Please enter a valid email address');
                        else if (e.code === 'auth/user-not-found')
                            Alert.alert('Invalid User', 'No existing user corresponds to this email address'); 
                        else if (e.code === 'auth/wrong-password' )
                            Alert.alert('Invalid Password', 'Please enter the correct password'); 
                        else if (e.code === 'auth/too-many-requests')
                            Alert.alert('Access Temporarily Disabled', 'Access to this account has been temporarily disabled due to several failed login attempts. Please try again later.');
                    }
                },
                register: async (email , password, confirmPassword) => {

                    // check for valid input
        
                    if ( email == null || email.trim() === "" ){
                        Alert.alert('Invalid Email', 'Please enter a valid email address');
                        return;
                    }
                    if ( password == null || password.trim() === "" ){
                        Alert.alert('Invalid Password', 'Please enter a valid password');
                        return;
                    }
                    if ( confirmPassword == null || confirmPassword.trim() === "" ){
                        Alert.alert('Invalid Password Confirmation', 'Please confirm password');
                        return;
                    }
                    if ( confirmPassword != password ){
                        Alert.alert('Invalid Password Confirmation', 'The password confirmation and password do not match');
                        return;
                    }

                    console.log(password);

                    try {
                        await auth().createUserWithEmailAndPassword(email , password);
                        const currentUser = firebase.auth().currentUser;
                        firestore().collection('users').doc(currentUser.uid).set({items : []});
                    }
                    catch (e) {
                        console.log(e);

                        if (e.code === 'auth/invalid-email')
                            Alert.alert('Invalid Email', 'Please enter a valid email address');
                        else if (e.code === 'auth/email-already-in-use')
                            Alert.alert('Invalid Email', 'The given email address is already in use by another account');
                        else if (e.code === 'auth/weak-password')
                            Alert.alert('Weak Password', 'Password should be at least 6 characters'); 
                         
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}