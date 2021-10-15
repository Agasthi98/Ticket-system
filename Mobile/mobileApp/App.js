import React from 'react';
import { Text, View } from 'react-native';
import QrScannerScreen from '../../Mobile/mobileApp/android/app/src/Screens/QrScannerScreen/QrScannerScreen.js'

const App = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <QrScannerScreen/>
    </View>
  );
}

export default App;