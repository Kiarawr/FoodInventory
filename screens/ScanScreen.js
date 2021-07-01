import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Button} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';

function ScanScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == 'granted');
    }) ();
  }, []);

  const handleScan = ({type, data}) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setItemList(itemList => [...itemList, data]);
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


    return (
      <SafeAreaView style = {styles.container}>
        <SafeAreaView style = {styles.header}>
          <Text style = {styles.headerTitle}> Scan </Text>
        </SafeAreaView>
        <Text> scan or add items this</Text>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined: handleScan} 
          style={StyleSheet.absoluteFillObject} 
        />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}  
     </SafeAreaView>
    )
}

export default ScanScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      height: 35,
      backgroundColor: "white",
      borderBottomColor: "#eeeeee",
      borderBottomWidth: 2,
  
      alignItems: "center",
    },
    headerTitle: {
      fontSize: 16,
    }
});