import React, {Component, useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const login = (navigation) => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [nama, setNama] = useState('');
     const [ConfirmPassword, setConfirmPassword] = useState('');
     return (
          <View 
               style={{
                    flex: 1, 
                    backgroundColor: '#F9F6EE', 
               }}
          >
               <View 
                    style={{
                         justifyContent: 'center', 
                         alignItems: 'center', 
                         marginTop: 10, 
                         }}
               >
                    <Image 
                         source={require('../src/images/Logo.png')}
                         style={{width: 150, 
                              height: 150,
                              marginBottom: -20
                         }}
                    />
               
                    <Text style={{fontSize: 24, fontWeight: 'bold', }}>DARSU<Text style={{color: '#72A152'}}>ARAB</Text></Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Sign-up</Text>
               </View>


               <Text
                    style={{
                         marginTop: 8,
                         marginLeft: 21,
                         marginBottom: -8
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
                         }}>
                         <Icon name="user" size={25} color="#bdbdbd" />
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
                         }}
                         placeholder='Masukan Nama'
                         onChangeText={text => setNama(text)}
                    />
               </View>


               <Text 
                    style={{
                         marginTop: 8,
                         marginLeft: 21,
                         marginBottom: -8
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
                         }}>
                         <Icon name="envelope" size={25} color="#bdbdbd" />
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
                         }}>
                         <Icon name="lock" size={25} color="#bdbdbd" />
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
                         }}>
                         <Icon name="lock" size={25} color="#bdbdbd" />
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
                    }}
               >
                    <Text 
                         style={{
                              color: '#ffffff',
                              textAlign: 'center',
                              fontWeight: 'bold'
                         }}>
                         Sing-Up
                    </Text>
               </TouchableOpacity>
          </View>
     );
}
export default login;