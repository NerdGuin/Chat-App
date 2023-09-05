import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={sidebar.container}>
        <Text style={sidebar.title}>WhatsApp 2</Text>
        <View style={sidebar.list}>
          <Ionicons name="search-sharp" size={20} color="white" />
          <Entypo name="dots-three-vertical" size={20} color="white" />
        </View>
        <View style={sidebar2.container}>
          <View style={sidebar2.list}>
            <MaterialCommunityIcons name='account-group' size={24} color='white' />
            <View style={sidebar2.button}><Text style={sidebar2.buttonText}>CHATS</Text></View>
            <View style={sidebar2.button}><Text style={sidebar2.buttonText}>STATUS</Text></View>
          </View>
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

const sidebar = StyleSheet.create({
  container: {
    backgroundColor: '#01816A',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 25,
    width: '100%',
    height: 64
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
    top: 64,
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