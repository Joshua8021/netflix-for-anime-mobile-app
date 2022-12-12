import { Text } from "react-native";
import { WebView } from 'react-native-webview';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useWindowDimensions } from "react-native";
export default function About () {
    const { height, width } = useWindowDimensions();
    return (

        
        <WebView style = {{width:width,height:height}}
        source={{uri: 'https://aerial-aluminum-pink.glitch.me/'}} />
    
    );
}