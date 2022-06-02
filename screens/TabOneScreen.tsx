import React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Llista from '../components/flatlist';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Llista de productes</Text>
      
      <Text style={styles.body}>Tots els nostres productes seran enviats, en un periode de 10 a 14 dies laborables, per les nostres empreses col·laboradores.</Text>

      <Llista/>

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
    marginTop: 30,
  },
  body: {
    fontSize: 16,
    margin:50,
    justifyContent: 'center'

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
