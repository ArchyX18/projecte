import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';



const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    
  </TouchableOpacity>
);


export default function Llista (){
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  



  const getProducts = async () => {
     try {
      const response = await fetch('http://localhost:3000/products/');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    getProducts();
  }, []);



  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#307ecc";
    const color = item.id === selectedId ? 'black' : 'white';
    //console.log(item.filename);
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Detail', data[item.id])}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}

      />
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        navigation={navigator}
       
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
