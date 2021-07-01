import React from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';

function OnBoardingScreen({navigation}){
    return (
        <View style = {styles.container}>

            <View style = {styles.topContainer}>
                <Icon name = "cart" type = "ionicon" size = {40} color = "black"></Icon>
                <Text style = {styles.title}>Food Inventory</Text>
            </View>

            <View style = {styles.buttonContainer}>
                <Pressable
                        style = {styles.button} 
                        onPress = {() => navigation.navigate("SignUp")}>
                        <Text style = {styles.buttonText}>SIGN UP</Text>
                </Pressable>
                <Pressable
                        style = {styles.button} 
                        onPress = {() => navigation.navigate("Login")}>
                        <Text style = {styles.buttonText}>LOGIN</Text>
                </Pressable>
            </View>
        </View>
    );

}

export default OnBoardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topContainer: {
        marginTop: 200,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
    },
    button: {
        height: 45,
        width: '100%',
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
