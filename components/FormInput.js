import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {
    Icon,
} from 'react-native-elements';

function FormInput({labelValue, placeholderText, iconType, ...rest}){
  return (
    
    <View style={styles.inputContainer}>

      <View style={styles.iconStyle}>
          <Icon name={iconType} type="ionicon" color="black" />
      </View>

      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
      
    </View>
  )
}

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
      marginTop: 5,
      marginBottom: 10,
      width: '70%',
      height: 50,            //change
      borderColor: '#ccc',
      borderRadius: 30,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    iconStyle: {
      padding: 10,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: '#ccc',
      borderRightWidth: 1,
      width: 50,
    },
    input: {
      padding: 10,
      flex: 1,
      fontSize: 16,
      fontFamily: "helvetica",
      color: '#333',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputField: {
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      width: 200,           //change
      height: 30,                   //change
      fontSize: 16,
      borderRadius: 30,
      borderWidth: 1,
    },
});