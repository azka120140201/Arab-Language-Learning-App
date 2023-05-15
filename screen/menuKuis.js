import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const menuKuis = ({ navigation }) => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     return (
          <View
               style={{
                    flex: 1,
                    backgroundColor: '#F9F6EE',
               }}>

               <View style={{ flex: 0.9 }}>
                    <View
                         style={{
                              flexDirection: 'row',
                              marginHorizontal: 20,
                              marginTop: 25,
                         }}>
                         <View>
                              <TouchableOpacity
                                   onPress={() => navigation.goBack()}
                              >
                                   <Icon name="chevron-left" size={17} color="#111" />
                              </TouchableOpacity>
                         </View>
                         <Text
                              style={{
                                   marginLeft: 15,
                                   fontWeight: 'bold'
                              }}
                         >Choose Category Quiz</Text>
                    </View>

                    <View
                         style={{
                              justifyContent: 'center',
                              alignItems: 'center'
                         }}
                    >
                         <View
                              style={{
                                   flexDirection: 'row',
                                   marginHorizontal: 20,
                                   marginTop: 100,
                              }}>
                              <TouchableOpacity onPress={() => navigation.navigate('kuisListening')}>

                                   <Image
                                        source={require('../src/images/headphones@3x.png')}
                                        style={{
                                             width: 80,
                                             height: 80,
                                             backgroundColor: '#93C572',
                                             borderRadius: 12,
                                             marginRight: 5,
                                        }}
                                   />
                                   <Text
                                        style={{
                                             marginRight: 5,
                                             fontWeight: 'bold'
                                        }}
                                   >Listening</Text>
                              </TouchableOpacity>

                              <TouchableOpacity onPress={() => navigation.navigate('kuisSentence')}>
                                   <Image
                                        source={require('../src/images/search-database@3x.png')}
                                        style={{
                                             width: 80,
                                             height: 80,
                                             backgroundColor: '#93C572',
                                             borderRadius: 12,
                                             marginLeft: 5,
                                        }}
                                   />
                                   <Text
                                        style={{
                                             marginLeft: 5,
                                             fontWeight: 'bold'
                                        }}
                                   >Sentence</Text>
                              </TouchableOpacity>
                         </View>

                         <View
                              style={{
                                   flexDirection: 'row',
                                   marginHorizontal: 20,
                                   marginTop: 25,
                              }}>

                              <TouchableOpacity onPress={() => navigation.navigate('kuisVocab')}>
                                   <Image
                                        source={require('../src/images/books@3x.png')}
                                        style={{
                                             width: 80,
                                             height: 80,
                                             backgroundColor: '#93C572',
                                             borderRadius: 12,
                                             marginRight: 5,
                                        }} />
                                   <Text
                                        style={{
                                             marginRight: 5,
                                             fontWeight: 'bold'
                                        }}
                                   >Vocabula</Text>
                              </TouchableOpacity>

                              <TouchableOpacity>
                                   <Image
                                        source={require('../src/images/camera-identification@3x.png')}
                                        style={{
                                             width: 80,
                                             height: 80,
                                             backgroundColor: '#93C572',
                                             borderRadius: 12,
                                             marginLeft: 5,
                                        }}
                                   />
                                   <Text
                                        style={{
                                             marginLeft: 5,
                                             fontWeight: 'bold'
                                        }}
                                   >picture</Text>
                              </TouchableOpacity>
                         </View>

                    </View>
               </View>

               <View
                    style={{
                         flex: 0.1,
                         backgroundColor: '#93C572',
                         borderTopLeftRadius: 15,
                         borderTopRightRadius: 15
                    }}>
                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                         <TouchableOpacity
                              onPress={() => navigation.navigate('home')}
                              style={{
                                   flex: 1,
                                   justifyContent: 'center',
                                   alignItems: 'center'
                              }}
                         >
                              <Icon name="home" size={20} color="#111" />
                         </TouchableOpacity>
                         <TouchableOpacity
                              onPress={() => navigation.navigate('materi')}
                              style={{
                                   flex: 1,
                                   justifyContent: 'center',
                                   alignItems: 'center'
                              }}
                         >
                              <Icon name="book" size={20} color="#111" />
                         </TouchableOpacity>
                         <TouchableOpacity
                              style={{
                                   flex: 1,
                                   justifyContent: 'center',
                                   alignItems: 'center'
                              }}
                         >
                              <Icon name="chart-bar" size={20} color="#111" />
                         </TouchableOpacity>
                         <TouchableOpacity
                              onPress={() => navigation.navigate('profil')}
                              style={{
                                   flex: 1,
                                   justifyContent: 'center',
                                   alignItems: 'center'
                              }}
                         >
                              <Icon name="user" size={20} color="#111" />
                         </TouchableOpacity>

                    </View>


               </View>
          </View>

     );
}
export default menuKuis;