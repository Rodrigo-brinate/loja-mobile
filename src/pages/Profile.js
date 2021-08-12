import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView,AsyncStorage, View } from 'react-native';
import Api from '../services/api'
import Header from '../components/Header';
import { Link, Redirect } from "react-router-native";

export default function Profile() {
   const [redirect, setRedirect] = useState()
    
   async function verify(){
        var token = await AsyncStorage.getItem('token')
        console.log(token)

        if (token == null){
            console.log('test')
            setRedirect(<Redirect to={'/login'} />) 
        }
    }

verify()
 
  return ( 
    <View style={styles.container}>
       <Header/>
      <ScrollView style={styles.scrollView}>
      <View>{redirect}</View>
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
 
});
