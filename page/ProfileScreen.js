import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState, useRef} from "react";
import { Image, Text, TouchableOpacity, View, Button, Keyboard, NativeModules, Pressable } from "react-native";
import profile from '../assets/profile.png';
import { TextInput } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";
import styles from '../styles/Profilestyle';

function ProfileScreen ({navigation}) {
  return(
    <View style={styles.container}>
        {/* View for Profile Pic */}
        <View style={styles.profileIcon}>
          <Image source={profile} style={styles.profile} />
        </View>

        <View style={styles.historyButton}>
          <Button title='History'
            onPress={() => {
              navigation.navigate("History");
            }}
          />
        </View>

        <View style={styles.updateButton}>
          <Button title='Update Button'
            onPress={() => {
              navigation.navigate("Update");
            }}
          />
        </View>
    </View>
  );
}
export default ProfileScreen;