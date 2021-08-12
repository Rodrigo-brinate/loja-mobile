import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,Text,TouchableHighlight,TouchableOpacity, Button,Image, TextInput, View } from 'react-native';
import {  Route, Link } from "react-router-native";

export default function HeaderMenu() {


    var menuHidden =  <View style={styles.listHidden} >
<Text style={styles.item}>Home</Text>
<Text style={styles.item}>perfil</Text>
<Text style={styles.item}>carrinho</Text>
<Text style={styles.item}>favoritos</Text>
 <StatusBar style="auto" />
</View>

var menuVisible =  <View style={styles.listVisible} >
<Text style={styles.item}>Home</Text>
<Text style={styles.item}>perfil</Text>
<Text style={styles.item}>carrinho</Text>
<Text style={styles.item}>favoritos</Text>
 <StatusBar style="auto" />
</View>

  const [menu, setMenu] = useState(styles.listHidden)








  function showMenu(){
     
    //console.log(menu)
    console.log(styles.listHidden)
      if (menu === styles.listHidden){
       //  console.log('menu visible')
        setMenu(styles.listVisible)
        
      } else if (menu === styles.listVisible){ 
        //console.log('menu hiddle')
        setMenu(styles.listHidden)
      }
   
  }
  return (
    <View >
        <View style={styles.header}>
            <Text style={styles.logo}>logo</Text>

            <TouchableHighlight style={styles.test} onPress={showMenu}>
                <Image  style={styles.menu} source={require('../../assets/menu.png')} />
            </TouchableHighlight>
            
        </View>
        <View>
          <View style={menu} >
            <Link onPress={showMenu} component={TouchableOpacity} to={`/`}>
              <Text  style={styles.item}>Home</Text>
            </Link>
            
            <Text style={styles.item}>adicinar produto</Text>
            <Text style={styles.item}>gerenciar produto</Text>
            <Link onPress={showMenu} component={TouchableOpacity} to={`/profile`}>
            <Text style={styles.item}>adicionar categorias</Text>
            </Link>
            <Link onPress={showMenu} component={TouchableOpacity} to={`/logout`}>
            <Text style={styles.item}>gereciar categorias</Text>
            </Link>
            <StatusBar style="auto" />
        </View>
      </View>

       
</View>
  );
}

const styles = StyleSheet.create({
  header: {
   // flex: 1,
    backgroundColor: '#fff',
    height: 150,
    marginTop: 30
    //justifyContent: 'center',
  },
  logo: {
      marginTop: 30,
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: 40,
      borderColor: 'black',
      borderBottomWidth: 1,
      
  },
  menu: {
      marginLeft: 10,
      
  },
  item: {
      fontSize: 25,
      marginTop: 15
  },
  listHidden: {
     height: 500,
      //borderColor: 'black',
      //borderEndWidth: 1,
      marginLeft: 0,
      //marginTop: 10,
      backgroundColor: '#FFF',
      width: 300,
      padding: 40,
      display: 'none'
  },
  listVisible: {
    height: 900,
     //borderColor: 'black',
     //borderEndWidth: 1,
     marginLeft: 0,
     //marginTop: 10,
     backgroundColor: '#335780',
     width: 300,
     padding: 40,
     display: 'flex',
     
   
    
 },
 test: {
    width:100,
    height:80,
   marginTop: -30
 }
});
