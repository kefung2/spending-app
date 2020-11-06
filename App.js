import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import 'react-native-gesture-handler';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import profile from './assets/profile.png';
import { TextInput } from "react-native-gesture-handler";

let balence = 10.00;
//let spending= 0;
let income = 1000;

function App() {
  const [spending, setSpending] = useState('')
  return (
    <View style={styles.container}>
      <TouchableOpacity></TouchableOpacity>
      <Image source={profile} style={styles.profile} />
      <Text> ${balence}</Text>
      <Text> ${spending}</Text>
      <TextInput 
        placeholder="I just spended ..."
        onChangeText={spending => setSpending(spending)}
        defaultValue={spending}
      />

      <Button
        title="Button"
        onPress={()=> balence = balence - {spending}} // this is not working
      />
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