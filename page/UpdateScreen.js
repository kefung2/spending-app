import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState, useRef} from "react";
import { Image, Text, TouchableOpacity, View, Button, Keyboard,   TouchableWithoutFeedback, Pressable } from "react-native";
//import profile from './assets/profile.png';
import { TextInput } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";
import styles from '../styles/Updatestyle';

function UpdateScreen ({navigation}) {
  const [income, setIncome] = useState(1000);
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
          <View style={styles.income}>
            <Text>Your current income is:</Text>
            <Text>${income}</Text>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default UpdateScreen;