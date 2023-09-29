import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import Swiper from 'react-native-swiper';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [chatList, setChats] = useState([]);
  const [isPage, setPage] = useState(0); // 0=CHATS | 1=STATUS | 2=ABOUT
  const swiperRef = useRef(null);

  const addChat = (e) => {
    if (!e.name) e.name = 'Sem nome';
    if (!e.lastMessage) e.lastMessage = '';
    const newChat = {
      id: Math.floor(Math.random() * 99999),
      name: e.name,
      lastMessage: e.lastMessage
    };
    setChats([...chatList, newChat]);
  };

  const goToSlide = (slideIndex) => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(slideIndex - swiperRef.current.state.index);
    }
  };

  function changePage(e) {
    setPage(e);
    goToSlide(e);
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log('Page: '+isPage);
  //   }, 800);
  // });

  function Sidebar() {
    return (
      <View style={sidebar.container}>
        <Text style={sidebar.title} onPress={() => { addChat({ name: 'Daniel', lastMessage: 'Okay.' }) }}>Chat App</Text>
        <View style={sidebar.list}>
          <Ionicons name='search-sharp' size={20} color='white'/>
          <Entypo name='dots-three-vertical' size={20} color='white' />
        </View>
        <View style={sidebar2.container}>
          <View style={sidebar2.list}>
            <TouchableOpacity style={[isPage==0 && sidebar2.buttonSelected, isPage!=0 && sidebar2.button]} onPress={() => {changePage(0)}}><Text style={sidebar2.buttonText}>CHATS</Text></TouchableOpacity>
            <TouchableOpacity style={[isPage==1 && sidebar2.buttonSelected, isPage!=1 && sidebar2.button]} onPress={() => {changePage(1)}}><Text style={sidebar2.buttonText}>STATUS</Text></TouchableOpacity>
            <TouchableOpacity style={[isPage==2 && sidebar2.buttonSelected, isPage!=2 && sidebar2.button]} onPress={() => {changePage(2)}}><Text style={sidebar2.buttonText}>ABOUT</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function ChatsPage() {
    return (
      <View style={chats.container}>
        <View style={chats.chat}>
          <Image style={chats.avatar} source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/9292244-default-avatar-icon-vector-of-social-media-user-vetor.jpg' }}></Image>
          <Text style={chats.title} numberOfLines={1}>Sophia</Text>
          <Text style={chats.subtitle} numberOfLines={1}>Hi, how are you?</Text>
        </View>
        <View style={chats.chat}>
          <Image style={chats.avatar} source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/9292244-default-avatar-icon-vector-of-social-media-user-vetor.jpg' }}></Image>
          <Text style={chats.title}>Sophia 2</Text>
          <Text style={chats.subtitle} numberOfLines={1}>Hi, how are youeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee?</Text>
        </View>
        {chatList.map((chat, index) => (
          <View style={chats.chat} key={index}>
            <Image style={chats.avatar} source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/9292244-default-avatar-icon-vector-of-social-media-user-vetor.jpg' }}></Image>
            <Text style={chats.title} numberOfLines={1}>{chat.name}</Text>
            <Text style={chats.subtitle} numberOfLines={1}>{chat.lastMessage}</Text>
          </View>
        ))}
      </View>
    );
  }

  function StatusPage() {
    return (
      <View style={chats.container}>
        <Text>Page under development</Text>
      </View>
    );
  }

  function AboutPage() {
    return (
      <View style={chats.container}>
        <Text>Page under development</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Sidebar />
      <Swiper ref={swiperRef} style={styles.wrapper} paginationStyle={{display: 'none'}} scrollEnabled={false} >
        <ChatsPage />
        <StatusPage />
        <AboutPage />
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    top: 128
  }
});

export const chats = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    paddingTop: 16,
  },
  chat: {
    position: 'relative',
    width: '100%',
    minHeight: 64,
    justifyContent: 'center',
    borderBottomWidth: 0.3,
    gap: -3,
    paddingTop: 8,
    paddingBottom: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    position: 'absolute',
    left: 12,
    borderRadius: 50
  },
  title: {
    color: '#000',
    fontSize: 25,
    left: 70,
  },
  subtitle: {
    color: '#000',
    fontSize: 20,
    left: 72,
    maxWidth: 290,
  }
});

const sidebar = StyleSheet.create({
  container: {
    backgroundColor: '#01816A',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 128,
    zIndex: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    left: 16
  },
  list: {
    position: 'absolute',
    right: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
});

const sidebar2 = StyleSheet.create({
  container: {
    backgroundColor: '#01816A',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 80,
    width: '100%',
    height: 48
  },
  list: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonSelected: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: 50,
    marginLeft: 4,
    marginRight: 4,

    marginBottom: -6,
    borderBottomWidth: 6,
    borderBottomColor: 'white'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: 50,
    marginLeft: 4,
    marginRight: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
})