import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import 'react-native-gesture-handler';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import profile from './assets/profile.png';
import { TextInput } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";

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
  };
  console.log(errors);

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  icon: {
    flex: 1,
    width: 24,
    height: 24,
    left: 5,
    top: 5,
    position: 'absolute',
  },
  balenceView: {
    flex: 1,
    width: 200,
    height: 10,
    top: 90,
    alignItems: "center",
  },
  balenceText:{
    fontSize: 50,
    fontWeight: "bold",
    alignSelf:"center",
  },
  inputView: {
    flex: 1,
    width: 100,
    height: 10,
    top: 20,
  },
  input: {
    backgroundColor: 'silver',
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    width: 200,
    padding: 10,
    borderRadius: 4,
    alignSelf: "center",
  },
  buttonView: {
    flex: 1,
    width: 100,
    height: 10,
    top: 10,
  },
  button: {
    marginTop: 40,
    color: 'black',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
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