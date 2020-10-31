import { StatusBar } from "expo-status-bar";
import React from "react";
import 'react-native-gesture-handler';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import profile from './assets/profile.png';

function App() {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.profile} />
      <Text> Open up App.js to start working on your app! 
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  profile:{
    width: 50, 
    height: 50,
    position: 'absolute',
    left: 20,
    right: 0,
    top: 30,
    bottom: 0,
  }
});

export default App;