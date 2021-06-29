import React, { useState, useContext }from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
import 'react-native-gesture-handler';

import {
    Pressable,
} from 'react-native';


function LoginScreen ({navigation}){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { login }= useContext(AuthContext);

    return (
        <View style = {styles.container}>
            <Text>Login Screen</Text>

            <FormInput 
                labelValue={email}
                onChangeText = {(userEmail) => setEmail(userEmail)}
                placeholderText = "email"
                iconType = "mail"       //change
                autoCapitalize = "none"
            />
            <FormInput 
                labelValue={password}
                onChangeText = {(userPassword) => setPassword(userPassword)}
                placeholderText = "password"
                iconType = "lock-closed"       //change
                autoCapitalize = "none"
                secureTextEntry = {true}
            />
            
            <Button
                title = "Log In"
                onPress = {() => login(email, password)}
            />

            <Pressable 
            style = {styles.button} 
            onPress = {() => navigation.navigate("SignUp")}>
                <Text>Create Account</Text>
            </Pressable>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 30,
        paddingVertical: 5,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "#8bafd6",
        justifyContent: "center",
      }
});