import React, { useState, useContext }from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
import 'react-native-gesture-handler';

import {
    Pressable,
} from 'react-native';


function SignUpScreen({navigation}) {
    
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const { register }= useContext(AuthContext);
    
    return (
        <View style = {styles.container}>
            <Text>Create an account</Text>

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

            <FormInput 
                labelValue={confirmPassword}
                onChangeText = {(userPassword) => setConfirmPassword(userPassword)}
                placeholderText = "confirm password"
                iconType = "lock-closed"       //change
                autoCapitalize = "none"
                secureTextEntry = {true}
            />

            <Button
                title = "Sign Up"
                onPress = {() => register(email, password)}
            />

        </View>
    );

}

export default SignUpScreen;

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