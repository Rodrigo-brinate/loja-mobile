import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, ScrollView, Text, TextInput, View, Button } from 'react-native';
import Header from './src/components/Header';
//import Api from './src/services/api';
import Home from './src/pages/Home';
import Product from './src/pages/Product'
import Login from './src/pages/Login';
import Profile  from './src/pages/Profile';
import Loguot from './src/pages/Logout';
import Register from './src/pages/Register';
import { NativeRouter, Route, Link } from "react-router-native";

export default function App() {

  return (
    <NativeRouter>
    <View style={styles.container}>
      
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={Product} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/logout" component={Loguot} />
      <StatusBar style="auto" />
    </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
    backgroundColor: '#fff',
   
  },

});
