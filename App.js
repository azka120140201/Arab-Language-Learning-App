// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './screen/login';
import signup from './screen/signup';
import splashScreen from './screen/splashScreen';
import materi from './screen/materi';
import isiMateri from './screen/isiMateri';
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
        <Stack.Screen name="materi" component={materi} />
        <Stack.Screen name="isiMateri" component={isiMateri} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;