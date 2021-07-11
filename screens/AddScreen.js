import React from 'react';
import { Pressable, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Text, Layout, Input, Datepicker, Button} from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';

function addItem(itemName, itemQuantity, itemDate, existingItems, {navigation}) {

    const currentUser = firebase.auth().currentUser;

    // console.log(existingItems);
    let exists = false;
    let currentItem = null; 

    existingItems.every(        // every() stops iterating when false is returned
        item => {
            // console.log(Object.values(item));

            if (item.name == itemName) {
                currentItem = item;
                exists = true;
                return false;           
            }
            else
                return true;

        }
    )
    
    if (exists) {

        // add new purchase to current item

        const newPurchase = {
            date: itemDate,
            quantity: itemQuantity
        }

        currentItem.purchases.push(newPurchase);

        // create differences array 

        let differences = [];
        let purchases = currentItem.purchases;
        // console.log(purchases);

        for (let i = purchases.length-1; i > 0; i--){

            let diffTime;

            if (i == purchases.length - 1)
                diffTime = ( purchases[i].date.getTime() / 1000 ) - purchases[i-1].date._seconds;  
            else 
                diffTime = purchases[i].date._seconds - purchases[i-1].date._seconds;

            let diffDays = diffTime / (3600 * 24);
            differences.push(diffDays / purchases[i-1].quantity);
        }

        console.log(differences);

        // filter differences array 
        // removes bottom 5% and top 5%

        differences.sort(function(a, b){return b - a});
        let low = Math.round(differences.length * 0.05);
        let high = differences.length - low;
        differences = differences.slice(low, high);

        console.log("after filter");
        console.log(differences);
        
        // calculate est_frequency
        let sum = 0;
        differences.forEach(
            value => {
                sum += value;
            }
        )

        console.log(sum);

        let amountPerWeek = ( 1 / ( sum / differences.length )) * 7 ;
        currentItem.est_frequency = Math.round(amountPerWeek);

        firestore().collection('users').doc(currentUser.uid).update({
            items: existingItems,
        });


    }

    // item is new, add new entry to items array (create map), 
    // add new entry to purchases array
    else {

        const newItem = {
            name: itemName, 
            est_frequency: 0,
            purchases: [
                {
                    date: itemDate,
                    quantity: itemQuantity
                }
            ],
        };
        
        firestore().collection('users').doc(currentUser.uid).update({
            items: firestore.FieldValue.arrayUnion(newItem),
        });

    }

    navigation.goBack();
    
}


function AddScreen({route, navigation}) {

    const [itemName, setItemName] = React.useState(null);
    const [quantity, setQuantity] = React.useState(null);
    const [date, setDate] = React.useState(null);
    const existingItems = route.params['param'];
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
            onPress = {() => addItem(itemName, quantity, date, existingItems, {navigation})}
            style={{marginLeft: 40, marginRight: 40, marginTop: 20}}>
            Add Item
            </Button>

        </SafeAreaView>

        </Layout>
    );
};

export default AddScreen;
