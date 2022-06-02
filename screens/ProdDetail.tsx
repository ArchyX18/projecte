
import { StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from "react";


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ProdDetail({route}) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.title}</Text>
      <Text style={styles.body}>{route.params.description}</Text>
      <Text>{route.params.price} €</Text>
      <Image
          style={styles.img}
          source={{uri: route.params.filename}}
        />

      
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
  
  body: {
    margin:10
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  img: {
    width: 500, 
    height: 500
  }
});


