// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './screen/login';
import signup from './screen/signUp';
import splashScreen from './screen/splashScreen';
<<<<<<< HEAD
import menuKuis from './screen/menuKuis';
import home from './screen/home'
=======
import materi from './screen/materi';
>>>>>>> b4cde27f44a5667736f433efbf4696c59dfa0b83
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='splashScreen'
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="signup" component={signup} />
        <Stack.Screen name="splashScreen" component={splashScreen} />
<<<<<<< HEAD
        <Stack.Screen name="menuKuis" component={menuKuis} />
        <Stack.Screen name="home" component={home} />
        
=======
        <Stack.Screen name="materi" component={materi} />
>>>>>>> b4cde27f44a5667736f433efbf4696c59dfa0b83
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;