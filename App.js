// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './screen/login';
import signup from './screen/signup';
import splashScreen from './screen/splashScreen';
import menuKuis from './screen/menuKuis';
import home from './screen/home';
import materi from './screen/materi';
import materiBenda from './screen/materiBenda';
import materiHewan from './screen/materiHewan';
import materiKerja from './screen/materiKerja';
import materiKeterangan from './screen/materiKeterangan';
import profil from './screen/profil';
import Leaderboard from './screen/leaderboard';
import kuisVocab from './screen/kuisVocab';
import kuisSentence from './screen/kuisSentence';
import kuisWtoP from './screen/kuisWtoP';
import berhasilSignup from './screen/berhasilSignup';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='splashScreen'
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="splashScreen" component={splashScreen} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="signup" component={signup} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="materi" component={materi} />
        <Stack.Screen name="materiBenda" component={materiBenda} />
        <Stack.Screen name="materiHewan" component={materiHewan} />
        <Stack.Screen name="materiKerja" component={materiKerja} />
        <Stack.Screen name="materiKeterangan" component={materiKeterangan} />
        <Stack.Screen name="menuKuis" component={menuKuis} />
        <Stack.Screen name="profil" component={profil} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
        <Stack.Screen name="kuisVocab" component={kuisVocab} />
        <Stack.Screen name="kuisSentence" component={kuisSentence} />
        <Stack.Screen name="kuisWtoP" component={kuisWtoP} />
        <Stack.Screen name="berhasilSignup" component={berhasilSignup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;