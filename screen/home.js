import React, {Component, useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const home = ({ navigation }) => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     return (
          <View
               style={{
                    flex: 1,
                    backgroundColor: '#F9F6EE',
               }}
          >
               <View
                    style={{
                         flex: 0.9,
                         alignItems: 'center',
                         marginTop: 0,
                    }}
               >
                    <Image
                         source={require('../src/images/Logo.png')}
                         style={{
                              width: 150,
                              height: 150,
                            
                              marginTop: 60,

                              shadowColor: 'black',
                              shadowOffset: { width: 0, height: 2 },
                              shadowOpacity: 0.5,
                              shadowRadius: 4,
                         }} />

                    <Text style={{ fontSize: 24, fontWeight: 'bold', }}>DARSU<Text style={{ color: '#72A152' }}>ARAB</Text></Text>

                    <TouchableOpacity
                         onPress={() => navigation.navigate('materi')}
                    style={{
                         backgroundColor: '#72A152',
                         paddingVertical: 10,
                         paddingHorizontal: 50,
                         marginTop: 100,
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
                              fontWeight: 'bold'
                         }}>
                         Lesson
                    </Text>
               </TouchableOpacity>
               </View>




               <View
                    style={{
                         flex: 0.1,
                         backgroundColor: '#93C572',
                         borderTopLeftRadius: 15,
                         borderTopRightRadius: 15
                    }}>

                    <View style={{marginTop: 20, flexDirection: 'row'}}>
                         <TouchableOpacity 
                              onPress={() => navigation.navigate('menuKuis')}
                              style={{
                                   flex: 1, 
                                   justifyContent: 'center', 
                                   alignItems: 'center'
                              }}
                         >
                              <Icon name="quidditch" size={20} color="#111"/> 
                         </TouchableOpacity>
                         <TouchableOpacity
                              style={{
                                   flex: 1, 
                                   justifyContent: 'center', 
                                   alignItems: 'center'
                              }}
                         >
                              <Icon name="chart-bar" size={20} color="#111"/> 
                         </TouchableOpacity>
                         <TouchableOpacity
                              style={{
                                   flex: 1, 
                                   justifyContent: 'center', 
                                   alignItems: 'center'
                              }}
                         >
                              <Icon name="user" size={20} color="#111"/> 
                         </TouchableOpacity>
                         
                    </View>     

               </View>


              

          </View>
     );
}
export default home;