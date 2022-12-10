import { TextInput,TouchableHighlight,SafeAreaView,Text, View, ScrollView, StyleSheet, FlatList, Button } from "react-native";
import { useWindowDimensions } from 'react-native';
import { useState,useRef } from "react";
import { Animated } from "react-native";
import React from "react";
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function Movies () {
    const { height, width } = useWindowDimensions();
    const shows = ['classroom of the elite', 'spy x family', 'the devil is a part-timer!', 'one punch man', 'title,5', 'title5', 'title6']
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
        {episode:'1',url:'qWAG6O9VMs4',title:shows[2]},
        {episode:'2',url:'5B8O_oNnZ9o',title:shows[2]},
        {episode:'3',url:'QLn5t6CQ-TM',title:shows[2]},
        {episode:'4',url:'Ii06dqhCC7M',title:shows[2]},
        {episode:'5',url:'4MzJL3ld-5s',title:shows[2]},
        {episode:'6',url:'ujN4RsVelBI',title:shows[2]},
        {episode:'7',url:'VUe0i22CiLI',title:shows[2]},
        {episode:'8',url:'fdQ6_za2ZpI',title:shows[2]},
        {episode:'9',url:'TMEYPSa9PL0',title:shows[2]},
        {episode:'10',url:'P5BCW0UGn64',title:shows[2]},
        {episode:'11',url:'VURTP8105yA',title:shows[2]},
        {episode:'12',url:'nl28zND5F_o',title:shows[2]},
        {episode:'13',url:'VNzhYa13tjQ',title:shows[2]},
        {episode:'1',url:'VvK6UZWNU2Q',title:shows[3]},
        {episode:'2',url:'2Zk1-G8k66w',title:shows[3]},
        {episode:'3',url:'r6cxwSmwe4A',title:shows[3]},
        {episode:'4',url:'kH9UhKC42xw',title:shows[3]},
        {episode:'5',url:'TByW5-HDYTA',title:shows[3]},
        {episode:'6',url:'3RTjyB_QqvU',title:shows[3]},
        {episode:'7',url:'BwQoGQaI-4Y',title:shows[3]},
        {episode:'8',url:'y9N5hShzmI4',title:shows[3]},
        {episode:'9',url:'4G7k3UFsl4c',title:shows[3]},
        {episode:'10',url:'GhhnJ_6-dC4',title:shows[3]},
        {episode:'11',url:'E15JNW6We1M',title:shows[3]},
        {episode:'12',url:'OtAWpwC2t7I',title:shows[3]},
        {episode:'13',url:'o4VrOXKNf3c',title:shows[3]},
        {episode:'14',url:'jSCA6qr_fNI',title:shows[3]},
        {episode:'15',url:'FOFfivIHxfI',title:shows[3]},
        {episode:'16',url:'U5BSkaKkL3M',title:shows[3]},
        {episode:'17',url:'0pgK-Y6a8KY',title:shows[3]},
        {episode:'18',url:'fqt6xBtyDs4',title:shows[3]},
        {episode:'19',url:'0wyUgRvF9B8',title:shows[3]},
        {episode:'20',url:'-NwcQzoIeP4',title:shows[3]},
        {episode:'21',url:'5Lvwi88VyQo',title:shows[3]},
        {episode:'22',url:'SiB4xsGFjfU',title:shows[3]},
        {episode:'23',url:'ObjkuJYoOBk',title:shows[3]},
        {episode:'24',url:'7ZNCa9yFu-g',title:shows[3]},
        
    ]
    const [currPage, setPage] = useState('YT')
    const [currShow, setCurrShow] = useState(shows[0]);
    const [search,setSearch] = useState('');
    const showsSeparator= () => {
    
      return <View style={{ height: 1,backgroundColor: 'grey',marginHorizontal:10, width:150, alignSelf:'center'}} />;
    };
    //Error: large list - fixed (y)
    const filter=()=>{
      return episodes.filter(episodes => episodes.title===currShow);
    }
    const filterBySearch = () =>{
      return shows.filter(shows => shows.includes(search));
    }
    const printAll= () => {
      
        return (
          <>
          <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={filter()}
          renderItem={({item}) => 
          <SafeAreaView style={{flex:1,paddingHorizontal: 30,borderRightWidth: 4,justifyContent: 'center'}}>
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
  <Text style={{paddingBottom:0,color:'grey'}}>
      Swipe left to see more episodes
      <MaterialCommunityIcons style={{alignSelf:'center'}}name="gesture-swipe-left" size={26} color="black" />
  </Text>
  </SafeAreaView>}
         />
        </>)
    };

    const showOptions = () => {
      return(
        <FlatList
        data={filterBySearch()}
        ItemSeparatorComponent={showsSeparator}
        renderItem={({item}) => 
        <SafeAreaView style={{alignItems:'center',}}>
          <TouchableHighlight onPress={()=>{setCurrShow(item)}}>
            <Text style={styles.titles}>
               {item}
             </Text>
          </TouchableHighlight>
</SafeAreaView>}
       />
      );
    }
    const bottom =() => {
      if(currPage==='Web')
      {alert('Website might show ads while playing video')}
      return(
        <View style={{flexDirection: 'row',backgroundColor:'#bcb8b6' }}>
    <TouchableHighlight onPress={()=>{setPage('YT')}} style={{flex:1}} >
           <Text  style={{fontSize:16,color:'white',textAlignVertical:'center',textAlign:'center',height:50,paddingLeft:20,borderBottomWidth:currPage==='YT'?3:null}}>Youtube Popular</Text>
         </TouchableHighlight>
    <TouchableHighlight onPress={()=>{setPage('Web')}} style={{flex:1}} >
           <Text  style={{fontSize:16,color:'white',textAlignVertical:'center',textAlign:'center',height:50,paddingLeftt:50,borderBottomWidth:currPage==='Web'?3:null}}>Browse more</Text>
         </TouchableHighlight>
    </View>
      );
    }
    const searchBar =() =>{
      return (
        <>
      <AntDesign style={{backgroundColor:'#bcb8b6',borderRightWidth:2,alignSelf:'center'}}name="search1" size={36} color="black" />
      <TextInput
      style={{
          height: 40,
          width: width,
      }}
      autoCapitalize='characters'
      onChangeText={(text) => setSearch(text)}
      placeholder="search title"
      />
      </>
      );
   }
    return(
      
      currPage==='YT'?
    <View style={styles.container}>
      <View style={styles.content}>
        {printAll()}
      </View>
      <View style={{
        height: 40,
        borderTopWidth: 1,
        width: width,
        flexDirection: 'row',
        backgroundColor:'white',
      }}>
        {searchBar()}
      </View>
      <View style={styles.options}>
         {showOptions()}
       </View>
       {bottom()}
    </View>
      :
      <>
      <WebView style = {{width:width,height:300}}source={{ uri: 'https://gogoanime.ar' }} />
      {bottom()}
      </>
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
        backgroundColor: 'white',
        textAlign: 'center',
        width: 500,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        padding: 30,
      },
      options: {
        borderTopWidth: 3,
        flex:1,
        alignSelf: 'center',
        width: 360,
        top:0,
        bottom:0,
      },
      
});