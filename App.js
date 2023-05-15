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
import materiSentence from './screen/materiSentence';
// import materiListening from './screen/materiListening';
// import materiVocabulary from './screen/materiVocabulary';
// import materiWtoP from './screen/materiWtoP';
// import profil from './screen/profil';
import Leaderboard from './screen/leaderboard';
import kuisListening from './screen/kuisListening';
import kuisVocab from './screen/kuisVocab';
import kuisSentence from './screen/kuisSentence';
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
        <Stack.Screen name="materiSentence" component={materiSentence} />
        {/* <Stack.Screen name="materiListening" component={materiListening} />
        <Stack.Screen name="materiVocabulary" component={materiVocabulary} />
        <Stack.Screen name="materiWtoP" component={materiWtoP} /> */}
        <Stack.Screen name="menuKuis" component={menuKuis} />
        {/* <Stack.Screen name="profil" component={profil} /> */}
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
        <Stack.Screen name="kuisListening" component={kuisListening} />
        <Stack.Screen name="kuisVocab" component={kuisVocab} />
        <Stack.Screen name="kuisSentence" component={kuisSentence} />
        <Stack.Screen name="berhasilSignup" component={berhasilSignup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;