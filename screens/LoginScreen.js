import React, { useState, useContext }from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
import 'react-native-gesture-handler';


function LoginScreen ({navigation}){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { login }= useContext(AuthContext);

    return (
        <View style = {styles.container}>

            <View style = {styles.topContainer}>
                <Text style = {styles.title}>Log In</Text>
            </View>

            <View style = {styles.botContainer}>

                <FormInput 
                    labelValue={email}
                    onChangeText = {(userEmail) => setEmail(userEmail)}
                    placeholderText = "email"
                    iconType = "mail"               //change
                    autoCapitalize = "none"
                />
                <FormInput 
                    labelValue={password}
                    onChangeText = {(userPassword) => setPassword(userPassword)}
                    placeholderText = "password"
                    iconType = "lock-closed"       //change
                    autoCapitalize = "none"
                    secureTextEntry = {true}
                    fontFamily = "helvetica"
                />
                
                <Pressable 
                    style = {styles.button}
                    onPress = {() => login(email, password)}>
                    <Text style = {styles.buttonText}>LOG IN</Text>
                </Pressable>

            </View>
            
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
    topContainer: {
        marginBottom: 40,
    },
    title: {
        fontSize: 24,
        fontFamily: "helvetica",
    },
    botContainer: {
        width: "100%",
        alignItems: "center",
    },
    button: {
        height: 45,
        width: '70%',
        paddingVertical: 5,
        paddingHorizontal: 32,
        borderRadius: 30,
        marginTop: 5,
        marginBottom: 10,
        elevation: 3,
        backgroundColor: "#8bafd6",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
    }
});