import { StatusBar } from 'expo-status-bar';
import { DrawerLayoutAndroid,TouchableOpacity,StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { Dimensions } from 'react-native';
import React, {useRef, useState } from 'react';
import Home from './Home.js';
import Movies from './Movies.js';
import About from './About.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App() {
  const drawer = useRef(null);
  const [tab, setTab] = useState('home');
  const navigationView = () => (
      <View style={{
    flex: 1,
    alignItems: "center",
    padding: 16,}}>
        <TouchableOpacity style={{flexDirection:'column'}}>
        <Text onPress={() =>{setTab('home');drawer.current.closeDrawer()}} style={styles.btmbutton}>Home</Text>
        <Text onPress={() =>{setTab('Movies');drawer.current.closeDrawer()}} style={styles.btmbutton}>Movies</Text>
        <Text onPress={() =>{setTab('About');drawer.current.closeDrawer()}} style={styles.btmbutton}>About us</Text>
        </TouchableOpacity>
      </View>
    
  );
  
  const tabViews = () => {
    if(tab==="home"){
      return(
        <Home />
      );
    }
    else if(tab==="Movies"){
      return(
        <Movies />
      );
    }
    else if(tab==="About"){
      return(
        <About />
      );
    }
  }
  return (
    <>
    
    
    <DrawerLayoutAndroid
    ref={drawer}
    drawerWidth={300}
    drawerPosition='right'
    renderNavigationView={navigationView}
  >
  <View style={styles.header}>
    <Text style={styles.head}>CRUNCHYLOL</Text>
    <Text
    style={styles.menu}
    onPress={() => drawer.current.openDrawer()} >
      Menu
    </Text>
    
    </View>
    <View style={styles.container}>
      <View style={styles.container}>
      {tabViews()}
      </View>
    </View>
    
    </DrawerLayoutAndroid>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btmcontainer: {
    flex: 0,
    position: 'absolute',
     left: 0, 
     right: 0, 
     bottom: 10,
     alignSelf:'center'
  },
  btmbutton: {
    textAlign: 'center',
    height: 30,
    fontSize: 18,
    alignSelf: 'flex-start',
    marginTop: 40,
    alignSelf: 'stretch',
    borderBottomColor: 'grey',
    borderWidth: 1,
    width: 280,
    backgroundColor: 'whitesmoke'
  },
  header: {
    marginTop:23,
    height:35,
    borderWidth:1,
    flexDirection: 'row',
    backgroundColor: '#bcb8b6',
  },
  menu: {
    fontSize:18,
    alignSelf:'center',
    borderWidth:1,
    paddingLeft:5,
    paddingRight:5,
    marginRight:5,
    backgroundColor:'gray',
    fontWeight:'bold',
    color:'white',
  },
  head: {
    fontSize:18,
    alignSelf:'center',
    flex:1,
    fontWeight:'bold',
    color:'white',
  },
  
});
