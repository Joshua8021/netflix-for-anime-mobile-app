import { Modal,Image,TextInput,TouchableHighlight,SafeAreaView,Text, View, ScrollView, StyleSheet, FlatList, Button, Pressable, ImageBackground } from "react-native";
import { useWindowDimensions } from 'react-native';
import { useState } from "react";
import React from "react";
import { WebView } from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import Dropdown from 'react-native-select-dropdown'
import { Ionicons } from '@expo/vector-icons'; 


export default function Movies () {
    const gogoUrl= 'https://gogoanime.ar';
    const { height, width } = useWindowDimensions();
    const shows = [
                   {
                   title:'CLASSROOM OF THE ELITE',
                   trailer:'Bp2nNZPNegE',
                   banner:'https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/06/classroomoftheeliteseason2_museasia-1-e1656139127311.jpg?resize=696%2C391&ssl=1',
                   synop:'Koudo Ikusei Senior High School is a leading prestigious school with state-of-the-art facilities where nearly 100% of students go on to university or find employment. The students there have the freedom to wear any hairstyle and bring any personal effects they desire. Koudo Ikusei is a paradise-like school, but the truth is that only the most superior of students receive favorable treatment. Ayanokouji Kiyotaka is a student of D-class, which is where the school dumps its "inferior" students in order to ridicule them. For a certain reason, Kiyotaka was careless on his entrance examination, and was put in D-class. After meeting Horikita Suzune and Kushida Kikyou, two other students in his class, Kiyotaka s situation begins to change.'
                  },
                   {
                    title:'SPY X FAMILY',
                    trailer: 'hQJ0wciG6fY',
                    banner:'https://animecorner.me/wp-content/uploads/2021/10/spy-x-family-anime.jpg?ezimgfmt=ng%3Awebp%2Fngcb21%2Frs%3Adevice%2Frscb21-1',
                    synop: ' For the agent known as "Twilight," no order is too tall if it is for the sake of peace. Operating as Westalis master spy, Twilight works tirelessly to prevent extremists from sparking a war with neighboring country Ostania. For his latest mission, he must investigate Ostanian politician Donovan Desmond by infiltrating his son s school: the prestigious Eden Academy. Thus, the agent faces the most difficult task of his career: get married, have a child, and play family. Twilight, or "Loid Forger," quickly adopts the unassuming orphan Anya to play the role of a six-year-old daughter and prospective Eden Academy student. For a wife, he comes across Yor Briar, an absent-minded office worker who needs a pretend partner of her own to impress her friends. However, Loid is not the only one with a hidden nature. Yor moonlights as the lethal assassin "Thorn Princess." For her, marrying Loid creates the perfect cover. Meanwhile, Anya is not the ordinary girl she appears to be; she is an esper, the product of secret experiments that allow her to read minds. Although she uncovers their true identities, Anya is thrilled that her new parents are cool secret agents! She would never tell them, of course. That would ruin the fun. Under the guise of "The Forgers," the spy, the assassin, and the esper must act as a family while carrying out their own agendas. Although these liars and misfits are only playing parts, they soon find that family is about far more than blood relations.',
                  },
                   {
                    title:'THE DEVIL IS A PART-TIMER!',
                    trailer: 'LtudWW5_4Do',
                    banner:'https://wallpapercave.com/wp/wp2184446.jpg',
                    synop: 'Devil King Sadao is only one step away from conquering the world when he is beaten by Hero Emilia and forced to drift to the other world: modern-day Tokyo. As “conquering the world” are the only skills the Devil King possesses—and are obviously unnecessary in his new situation—he must work as a freeter to pay for his living expenses!'
                  },
                   {
                   title:'ONE PUNCH MAN', 
                   trailer:'-SWHxmoIrxw' ,
                   banner: 'https://c4.wallpaperflare.com/wallpaper/519/207/806/saitama-one-punch-man-anime-wallpaper-preview.jpg',
                   synop: 'In this new action-comedy, everything about a young man named Saitama screams "AVERAGE," from his lifeless expression, to his bald head, to his unimpressive physique. However, this average-looking fellow doesn t have your average problem... He s actually a superhero that s looking for tough opponents! The problem is, every time he finds a promising candidate he beats the snot out of them in one punch. Can Saitama finally find an evil villain strong enough to challenge him? Follow Saitama through his hilarious romps as he searches for new bad guys to challenge!'
                  },
                  ]
    const episodes=[
        {episode:'1',url:'RM9shhtJ_do',title:shows[0].title},
        {episode:'2',url:'-PhAnSh9cIU',title:shows[0].title},
        {episode:'3',url:'Nlb2FEScXBo',title:shows[0].title},
        {episode:'4',url:'lJCycPlljns',title:shows[0].title},
        {episode:'5',url:'nfWrHCdBQu0',title:shows[0].title},
        {episode:'6',url:'Cxi3Lc4eW3U',title:shows[0].title},
        {episode:'7',url:'Ewclo0bValk',title:shows[0].title},
        {episode:'8',url:'cK8V3LSFvX0',title:shows[0].title},
        {episode:'9',url:'00qE5_C4qPM',title:shows[0].title},
        {episode:'10',url:'Q9oWQlC8G_s',title:shows[0].title},
        {episode:'11',url:'2mkDWrdybhA',title:shows[0].title},
        {episode:'12',url:'DzznLoRH7AM',title:shows[0].title},
        {episode:'1',url:'-Ivz-tSWRmY',title:shows[1].title},
        {episode:'2',url:'hVmK9HJmZJg',title:shows[1].title},
        {episode:'3',url:'Y5dp7m4VKb8',title:shows[1].title},
        {episode:'4',url:'_wils9uaT2o',title:shows[1].title},
        {episode:'5',url:'KjRV8aNMp-g',title:shows[1].title},
        {episode:'6',url:'IHS8v44dPjI',title:shows[1].title},
        {episode:'7',url:'W7KxmmGLdKI',title:shows[1].title},
        {episode:'8',url:'R86xXFjhWWM',title:shows[1].title},
        {episode:'9',url:'BIwkObJE9gQ',title:shows[1].title},
        {episode:'10',url:'6oFVojPj_zY',title:shows[1].title},
        {episode:'11',url:'fGdTKRfMhx0',title:shows[1].title},
        {episode:'12',url:'f14z5xfvQqc',title:shows[1].title},
        {episode:'1',url:'qWAG6O9VMs4',title:shows[2].title},
        {episode:'2',url:'5B8O_oNnZ9o',title:shows[2].title},
        {episode:'3',url:'QLn5t6CQ-TM',title:shows[2].title},
        {episode:'4',url:'Ii06dqhCC7M',title:shows[2].title},
        {episode:'5',url:'4MzJL3ld-5s',title:shows[2].title},
        {episode:'6',url:'ujN4RsVelBI',title:shows[2].title},
        {episode:'7',url:'VUe0i22CiLI',title:shows[2].title},
        {episode:'8',url:'fdQ6_za2ZpI',title:shows[2].title},
        {episode:'9',url:'TMEYPSa9PL0',title:shows[2].title},
        {episode:'10',url:'P5BCW0UGn64',title:shows[2].title},
        {episode:'11',url:'VURTP8105yA',title:shows[2].title},
        {episode:'12',url:'nl28zND5F_o',title:shows[2].title},
        {episode:'13',url:'VNzhYa13tjQ',title:shows[2].title},
        {episode:'1',url:'VvK6UZWNU2Q',title:shows[3].title},
        {episode:'2',url:'2Zk1-G8k66w',title:shows[3].title},
        {episode:'3',url:'r6cxwSmwe4A',title:shows[3].title},
        {episode:'4',url:'kH9UhKC42xw',title:shows[3].title},
        {episode:'5',url:'TByW5-HDYTA',title:shows[3].title},
        {episode:'6',url:'3RTjyB_QqvU',title:shows[3].title},
        {episode:'7',url:'BwQoGQaI-4Y',title:shows[3].title},
        {episode:'8',url:'y9N5hShzmI4',title:shows[3].title},
        {episode:'9',url:'4G7k3UFsl4c',title:shows[3].title},
        {episode:'10',url:'GhhnJ_6-dC4',title:shows[3].title},
        {episode:'11',url:'E15JNW6We1M',title:shows[3].title},
        {episode:'12',url:'OtAWpwC2t7I',title:shows[3].title},
        {episode:'13',url:'o4VrOXKNf3c',title:shows[3].title},
        {episode:'14',url:'jSCA6qr_fNI',title:shows[3].title},
        {episode:'15',url:'FOFfivIHxfI',title:shows[3].title},
        {episode:'16',url:'U5BSkaKkL3M',title:shows[3].title},
        {episode:'17',url:'0pgK-Y6a8KY',title:shows[3].title},
        {episode:'18',url:'fqt6xBtyDs4',title:shows[3].title},
        {episode:'19',url:'0wyUgRvF9B8',title:shows[3].title},
        {episode:'20',url:'-NwcQzoIeP4',title:shows[3].title},
        {episode:'21',url:'5Lvwi88VyQo',title:shows[3].title},
        {episode:'22',url:'SiB4xsGFjfU',title:shows[3].title},
        {episode:'23',url:'ObjkuJYoOBk',title:shows[3].title},
        {episode:'24',url:'7ZNCa9yFu-g',title:shows[3].title},
        
    ]
    const [synopVis, setSynopVis] = useState(false);
    const [currPage, setPage] = useState('YT')
    const [currShow, setCurrShow] = useState(shows[0].title);
    const [search,setSearch] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const [displayEpisodes, setDisplayEpisodes] = useState(false);
    const [episodeNum, setEpisodeNum] = useState('1');
    const showsSeparator= () => {
      return <View style={{ width: 10,backgroundColor: 'black',}} />;
    };
    const filterEpisodesByDropSelect =() =>{
      return episodes.filter(episodes => episodes.title===currShow).map((episodes)=>episodes.episode);
    }
    const filter=()=>{
      //filters videos to be rendered when the title is clicked so that it only shows clicked anime title
      return episodes.filter(episodes => episodes.title===currShow&&episodes.episode===episodeNum);
    }
    const filterBySearch = () =>{
      //returns shows with searched keywords
      return shows.filter(shows => shows.title.includes(search.toUpperCase()));
    }
    const PrintAll= () => {
      //Vide content layout
        return (
          <>
          <FlatList
          style={{backgroundColor:'black'}}
          showsHorizontalScrollIndicator={false}
          data={filter()}
          renderItem={({item}) => 
          <SafeAreaView style={{
                               borderColor:'black',
                               backgroundColor:'black',}}>
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
  </SafeAreaView>}
         />
        
        </>)
    };
   //show titles layout
    const showOptions = () => {
      return(
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={filterBySearch()}
        ItemSeparatorComponent={showsSeparator}
        renderItem={({item}) => 
        <SafeAreaView style={{alignItems:'center', width:width,backgroundColor:'black'}}>
        <Pressable 
          style={{
            width: width,
            alignItems: 'center',
            flexWrap:'wrap',
            backgroundColor: 'black'
          }}
          android_ripple={{color: 'black', borderless: true}} 
          onPress={()=>{setDisplayEpisodes(true)}}
          >
          <ImageBackground
          resizeMode="cover"
            style={{
              
              alignSelf: 'center',
              margin: 10,
              marginTop: 10,
              width: '100%',
              height: (!isTouched)?205:0,
            }}
            source={{
              uri: item.banner,
            }} >
              <AntDesign 
              style={{alignSelf:'center',height: '100%',margin:50,position:"absolute"}}
              name="playcircleo" 
              size={100} 
              color="black" />
              <Text style={{color:'white',
              alignSelf:'center',
              backgroundColor:'black',
              marginTop:160,
              padding:3}}>Click to play</Text>
          </ImageBackground>
          </Pressable>          
          <YoutubePlayer
             play={isTouched}
             height={(isTouched)?205:0}
             width={'100%'}
             videoId={item.trailer}
             volume={50}
             playbackRate={1}
             initialPlayerParams={{
              cc_lang_pref: "us",
              showClosedCaptions: true,
            }}/>
                <Text style={styles.titles}>
                  {item.title}
                </Text>
              <Pressable style={{flexDirection:'row',
              width:'70%',
              margin:5,
              padding: 5,
              justifyContent:'center',
              backgroundColor:'#bcb8b6',
              borderRadius:7}}
              android_ripple={{color: 'black', borderless: true}}
              onPress={()=>{(!isTouched)?setIsTouched(true):setIsTouched(false)}}>
                <Text style={{fontWeight:'bold',fontSize:20,color:'white',}}>
                  Trailer
                </Text>
                <EvilIcons style={{alignSelf:'center'}}name="play" size={32} color="white" />
              </Pressable>
              <Pressable style={{flexDirection:'row',
              width:'70%',
              margin:5,
              padding: 5,
              justifyContent:'center',
              backgroundColor:'#bcb8b6',
              borderRadius:7}}
              android_ripple={{color: 'black', borderless: false}}
              onPress={()=>{setDisplayEpisodes(true);setCurrShow(item.title)}}>
                <Text style={{fontWeight:'bold',fontSize:20,color:'white',}}>
                  Episodes
                </Text>
                <EvilIcons style={{alignSelf:'center'}}name="play" size={32} color="white" />
              </Pressable>
            <ScrollView style={{margin:20}} >
             <Text style={{marginRight:10,marginLeft:20,color:'white'}}>
              {item.synop}
             </Text>
             </ScrollView>
            
        </SafeAreaView>}
       />
       
      );
    }
    //Bottom buttons layout
    const bottom =() => {
      if(currPage==='Web')
      {alert('Website might show ads while playing video')}
      return(
        <View style={{flexDirection: 'row',backgroundColor:'#bcb8b6' }}>
    <TouchableHighlight onPress={()=>{setPage('YT')}} style={{flex:1}} >
           <Text style={{fontSize:16,color:'white',textAlignVertical:'center',textAlign:'center',height:50,paddingLeft:20,borderBottomWidth:currPage==='YT'?3:null}}>Youtube Popular</Text>
         </TouchableHighlight>
    <TouchableHighlight onPress={()=>{setPage('Web')}} style={{flex:1}} >
           <Text  style={{fontSize:16,color:'white',textAlignVertical:'center',textAlign:'center',height:50,paddingLeftt:50,borderBottomWidth:currPage==='Web'?3:null}}>Browse more</Text>
         </TouchableHighlight>
    </View>
      );
    }
    //searchbar layout
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
      //Main Layout
      currPage==='YT'?
    <View style={styles.container}>
      <Modal style={styles.episodeView}
        animationType="fade"
        transparent={false}
        visible={displayEpisodes}
        statusBarTranslucent={false}
        onRequestClose={() => {
          setDisplayEpisodes(false);
        }}
      >
        <View style={{flexDirection: 'column'
        ,width:width
        ,flex:1,
        backgroundColor:'black',
        alignItems:'center'
        }}>
        
        <Pressable 
        android_ripple={{color: 'black', borderless: false}}
        onPress={()=>{ setDisplayEpisodes(false) }}
        style={{marginTop:30}}>
        <Ionicons name="close-circle-outline" size={40} color="white" />
        </Pressable>
      <Text style={{fontSize: 18,color:'white',marginTop:20,marginBottom:15}}>
        Currently playing episode :
      </Text>
      <Dropdown
     dropdownStyle={{borderRadius:7,backgroundColor:'#bcb8b6',}}
     defaultValue={episodeNum}
     data={filterEpisodesByDropSelect()}
     onSelect={setEpisodeNum} />
        </View>
        {PrintAll()}
        </Modal>
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
      <WebView style = {{width:width,height:300}}source={{ uri: gogoUrl }} />
      {bottom()}
      </>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: 0,
    bottom: 0,
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
        height:605,
        backgroundColor: 'whitesmoke',
      },
      titles: {
        textAlign: 'center',
        alignSelf: 'center',
        width: '100%',
        fontWeight: 'bold',
        color: 'whitesmoke',
        fontSize: 24,
      },
      options: {
        borderTopWidth: 1,
        alignSelf: 'flex-end',
        width: '100%',
        height: '86%'
      },
      episodeView: {
        backgroundColor: "black",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      
});