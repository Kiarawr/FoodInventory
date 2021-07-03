import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import { Text, Layout, Button } from '@ui-kitten/components';

function OnBoardingScreen({navigation}){
    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style = {styles.topContainer}>
                <Icon name = "cart" type = "ionicon" size = {40} color = "white"></Icon>
                <Text category={'h1'}>
                    Food Inventory
                    </Text>
            </View>

            <View style = {styles.buttonContainer}>
                <Button
                        style = {styles.button} 
                        onPress = {() => navigation.navigate("SignUp")}>
                        <Text style = {styles.buttonText}>SIGN UP</Text>
                </Button>
                <Button
                        style = {styles.button} 
                        onPress = {() => navigation.navigate("Login")}>
                        <Text style = {styles.buttonText}>LOGIN</Text>
                </Button>
            </View>
        </Layout>
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
        width: '60%',
        paddingVertical: 5,
        paddingHorizontal: 32,
        marginTop: 5,
        marginBottom: 10,
        elevation: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
    }
});
