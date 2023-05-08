import React, {Component, useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';


const login = ({ navigation }) => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

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
                    backgroundColor: '#F9F6EE',
                    
               }}>
               <View
                    style={{
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginTop: 50,
                    }}>
                    <Image
                         source={require('../src/images/Logo.png')}
                         style={{
                              width: 150,
                              height: 150,
                              marginBottom: -20,

                              shadowColor: 'black',
                              shadowOffset: { width: 0, height: 2 },
                              shadowOpacity: 0.5,
                              shadowRadius: 4,
                         }} />

                    <Text style={{ fontSize: 24, fontWeight: 'bold',fontFamily: 'SpaceGrotesk' }}>DARSU<Text style={{ color: '#72A152' }}>ARAB</Text></Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20,fontFamily: 'SpaceGrotesk' }}>Log-in</Text>
               </View>


               <Text
                    style={{
                         marginTop: 8,
                         marginLeft: 21,
                         marginBottom: -8,
                         fontFamily: 'SpaceGrotesk'
                    }}
               >Email</Text>
               <View style={{
                    flexDirection: 'row',
                    marginHorizontal: 20,
                    marginTop: 10,
               }}>
                    <View
                         style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: '#ffff',
                              width: 50,
                              borderTopLeftRadius: 5,
                              borderBottomLeftRadius: 5,
                              elevation: 10,

                              shadowColor: 'black',
                              shadowOffset: { width: 0, height: 2 },
                              shadowOpacity: 0.5,
                              shadowRadius: 4,
                         }}>
                         <Icon name="envelope" size={17} color="#111" />
                    </View>
                    <TextInput
                         value={email}
                         style={{
                              backgroundColor: '#ffff',
                              borderTopRightRadius: 5,
                              borderBottomRightRadius: 5,
                              flex: 1,
                              paddingVertical: 10,
                              elevation: 10,
                              paddingLeft: 10,
                              fontFamily: 'SpaceGrotesk',

                              shadowColor: 'black',
                              shadowOffset: { width: 0, height: 2 },
                              shadowOpacity: 0.5,
                              shadowRadius: 4,
                         }}
                         placeholder='Masukan Email'
                         onChangeText={text => setEmail(text)} />
               </View>


               <Text
                    style={{
                         marginTop: 8,
                         marginLeft: 21,
                         marginBottom: -8,
                         fontFamily: 'SpaceGrotesk'
                    }}
               >Password</Text>
               <View style={{
                    flexDirection: 'row',
                    marginHorizontal: 20,
                    marginTop: 10,
               }}>
                    <View
                         style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: '#ffff',
                              width: 50,
                              borderTopLeftRadius: 5,
                              borderBottomLeftRadius: 5,
                              elevation: 10,

                              shadowColor: 'black',
                              shadowOffset: { width: 0, height: 2 },
                              shadowOpacity: 0.5,
                              shadowRadius: 4,
                         }}>
                         <Icon name="lock" size={17} color="#111" />
                    </View>
                    <TextInput
                         value={password}
                         style={{
                              backgroundColor: '#ffffff',
                              borderTopRightRadius: 5,
                              borderBottomRightRadius: 5,
                              flex: 1,
                              paddingVertical: 10,
                              elevation: 10,
                              paddingLeft: 10,
                              fontFamily: 'SpaceGrotesk',

                              shadowColor: 'black',
                              shadowOffset: { width: 0, height: 2 },
                              shadowOpacity: 0.5,
                              shadowRadius: 4,
                         }}
                         placeholder='Masukan Password'
                         onChangeText={text => setPassword(text)}
                         secureTextEntry={true} />
               </View>

               <TouchableOpacity
                    onPress={() => navigation.navigate('home')}
                    style={{
                         backgroundColor: '#72A152',
                         paddingVertical: 10,
                         marginTop: 20,
                         marginHorizontal: 20,
                         borderRadius: 5,
                         elevation: 10,

                         shadowColor: 'black',
                         shadowOffset: { width: 0, height: 2 },
                         shadowOpacity: 0.5,
                         shadowRadius: 4,
                    }}
               >
                    <Text
                         style={{
                              color: '#ffffff',
                              textAlign: 'center',
                              fontWeight: 'bold',
                              fontFamily: 'SpaceGrotesk',
                         }}>
                         Login
                    </Text>
               </TouchableOpacity>

               <View>
                    <TouchableOpacity
                         onPress={() => navigation.navigate('signup')}
                         style={{
                              justifyContent: 'center',
                              marginLeft: 21,
                              marginTop: 5,
                         }}
                    >
                         <Text style={{ color: '#72A152', fontWeight: 'bold', fontFamily: 'SpaceGrotesk' }}>Sign-up</Text>
                    </TouchableOpacity>
               </View>


          </View>
     );
}
export default login;