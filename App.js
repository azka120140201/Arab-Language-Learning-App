// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './screen/login';
import signup from './screen/signUp';
import splashScreen from './screen/splashScreen';
import menuKuis from './screen/menuKuis';
import home from './screen/home';
import materi from './screen/materi';
import isiMateri from './screen/isiMateri';
// import profil from './screen/profil';
// import Leaderboard from './screen/leaderboard';
import kuisListening from './screen/kuisListening';
import kuisVocab from './screen/kuisVocab';
import kuisSentence from './screen/kuisSentence';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='home'
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="signup" component={signup} />
        <Stack.Screen name="splashScreen" component={splashScreen} />
        <Stack.Screen name="materi" component={materi} />
        <Stack.Screen name="isiMateri" component={isiMateri} />
        <Stack.Screen name="menuKuis" component={menuKuis} />
        <Stack.Screen name="home" component={home} />
        {/* <Stack.Screen name="profil" component={profil} /> */}
        {/* <Stack.Screen name="Leaderboard" component={Leaderboard} /> */}
        <Stack.Screen name="kuisListening" component={kuisListening} />
        <Stack.Screen name="kuisVocab" component={kuisVocab} />
        <Stack.Screen name="kuisSentence" component={kuisSentence} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;