import React, { useState, useContext }from 'react';
import { View, Pressable, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
import 'react-native-gesture-handler';
import { Text, Layout, Button } from '@ui-kitten/components';


function LoginScreen ({navigation}){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { login }= useContext(AuthContext);

    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <View style = {styles.container}>

                <View style = {styles.topContainer}>
                    <Text category = {'h1'}>Log In</Text>
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
                    
                    <Button 
                        style = {styles.button}
                        onPress = {() => login(email, password)}>
                        <Text style = {styles.buttonText}>LOG IN</Text>
                    </Button>

                </View>
                
            </View>
        </Layout>
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
        paddingVertical: 5,
        paddingHorizontal: 32,
        marginTop: 5,
        marginBottom: 10,
        elevation: 3,
        justifyContent: "center",
        alignItems: "center",
    },
});