import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore, { firebase } from '@react-native-firebase/firestore';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value = {{
                user,
                setUser,
                login: async (email , password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email , password);
                    }
                    catch (e) {
                        console.log(e); 
                    }
                },
                register: async (email , password) => {
                    console.log(password);
                    try {
                        await auth().createUserWithEmailAndPassword(email , password);
                        const currentUser = firebase.auth().currentUser;
                        firestore().collection('users').doc(currentUser.uid).set({items : null});
                    }
                    catch (e) {
                        console.log(e);
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