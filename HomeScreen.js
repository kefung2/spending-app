import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState, useRef} from "react";
import { Image, Text, TouchableOpacity, View, Button, Keyboard, NativeModules, Pressable } from "react-native";
import profile from './assets/profile.png';
import { TextInput } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";
import styles from './styles';

function HomeScreen({ navigation }) {
  const [balence, setBalence] = useState(1000)
  const [spending, setSpending] = useState(0)
  const { register, handleSubmit, errors, control } = useForm();
  const inputRef =  useRef(null);
  const onSubmit = () => {
    setBalence(balence - spending)
    setSpending(0)
    inputRef.current.clear()
  };
  console.log(errors);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
  };

  const _keyboardDidHide = () => {
  };

  return (
    <View style={styles.container}>

      {/* View for icon */}
      <View style={styles.icon}>
        <Pressable 
          onPress={() => {
            console.log("Press");
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : 'white'
            },
            styles.wrapperCustom
          ]}>
          {({ pressed }) => (
            <Image source={profile} style={styles.profile}/>
          )}
        </Pressable>
      </View>

      {/* View for balence */}
      <View style={styles.balenceView}>
        <Text style={styles.balenceText}> ${balence}</Text>
      </View>

      {/* View for input box */}
      <View style={styles.inputView}>
        <Controller         
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              placeholder="I Just Spended..."
              onBlur={onBlur}
              keyboardType={'numeric'}
              numeric
              onChangeText={value => setSpending(value)}
              value={value}
              onSubmitEditing={Keyboard.dismiss}
              ref={inputRef}
              defaultValue=""
            />
          )}
          name="spending"
        />
      </View>

      {/* View for button */}
      <View style={styles.buttonView}>
        <Button
          color='black'
          title="Button"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default HomeScreen;