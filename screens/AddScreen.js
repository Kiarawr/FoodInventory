import React from 'react';
import { Pressable, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Text, Layout, Input, Datepicker, Button} from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

function addItem(itemName, itemQuantity, itemDate, existingItems, {navigation}) {

    // check for valid input

    if ( itemName == null || itemName.trim() === "" ) {
        Alert.alert('Invalid Input', 'Please enter an item name');
        return;
    }
    if ( itemQuantity == null || itemQuantity.trim() === "" || isNaN(Number(itemQuantity))) {
        Alert.alert('Invalid Input', 'Please a numerical quantity');
        return;
    }
    if ( itemDate == null ){
        Alert.alert('Invalid Input', 'Please select a date');
        return;
    }

    

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
            date: firebase.firestore.Timestamp.fromDate(itemDate),
            quantity: Number(itemQuantity)
        }

        currentItem.purchases.push(newPurchase);

        // initialize differences array
        let differences = [];
        let purchases = currentItem.purchases;

        // initialize total quantity and avg quantity 
        let totalQuantity = 0;
        let avgQuantity = 0;

        // sorts by date in ascending order
        purchases.sort(function(a, b){                      
            return a.date._seconds - b.date._seconds    
        });
        
        console.log(purchases);

        for (let i = purchases.length-1; i > 0; i--){

            let diffInSeconds = purchases[i].date._seconds - purchases[i-1].date._seconds;

            let diffInDays = diffInSeconds / (3600 * 24);
            differences.push(diffInDays / purchases[i-1].quantity);

            totalQuantity += purchases[i].quantity;
        }

        totalQuantity += purchases[0].quantity;
        avgQuantity = totalQuantity / purchases.length;
        console.log("total quantity: " + totalQuantity);
        console.log("average quantity: " + Math.round(avgQuantity));
        currentItem.avg_quantity = Math.round(avgQuantity);

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
        let avgDays = 0;
        differences.forEach(
            value => {
                avgDays += value;
            }
        )

        console.log(avgDays);

        let amountPerWeek = ( 1 / ( avgDays / differences.length )) * 7 ;
        currentItem.est_frequency = Math.round(amountPerWeek);

        // calculate next purchase date
        let avgSeconds = avgDays * 3600 * 24;
        let nextDateInSeconds = (avgSeconds * purchases[purchases.length-1].quantity) + purchases[purchases.length-1].date._seconds;
        currentItem.next_purchase_date = new firebase.firestore.Timestamp( nextDateInSeconds, 0);

        // update database
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
            avg_quantity: Number(itemQuantity),
            next_purchase_date: "n/a",
            purchases: [
                {
                    date: firebase.firestore.Timestamp.fromDate(itemDate),
                    quantity: Number(itemQuantity)
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
                keyboardType = "numeric"
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
