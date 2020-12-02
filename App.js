import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './page/HomeScreen';
import ProfileScreen from './page/ProfileScreen';
import UpdateScreen from './page/UpdateScreen';
import HistoryScreen from './page/HistoryScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Update" component={UpdateScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;