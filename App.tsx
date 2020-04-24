import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IndexCircleProgress from './circularProgress/Index'
const RADIUS = 100;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Navbar}>
        <Text style={{
          flex: 1,
          textAlign: 'center',
          fontSize: 20,
          color: 'white',
          paddingTop: 8
        }}>Circular Progress</Text>
      </View>
    
        <View style={{
          // borderColor: 'red',
          // borderWidth: 1,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            // borderWidth: 1,
            // borderColor: 'blue'
          }}>
            <IndexCircleProgress/>
          </View>
          <View style={{
            width: RADIUS * 1.6,
            height: RADIUS * 1.6,
            backgroundColor: '#333',
            borderRadius: RADIUS,
            position: 'absolute',
          }}/>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  Navbar:{
    height: 50,
    backgroundColor: 'rgb(91, 170, 235)',
    borderRadius: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  overlay:{

  }
});
