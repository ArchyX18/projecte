import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


//export const url = "http://192.168.1.34";   
//export const url = "http://172.20.10.4";
export const url = "http://localhost";
 

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    
   <Text style={[styles.title, textColor]}>{item.detall.title}</Text>

   <Text style={[styles.title, textColor]}>{item.preu_unitat}</Text>
   <Text style={[styles.title, textColor]}>{item.quantitat}</Text>
    
  </TouchableOpacity>
);




export default function LlistaCarro (){
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [dataP, setDataP] = useState([]);

 






  const getOrders = async () => {
     try {
      const response = await fetch(url+ ':3000/orders/?userid=2558');
      const json = await response.json();
      setData(json[0].prod);
      const response2 = await fetch(url+ ':3000/products');
      const json2 = await response2.json();
      
      
      setDataP(json2);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    getOrders();
  }, []);


  





  

 


  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';



    

    if(dataP.length!=0){
      item.detall=dataP[item.prodid];

    
      return (
        <Item
          item={item}
          onPress={() => navigation.navigate()}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}

        />
      );
    }
    
    
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
