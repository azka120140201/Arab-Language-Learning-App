import React, {Component, useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';



const signup = ({navigation}) => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [nama, setNama] = useState('');
     const [ConfirmPassword, setConfirmPassword] = useState('');

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
                    backgroundColor: '#F9F6EE'
               }}>
               
                    <TouchableOpacity  
                         onPress={() => navigation.goBack()}
                         style={{
                              marginTop: 21,
                              marginLeft: 21
                         }}>
                         <Icon name="chevron-left" size={17} color="#111"/> 
                    </TouchableOpacity>
               

               <View 
                    style={{
                         justifyContent: 'center', 
                         alignItems: 'center', 
                         marginTop: -11, 
                         }}
               >
                    <Image 
                         source={require('../src/images/Logo.png')}
                         style={{width: 150, 
                              height: 150,
                              marginBottom: -20,

                              shadowColor: 'black',
                              shadowOffset: { width: 0, height: 2 },
                              shadowOpacity: 0.5,
                              shadowRadius: 4,
                         }}
                    />
               
                    <Text style={{fontSize: 24, fontWeight: 'bold', fontFamily: 'SpaceGrotesk'}}>DARSU<Text style={{color: '#72A152'}}>ARAB</Text></Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20, fontFamily: 'SpaceGrotesk' }}>Sign-up</Text>
               </View>


               <Text
                    style={{
                         marginTop: 8,
                         marginLeft: 21,
                         marginBottom: -8,
                         fontFamily: 'SpaceGrotesk'
                    }}
               >Nama</Text>
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
                         <Icon name="user" size={17} color="#111" />
                    </View>
                    <TextInput 
                         value={nama}
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
                         placeholder='Masukan Nama'
                         onChangeText={text => setNama(text)}
                    />
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
                         placeholder='Masukan Email'
                         onChangeText={text => setEmail(text)}
                    />
               </View>
               <Text 
                    style={{
                         marginTop: 8,
                         marginLeft: 21,
                         marginBottom: -8
                    }}
               >Password</Text>
               <View style={{
                         flexDirection: 'row',
                         marginHorizontal: 20,
                         marginTop: 10,
                         fontFamily: 'SpaceGrotesk',
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
                         secureTextEntry={true}
                    />
               </View>
               <Text 
                    style={{
                         marginTop: 8,
                         marginLeft: 21,
                         marginBottom: -8
                    }}
               >Confirm Password</Text>
               <View style={{
                         flexDirection: 'row',
                         marginHorizontal: 20,
                         marginTop: 10,
                         fontFamily: 'SpaceGrotesk'
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
                         value={ConfirmPassword}
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
                         placeholder='Konfirmasi Password'
                         onChangeText={text => setConfirmPassword(text)}
                         secureTextEntry={true}
                    />
               </View>

               <TouchableOpacity
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
                              fontFamily: 'SpaceGrotesk'
                         }}>
                         Sing-Up
                    </Text>
               </TouchableOpacity>
          </View>
     );
}
export default signup;