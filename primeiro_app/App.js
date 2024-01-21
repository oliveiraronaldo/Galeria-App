import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Perfil from './modulos/Head';
import Body from './modulos/Body';

export default function App() {
  return (
    <View contentContainerStyle={styles.container} style={styles.backgound}>
      <Perfil />
      <Body />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backgound:{
    backgroundColor:"#edeae0",
    flex:1
  }
});
