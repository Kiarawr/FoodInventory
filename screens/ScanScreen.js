import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera-tflite';
import outputs from '../Output.json';
import _ from 'lodash';

let _currentInstant = 0;

export default class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      output: ""
    };
  }


processOutput({data}) {
    
  const probs = _.map(data, item => _.round(item/255.0, 0.02));
  const orderedData = _.chain(data).zip(outputs).orderBy(0, 'desc').map(item => [_.round(item[0]/255.0, 2), item[1]]).value();
  const outputData = _.chain(orderedData).take(3).map(item => `${item[1]}: ${item[0]}`).join('\n').value();
  const time = Date.now() - (_currentInstant || Date.now());
  const output = `Guesses:\n${outputData}\nTime:${time} ms`;
  this.setState(state => ({
    output
  }));
  _currentInstant = Date.now();
}

render() {
  const modelParams = {
    file: "mobilenet_v1_1.0_224_quant.tflite",
    inputDimX: 224,
    inputDimY: 224,
    outputDim: 1001,
    freqms: 0
  };

  
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
                this.camera = ref;
              }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            onModelProcessed={data => this.processOutput(data)}
            modelParams={modelParams}
        >
          <Text style={styles.cameraText}>{this.state.output}</Text>
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});


// import React, { useEffect, useState } from 'react';
// import { SafeAreaView, Text, StyleSheet, Button} from 'react-native';
// import {BarCodeScanner} from 'expo-barcode-scanner';

// function ScanScreen({navigation}) {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);
//   const [itemList, setItemList] = useState([]);

//   useEffect(() => {
//     (async () => {
//       const {status} = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status == 'granted');
//     }) ();
//   }, []);

//   const handleScan = ({type, data}) => {
//     setScanned(true);
//     alert(`Bar code with type ${type} and data ${data} has been scanned!`);
//     setItemList(itemList => [...itemList, data]);
//   }

//   if (hasPermission === null) {
//     return <Text>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }


//     return (
//       <SafeAreaView style = {styles.container}>
//         <SafeAreaView style = {styles.header}>
//           <Text style = {styles.headerTitle}> Scan </Text>
//         </SafeAreaView>
//         <Text> scan or add items this</Text>
//         <BarCodeScanner
//           onBarCodeScanned={scanned ? undefined: handleScan} 
//           style={StyleSheet.absoluteFillObject} 
//         />
//       {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}  
//      </SafeAreaView>
//     )
// }

// export default ScanScreen;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     header: {
//       height: 35,
//       backgroundColor: "white",
//       borderBottomColor: "#eeeeee",
//       borderBottomWidth: 2,
  
//       alignItems: "center",
//     },
//     headerTitle: {
//       fontSize: 16,
//     }
// });