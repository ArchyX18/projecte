import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Login from '../components/Login';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
     
      <Login/>
    </View>
      
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
