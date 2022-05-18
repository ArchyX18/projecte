import React from 'react';
import { StyleSheet } from 'react-native';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ProdDetail({route, navigation}) {
  //console.log(route.params.title);
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Especificació de Producte</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ProdDetail.tsx" />
      <Text style={styles.title}>{route.params.title}</Text>
      <Text>{route.params.description}</Text>
      <Text>{route.params.price} €</Text>
      
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
