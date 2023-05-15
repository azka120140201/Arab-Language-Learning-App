import React, { useEffect } from 'react';
import { View, Text, Image} from 'react-native';
import { useFonts } from 'expo-font';



const splashScreen = ({ navigation }) => {
     useEffect(() => {
          setTimeout(() =>{
               navigation.navigate('login')    
          }, 3000);
          
     })

     const [loaded] = useFonts({
          SpaceGrotesk: require('../assets/fonts/SpaceGrotesk-VariableFont_wght.ttf'),
        });

     if (!loaded) {
     return null;
     }

     return (
          <View
               style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F9F6EE',
               }}
          >

               <View
                    style={{
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginTop: 50,
                    }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20,fontFamily: 'SpaceGrotesk' }}>Successfully</Text>
               </View>

               <View
                    style={{
                         justifyContent: 'center',
                         alignItems: 'center',
                    }}
               >
                    <Image
                         source={require('../src/images/Logo.png')}
                         style={{
                              width: 150,
                              height: 150,

                              shadowColor: 'black',
                              shadowOffset: { width: 0, height: 2 },
                              shadowOpacity: 0.5,
                              shadowRadius: 4,
                         }} />

                    <Text style={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'SpaceGrotesk' }}>DARSU<Text style={{ color: '#72A152' }}>ARAB</Text></Text>
               </View>
          </View>
     );
}
export default splashScreen;