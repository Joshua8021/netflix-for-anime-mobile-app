import { Text } from "react-native";
import { WebView } from 'react-native-webview';
import * as React from 'react';
import { StyleSheet } from 'react-native';
export default function About () {
    return (

        
        <WebView style = {{width:300,height:300}}source={{ uri: 'https://gogoanime.ar' }} />
    
    );
}