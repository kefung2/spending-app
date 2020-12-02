import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useRef } from "react";
import {
  Image,
  Text,
  KeyboardAvoidingView,
  View,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import profile from "../assets/profile.png";
import { TextInput } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";
import styles from "../styles/Homestyles";

function HomeScreen({ navigation }) {
  const [balence, setBalence] = useState(10000);
  const [spending, setSpending] = useState(0);
  const { register, handleSubmit, errors, control, defaultValue } = useForm();
  const inputRef = useRef(null);
  const onSubmit = () => {
    setBalence(balence - spending);
    setSpending(0);
    inputRef.current.clear();
  };
  console.log(errors);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        //behavior={Platform.OS == "android" ? "padding" : "height"}
        style={styles.container}
      >
        {/* View for icon */}
        <View style={styles.icon}>
          <Pressable
            onPress={() => {
							navigation.navigate("Profile");
            }}
          >
            {({ pressed }) => <Image source={profile} style={styles.profile} />}
          </Pressable>
        </View>

        {/* View for balence */}
        <View style={styles.balenceView}>
					<Text 
						style={(balence > 0) ? styles.PosText : styles.NegText}
					> 
						${balence}
					</Text>
        </View>

        {/* View for input box */}
        <View style={styles.inputView}>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
								style={styles.input}
								defaultValue={""}
                placeholder="I Just Spended..."
                onBlur={onBlur}
                keyboardType={"numeric"}
                numeric
                onChangeText={(value) => setSpending(value)}
                value={value}
                onSubmitEditing={Keyboard.dismiss}
                ref={inputRef}
                
              />
            )}
            name="spending"
          />
        </View>

        {/* View for button */}
        <View style={styles.buttonView}>
          <Button
            color="black"
            title="Spend"
            onPress={handleSubmit(onSubmit)}
          />
        </View>

        <View style={styles.payroll}>
          <Button color="red" title="Payroll" />
        </View>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default HomeScreen;
