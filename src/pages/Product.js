import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Picker, TouchableHighlight, TouchableOpacity, Image, ScrollView, Text, TextInput, View, Button } from 'react-native';
import Api from '../services/api'
import Header from '../components/Header';
import { Link } from "react-router-native";


export default function Product({ match }) {

  const [product, setProduct] = useState([]);
  const [showComent, setShowComent] = useState()

  useEffect(() => {
    Api
      .get("/product/"+match.params.id)
      .then((response) => { 
        console.log(response.data[0])
        setProduct(response.data[0]
        )})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    Api
      .get("/product/comment/view/"+match.params.id)
      .then((response) => {
        console.log(response.data[0])
        setShowComent(response.data.map((product) => 
        
    <View key={product.identification} style={styles.comments}>
       <View>
          <View style={{flexDirection: 'row'}}>
            <Image  style={{width: 20, height: 20}} source={require('../../assets/profile.png')} />
            <Text style={{width: 300, fontWeight: 'bold'}}>{product.name}</Text>
          </View>

            <Text style={{marginTop: 10,width: 300}}>{product.comment}</Text>
        </View>

        <View style={{marginLeft: 20, flexDirection: 'row'}}>
          <Text>{product.clacification}</Text>
          <Image style={{width: 15, height: 15}}   source={require('../../assets/star-selected.png')} />
        </View>
    </View>
    ))
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Header />
        <Link component={TouchableOpacity} to={`/`}  >
            <Text style={{marginLeft: 10, fontSize: 20, marginTop: 10, color: 'blue'}}>back</Text>
        </Link>
    <ScrollView style={styles.scrollView}>
      <Image  style={styles.img} source={{
          uri: `http://10.0.0.104:8001/storage/${product.photo_main}`,
        }} />
       
      <Text style={styles.product_name}>{product.product_name}</Text> 
      <View style={{flexDirection: 'row',alignItems: 'center'}}>
        <Link to={`/product/${product.id}`} style={styles.cart} >
            <Text style={{textAlign: 'center', fontSize: 20}} >adicionar ao carrinho</Text>
        </Link>

        <Link to={`/product/${product.id}`} style={styles.checkout} >
            <Text style={{textAlign: 'center', fontSize: 20}} >comprar</Text>
        </Link>
      </View>
      <Text style={styles.value}>{product.value}</Text>
      <Text style={styles.title}>descrição</Text>
      <Text style={styles.product_description}>{product.product_description}</Text>


      <Text style={styles.title}>comentário</Text>
        <TextInput style={styles.input} placeholder="digite seu comentario" />

        <Picker style={styles.picker} >
            <Picker.Item label="deixe uma clacification" />
            <Picker.Item label="★" value={1}/>
            <Picker.Item label="★★" value={2}/>
            <Picker.Item label="★★★" value={3}/>
            <Picker.Item label="★★★★" value={4}/>
            <Picker.Item label="★★★★★" value={5}/>
      </Picker>
      <TouchableHighlight style={styles.comment} >
      <Text styles={styles.commentText}>comentar</Text>
  </TouchableHighlight>


  <View>
      {showComent}
  </View>

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
  t: {
     
      width:100,
      height: 100
  },
  product_description: {
      width: 400,
      marginLeft: 20,
      fontSize: 20,
      color: 'gray',
      marginTop: 10
  },
  img: {
      width: 300,
      marginTop: 100,
      height: 300
  },
  product_name: {
      fontSize: 30,
      marginLeft: 20,

  },
  checkout: {
    width: 100,
    height: 50,
    backgroundColor: 'green',
    marginLeft: 20,
    justifyContent: 'center',
    marginTop: 20
    
  },
  cart: {
    width: 200,
    height: 50,
    marginLeft: 20,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  value: {
      marginLeft: 30,
      fontSize: 25,
      color: 'green',
      marginTop: 10
  },
  title: {
      fontSize: 30,
      marginLeft: 20,
      color: 'black',
      fontWeight: 'bold',
      marginTop: 20,
      
  },

  input:{
      marginRight: 'auto',
      marginLeft: 'auto',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      height:40,
      width: 300,
      marginTop: 20

  },
  picker: {
    height: 50, 
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  },
  comment: {
      width: 130,
      height: 50,
      marginBottom: 200,
      backgroundColor: '#3d9adb',
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      
  },
  commentText: {
    fontSize: 20,
     color: '#fff',
      fontWeight: 'bold'
  },
  comments: {
      width: 400,
      marginLeft: 40,
      marginRight: 'auto',
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'space-between'
  }
});
