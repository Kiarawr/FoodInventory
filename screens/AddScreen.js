import React from 'react';
import { Pressable, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Text, Layout, Input, Datepicker, Button} from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';



function addItem(itemName, quantity, date) {

    const currentUser = firebase.auth().currentUser;
    //console.log(currentUser);
    console.log("adding item");

    //if item has been bought before, find entry in items array, add new entry to purchases array

    //if item is new, add new entry to items array (create map), add new entry to purchases array
    const newItem = new Map();
    newItem.set('name', itemName);
    newItem.set('est_frequency', 0);

    const newPurchase = new Map();
    newPurchase.set('date', date);
    newPurchase.set('quantity', quantity);

    const purchasesArr = [newPurchase];
    newItem.set('purchases', purchasesArr);

    console.log(newItem);

    /*
    firestore().collection('users').doc(currentUser.uid).update({
        items: firestore.FieldValue.arrayUnion(newItem),
    });
    */

}


function AddScreen({navigation}) {

    const [itemName, setItemName] = React.useState(null);
    const [quantity, setQuantity] = React.useState(null);
    const [date, setDate] = React.useState(null);

    return (
        <Layout style={{ flex: 1, justifyContent: 'center'}}>
    
        <SafeAreaView style={{flex: 1, flexDirection: "row",justifyContent: "space-between",marginTop: 60}}>
            <Text category='h1' style={{marginLeft: 40}}>
                Add Item
            </Text>

            <Pressable 
                style = {{marginRight:40, marginTop: 6}}
                onPress = {() => navigation.goBack()}>
                <Icon name = "close-outline" type = "ionicon" size = {35} color = "white"></Icon>
            </Pressable>
        </SafeAreaView>
        
        <SafeAreaView style = {{flex: 5}}>
            <Input style = {{marginLeft: 40, marginRight: 40, marginBottom: 15, borderColor: "white", borderWidth: 0.5}}
                label={evaProps => <Text {...evaProps} style = {{fontSize: 15, marginBottom: 4}}>ITEM NAME</Text>}
                placeholder = "Enter the name of the item"
                value = {itemName}
                onChangeText = {nextValue => setItemName(nextValue)}
            />

            <Input style = {{marginLeft: 40, marginRight: 40, marginBottom: 15, borderColor: "white", borderWidth: 0.5}}
                label={evaProps => <Text {...evaProps} style = {{fontSize: 15, marginBottom: 4}}>QUANTITY</Text>}
                placeholder = "Enter the quantity purchased"
                value = {quantity}
                onChangeText = {nextValue => setQuantity(nextValue)}
            />

            <Datepicker style = {{marginLeft: 40, marginRight: 40, marginBottom: 15}}
                label= {evaProps => <Text {...evaProps} style = {{fontSize: 15, marginBottom: 4}}>DATE PURCHASED</Text>}
                date = {date}
                onSelect = {nextValue => setDate(nextValue)}
    
            />

            <Button
            onPress = {() => addItem(itemName, quantity, date)}
            style={{marginLeft: 40, marginRight: 40, marginTop: 20}}>
            Add Item
            </Button>

        </SafeAreaView>

        </Layout>
    );
};

export default AddScreen;
