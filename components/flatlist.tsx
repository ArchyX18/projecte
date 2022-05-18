import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
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



 

  const getMovies = async () => {
     try {
      const response = await fetch('https://api.jsonbin.io/b/6284b64825069545a33bc62a');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    getMovies();
  }, []);


  

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';
    //console.log(item.id);
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
  },
});

//JSON que farem servir de prova en una nova branca
//https://reactnative.dev/movies.json

//https://github.com/GoogleChromeLabs/sample-pie-shop/blob/master/src/data/products.json