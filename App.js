import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import 'react-native-gesture-handler';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button, Keyboard } from "react-native";
import profile from './assets/profile.png';
import { TextInput } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";
import styles from './styles';

//let balence = 10.00;
//let spending= 0;
let income = 1000;

function App() {
  const [balence, setBalence] = useState(1000)
  const [spending, setSpending] = useState(0)
  const { register, handleSubmit, errors, control } = useForm();
  const onSubmit = data => {
    setBalence(balence - spending)
    setSpending(0)
    this.textInput.clear()
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
        <Image source={profile} style={styles.profile}/>
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
              ref={input => { this.textInput = input }}
            />
          )}
          name="spending"
        />
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <input type="number" placeholder="I Just Spended ..." name="Spending" ref={register}/>

          <button type="submit"> Submit </button>
        </form> */}

      </View>

      {/* View for button */}
      <View style={styles.buttonView}>
        <Button
          color='black'
          title="Button"
          onPress={handleSubmit(onSubmit)}
        />
      </View>

      {/* <Image source={profile} style={styles.profile} />
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
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

export default App;