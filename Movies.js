import { TouchableOpacity,SafeAreaView,Text, View, ScrollView, StyleSheet, FlatList, Button } from "react-native";
import { useWindowDimensions } from 'react-native';
import { useState } from "react";
import { Animated } from "react-native";
import React from "react";
import Video from 'react-native-video';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Movies () {
    const { height, width } = useWindowDimensions();
    const shows = ['Classroom of the Elite', 'SPY x FAMILY', 'title3', 'title4', 'title,5', 'title5', 'title6']
    const episodes=[
        {episode:'1',url:'RM9shhtJ_do',title:shows[0]},
        {episode:'2',url:'-PhAnSh9cIU',title:shows[0]},
        {episode:'3',url:'Nlb2FEScXBo',title:shows[0]},
        {episode:'4',url:'lJCycPlljns',title:shows[0]},
        {episode:'5',url:'nfWrHCdBQu0',title:shows[0]},
        {episode:'6',url:'Cxi3Lc4eW3U',title:shows[0]},
        {episode:'7',url:'Ewclo0bValk',title:shows[0]},
        {episode:'8',url:'cK8V3LSFvX0',title:shows[0]},
        {episode:'9',url:'00qE5_C4qPM',title:shows[0]},
        {episode:'10',url:'Q9oWQlC8G_s',title:shows[0]},
        {episode:'11',url:'2mkDWrdybhA',title:shows[0]},
        {episode:'12',url:'DzznLoRH7AM',title:shows[0]},
        {episode:'1',url:'-Ivz-tSWRmY',title:shows[1]},
        {episode:'2',url:'hVmK9HJmZJg',title:shows[1]},
        {episode:'3',url:'Y5dp7m4VKb8',title:shows[1]},
        {episode:'4',url:'_wils9uaT2o',title:shows[1]},
        {episode:'5',url:'KjRV8aNMp-g',title:shows[1]},
        {episode:'6',url:'IHS8v44dPjI',title:shows[1]},
        {episode:'7',url:'W7KxmmGLdKI',title:shows[1]},
        {episode:'8',url:'R86xXFjhWWM',title:shows[1]},
        {episode:'9',url:'BIwkObJE9gQ',title:shows[1]},
        {episode:'10',url:'6oFVojPj_zY',title:shows[1]},
        {episode:'11',url:'fGdTKRfMhx0',title:shows[1]},
        {episode:'12',url:'f14z5xfvQqc',title:shows[1]},

    ]
    const [currShow, setCurrShow] = useState(shows[0]);
    const showsSeparator= () => {
      return <View style={{ height: 1,backgroundColor: 'grey',marginHorizontal:10, width:150, alignSelf:'center'}} />;
    };
    //Error: large list - fixed (y)
    const filter=()=>{
      return episodes.filter(episodes => episodes.title===currShow);
    }
    const printAll= () => {
      
        return (
          <>
          <Text style={{textAlign: 'center',marginBottom:10}}>
               Swipe left to see more episodes
             </Text>
          <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={filter()}
          renderItem={({item}) => 
          <SafeAreaView style={{flex:1,paddingHorizontal: 30,borderRightWidth: 4,borderTopWidth:4,justifyContent: 'center'}}>
          <YoutubePlayer
  height={205}
  width={width}
  videoId={item.url}
  volume={50}
  playbackRate={1}
  initialPlayerParams={{
    cc_lang_pref: "us",
    showClosedCaptions: true,
  }}/>
  <Text>{item.title} Episode:{item.episode}</Text>
  </SafeAreaView>}
         />
        </>)
    };
    const showOptions = () => {
      return(
        <FlatList
        data={shows}
        ItemSeparatorComponent={showsSeparator}
        renderItem={({item}) => 
        <SafeAreaView style={{alignItems:'center',}}>
          <TouchableOpacity>
            <Text style={styles.titles}onPress={()=>{setCurrShow(item)}}>
               {item}
             </Text>
          </TouchableOpacity>
</SafeAreaView>}
       />
      );
    }
    return(
    <View style={styles.container}>
      <View style={styles.content}>
        {printAll()}
      </View>
      <View style={styles.options}>
         {showOptions()}
       </View>
    </View>
   
  
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: 0,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    content:  {
       flex:1,
        height:305,
        backgroundColor: 'whitesmoke',
        marginTop: 0,
      },
      titles: {
        textAlign: 'center',
        width: 300,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        padding: 30,
      },
      options: {
        borderWidth: 3,
        flex:1,
        alignSelf: 'center',
        width: 360,
        top:0,
        bottom:0,
      },
});