import * as React from 'react';
import React2, { useEffect, useState } from "react";
import { Button, StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import LlistaCarro from '../components/flatlistC';
import { Text, View } from '../components/Themed';



//export const url = "http://192.168.1.64";   
export const url = "http://172.20.10.4";
//export const url = "http://192.168.42.60";


export default function ShoppingCart({ navigation }) {

  

  const [selectedId, setSelectedId] = useState(null);

  const [isLoading, setLoading] = useState(true);
  const [total, setTotal] = useState([]);



 

  const getTotal = async () => {
     try {
      const response3 = await fetch(url+ ':3000/orders/?userid=2558');
      const jsonorder = await response3.json();
      console.log(jsonorder);
      const ctotal = ((jsonorder[0].prod.reduce((a,v) =>  a = a + v.preu_unitat*v.quantitat , 0 )))
      setTotal(ctotal);
      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTotal();
  }, []);

 


  return (
    <View style={styles.container}>
      <LlistaCarro/>
      <Text style={styles.title}>Total: {total}</Text>
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
