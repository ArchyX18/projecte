import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import LlistaCarro from '../components/flatlistC';
import { Text, View } from '../components/Themed';


export default function ShoppingCart({ navigation }) {
  return (
    <View style={styles.container}>
      <LlistaCarro/>
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
