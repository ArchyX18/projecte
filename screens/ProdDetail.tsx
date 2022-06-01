
import { StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from "react";


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ProdDetail({route}) {
  console.log(route.params.filename);

  const img = route.params.filename;

  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.title}</Text>
      <Text>{route.params.description}</Text>
      <Text>{route.params.price} €</Text>
      <Image source={require( "../assets/images/products/estoig.png")} />

      
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
  img: {
    width: 100, 
    height: 100
  }
});


