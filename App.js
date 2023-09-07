import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={sidebar.container}>
        <Text style={sidebar.title}>Communital</Text>
        <View style={sidebar.list}>
          <Ionicons name='search-sharp' size={20} color='white' />
          <Entypo name='dots-three-vertical' size={20} color='white' />
        </View>
        <View style={sidebar2.container}>
          <View style={sidebar2.list}>
            <TouchableOpacity style={sidebar2.button}><Text style={sidebar2.buttonText}>CHATS</Text></TouchableOpacity>
            <TouchableOpacity style={sidebar2.button}><Text style={sidebar2.buttonText}>STATUS</Text></TouchableOpacity>
            <TouchableOpacity style={sidebar2.button}><Text style={sidebar2.buttonText}>ABOUT</Text></TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={chats.container}>
        <View style={chats.chat}>
          <Image style={chats.avatar} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/024/059/039/original/digital-art-of-a-cat-head-cartoon-with-sunglasses-illustration-of-a-feline-avatar-wearing-glasses-vector.jpg' }}></Image>
          <Text style={chats.title}>João</Text>
          <Text style={chats.subtitle}>Beleza!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
        </View>

        <View style={chats.chat}>
          <Image style={chats.avatar} source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/9292244-default-avatar-icon-vector-of-social-media-user-vetor.jpg' }}></Image>
          <Text style={chats.title}>Maria</Text>
          <Text style={chats.subtitle}>Oi, tudo bem?</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const chats = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 128,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    paddingTop: 16,
  },
  chat: {
    position: 'relative',
    width: '100%',
    height: 64,
    justifyContent: 'center',
    borderBottomWidth: 0.3,
  },
  avatar: {
    backgroundColor: 'blue',
    width: 48,
    height: 48,
    position: 'absolute',
    left: 12,
    borderRadius: 50
  },
  title: {
    position: 'absolute',
    color: '#000',
    fontSize: 25,
    left: 70,
    top: 8,
  },
  subtitle: {
    position: 'absolute',
    color: '#000',
    fontSize: 20,
    left: 72,
    top: 30,
    maxWidth: 256,
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
    height: 128
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
    gap: 8,
  },
  buttonSelected: {
    marginBottom: -3,
    borderBottomWidth: 3,
    borderBottomColor: 'white'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: 50,
    width: 64,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
})