import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, ScrollView, Text, View,  } from 'react-native';
import Api from '../services/api'
import Header from '../components/Header';
import { Link } from "react-router-native";

export default function Home() {

  const [product, setProduct] = useState([]);

 
  useEffect(() => {
    Api
      .get("/")
      .then((response) =>  
        setProduct(response.data.map((item) => 
      
      <View key={item.id} style={styles.card}>
          <Image  style={styles.img} source={{ uri: `http://10.0.0.104:8001/storage/${item.photo_main}`, }} />

          <Text style={styles.name}>{item.product_name.slice(0, 20)}</Text>

          <Text style={styles.description}>{item.product_description.slice(0,60)}</Text>

          <Text style={styles.value}>{item.value.replace('.', ',')}</Text>

          <Link to={`/product/${item.id}`} style={styles.btnProduct} >
            <Text style={{fontSize:20, color: '#FFF', textAlign: 'center', fontWeight: 'bold' }}>ver mais</Text>
        </Link>

      </View>
      )
        ))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);



  return (
    <View style={styles.container}>
   <Header/>
      <ScrollView style={styles.scrollView}>
      <View style={styles.cards}>{product}</View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
    backgroundColor: '#fff',
   
  },
  name: {
    fontSize: 20,
    marginTop: 10
  },
  card: {
    marginTop: 50,
    marginRight: 20,
    borderLeftColor: 'black',
    borderWidth: 1,
    width: 210,
    height: 320,
    padding: 10,
    flexDirection:'column',

  },
  cards: {
    width: 500,
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    marginLeft: 20
  },

  img: {
    width: 150,
    height: 150
  },

  description: {
    color: 'gray',
    height: 50
  },
  value: {
    color: 'green',
    marginBottom: 10
  },
  about: {
    backgroundColor: 'blue',
    marginBottom: 0
  },
  navItem: {
    borderColor: 'black',
    borderWidth: 1
  },
  btnProduct: {
   
    width: 150,
    padding:5,
    backgroundColor: '#0a7ef2',
    borderRadius: 8,
    color: '#fff',
    textAlign: 'center'
  },
  
});
