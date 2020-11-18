import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState, useRef} from "react";
import { Image, Text, TouchableOpacity, View, Button, Keyboard, NativeModules, Pressable } from "react-native";
//import profile from './assets/profile.png';
import { TextInput } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";
import styles from '../styles';

function UpdateScreen ({navigation}) {
  return(
    <View style={styles.container}>
        <Text>Update Page</Text>
    </View>
  );
}
export default UpdateScreen;