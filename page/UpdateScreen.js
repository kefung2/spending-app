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
  const { register, handleSubmit, errors, control, defaultValue } = useForm();
  const inputRef = useRef(null);
  const onSubmit = () => {
    Keyboard.dismiss;
    inputRef.current.clear();
  };

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
          <View style={styles.income}>
            <Text>Your current income is:</Text>
            <Text style={styles.incomeText}>${income}</Text>
          </View>

          <View style={styles.inputView}>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  defaultValue={""}
                  placeholder="My New Monthly Income is..."
                  onBlur={onBlur}
                  keyboardType={"numeric"}
                  numeric
                  onChangeText={(value) => setIncome(value)}
                  value={value}
                  onSubmitEditing={Keyboard.dismiss}
                  ref={inputRef}
                  
                />
              )}
              name="update"
            />
          </View>

          <View style={styles.updateButton}>
            <Button
              color="black"
              title="Done"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default UpdateScreen;