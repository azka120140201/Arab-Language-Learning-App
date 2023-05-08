// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './screen/login';
import signup from './screen/signUp';
import splashScreen from './screen/splashScreen';
import menuKuis from './screen/menuKuis';
import home from './screen/home';
import materi from './screen/materi';
<<<<<<< HEAD
import profil from './screen/profil';

=======
import isiMateri from './screen/isiMateri';
>>>>>>> ce40d71adda6a768c24b0645d506f034d0df7d97
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
        <Stack.Screen name="menuKuis" component={menuKuis} />
        <Stack.Screen name="home" component={home} />
<<<<<<< HEAD
        <Stack.Screen name="profil" component={profil} />
=======
        
>>>>>>> ce40d71adda6a768c24b0645d506f034d0df7d97
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;