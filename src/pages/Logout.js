import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Picker , AsyncStorage, Image, ScrollView, Text, TextInput, View, Button, ColorPropType } from 'react-native';
import Api from '../services/api'
import {  Route, Link, Redirect } from "react-router-native";
import MMKVStorage from "react-native-mmkv-storage";
//import AsyncStorage from '@react-native-async-storage/async-storage';



export default  function Loguot() {
const [redirect, setRedrect] = useState();
async function logout(){
console.log(AsyncStorage.getItem('token'))
 await AsyncStorage.removeItem('token')
 
 setRedrect( <Redirect to={'/login'} />)
   
}
    
 logout()


   


  return (
    <View style={styles.container}>
     
{redirect}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
    backgroundColor: '#fff',
   
  },
 
});
