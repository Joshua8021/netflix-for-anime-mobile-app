import {
  StatusBar,
  TouchableHighlight,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useWindowDimensions } from "react-native";
import { Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import Home from "./Home.js";
import Movies from "./Movies.js";
import About from "./About.js";
import { AntDesign } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const drawer = useRef(null);
  const [tab, setTab] = useState("home");
  //Android drawer Layout
  const navigationView = () => (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 16,
      }}
    >
      <Pressable
        android_ripple={{ color: "red", borderless: false}}
        style={{ marginTop: 40,borderRadius:7, }}
        onPress={() => {
          setTab("home");
          drawer.current.closeDrawer();
        }}
      >
        <Text style={styles.btmbutton}>Home</Text>
      </Pressable>
      <Pressable
        android_ripple={{ color: "red", borderless: false }}
        style={{ marginTop: 40 }}
        onPress={() => {
          setTab("Movies");
          drawer.current.closeDrawer();
        }}
      >
        <Text style={styles.btmbutton}>Watch Anime</Text>
      </Pressable>
      <Pressable
        android_ripple={{ color: "red", borderless: false }}
        style={{ marginTop: 40 }}
        onPress={() => {
          setTab("About");
          drawer.current.closeDrawer();
        }}
      >
        <Text style={styles.btmbutton}>About us</Text>
      </Pressable>
    </View>
  );
  //if else for tab rendering
  const tabViews = () => {
    if (tab === "home") {
      return <Home />;
    } else if (tab === "Movies") {
      return <Movies />;
    } else if (tab === "About") {
      return <About />;
    }
  };

  return (
    //Main Layout
    <>
      <StatusBar barStyle={"light-content"} backgroundColor="red" />
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="right"
        renderNavigationView={navigationView}
      >
        <View style={styles.header}>
          <Text style={styles.head}>MOVIE HUB</Text>
          <Pressable
            android_ripple={{ color: "grey", borderless: false }}
            style={{ alignSelf: "auto" }}
            onPress={() => drawer.current.openDrawer()}
          >
            <Text style={styles.menu}>
              <AntDesign name="menu-unfold" size={32} color="white" />
            </Text>
          </Pressable>
        </View>
        <View style={styles.container}>
          <View style={styles.container}>{tabViews()}</View>
        </View>
      </DrawerLayoutAndroid>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btmcontainer: {
    flex: 0,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    alignSelf: "center",
  },
  btmbutton: {
    fllex: 1,
    textAlign: "center",
    height: 30,
    fontSize: 18,
    alignSelf: "flex-start",
    alignSelf: "stretch",
    borderColor: 'red',
    borderWidth: 1,
    width: 280,
    color:'red',
    borderRadius: 7,
  },
  header: {
    height: 40,
    borderBottomWidth: 1,
    flexDirection: "row",
    backgroundColor: "red",
  },
  menu: {
    alignSelf: "auto",
    borderLeftWidth: 1,
    paddingLeft: 15,
    paddingRight: 5,
  },
  head: {
    fontSize: 18,
    alignSelf: "center",
    flex: 1,
    fontWeight: "bold",
    color: "white",
    
  },
});
