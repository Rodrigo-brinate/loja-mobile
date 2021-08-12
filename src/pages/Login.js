import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Picker , AsyncStorage, Image, ScrollView, Text, TextInput, View, Button, ColorPropType } from 'react-native';
import Api from '../services/api'
import {  Route, Link, Redirect } from "react-router-native";
import MMKVStorage from "react-native-mmkv-storage";
//import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [token, setToken] = useState('');
    const [redirect, setRedirect] = useState();
   // const [value,setFieldValue] = useState()
//console.log(redirect)
    function handleEmailChange(e) {
        setEmail(e);
       //console.log(e)
     } 

     function handlePasswordChange(e) {
        setPassword(e);
        //console.log(e)
     }
   //  const MMKV = new MMKVStorage.Loader().initialize();
     //console.log(AsyncStorage.getItem('token'))

 async function  handleLogin() {
    
    console.log(password)
     console.log(email)

   
         await Api
          .post("/login",{
                email: email,
                password: password
     })
          .then((response) => {
          //console.log(response.data.access_token)
          //console.log(response.data.access_token)
          //console.log(response.data.access_token)
       setToken(response.data.access_token)
        return <Redirect to={'/'} />
          //AsyncStorage.setItem('id', response.data.id.toInt())
          }
           )
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            setRedirect(<Text style={{backgroundColor: 'red',
            height: 60,
             width: 200,
              marginLeft: 'auto',
               marginRight: 'auto',
               textAlign: 'center',
               padding: 20,
               fontSize: 20
              }}>usuario ou senha incorreta</Text>)
          });
      
         // await MMKV.setStringAsync("token", token);
          await AsyncStorage.setItem('token',token);
          //console.log( await AsyncStorage.getItem('token'))
         // console.log( await AsyncStorage.getItem('token'))
        // console.log( await AsyncStorage.getItem('token'))
          //console.log( token)
        
         
             
        
         if (await AsyncStorage.getItem('token') != null){
              //console.log('teste')
              console.log(await AsyncStorage.getItem('token'))
setRedirect(<Redirect to={'/'} />)
              
          }
          
     }

  

  return (
    <View style={styles.container}>
       <Text style={{marginRight: 'auto',fontSize: 42,marginBottom: 20, marginLeft: 'auto'}}>login</Text>
       <View >{redirect}</View>
<TextInput style={styles.input} onChangeText={handleEmailChange} placeholder="digite seu email"/>
    <TextInput style={styles.input}  onChangeText={handlePasswordChange} placeholder="digite sua senha"/>
<Text onPress={handleLogin} style={styles.button}  >entrar</Text>

<Text style={{marginRight: 'auto',fontSize: 22,marginTop: 10, marginLeft: 'auto'}}>ainda não tem conta</Text>
<Link to="/register" >
  <Text  style={{marginRight: 'auto', marginLeft: 'auto',fontSize: 22, color: 'blue'}}>cadastre-se</Text>
</Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
    backgroundColor: '#fff',
   
  },
  input: {
      width: 350,
      height:70,
     fontSize: 20,
     backgroundColor: '#fff',
     marginRight: 'auto',
     marginLeft: 'auto',
     borderWidth: 1,
     marginTop: 10,
     padding: 10,
     borderRadius: 8
  },
  button: {
    width: 300,
    height:60,
   fontSize: 20,
   backgroundColor: '#fff',
   marginRight: 'auto',
   marginLeft: 'auto',
   borderWidth: 1,
   marginTop: 10,
   padding: 18,
   borderRadius: 8,
   textAlign: 'center',
   backgroundColor: '#589446',
   color: '#fff',


  }
});
