import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';


const login = ({ navigation }) => {
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
                   
               </View>


              <TouchableOpacity  onPress={() => navigation.navigate('materi')}>
                    <View style={{
                         flexDirection: 'row',
                         marginHorizontal: 20,
                         marginTop: 20,
                    }}>
                         <View
                              style={{
                                   justifyContent: 'center',
                                   alignItems: 'center',
                                   backgroundColor: '#93C572',
                                   width: 50,
                                   borderTopLeftRadius: 5,
                                   borderBottomLeftRadius: 5,
                                   elevation: 10,
                                   

                                   shadowColor: 'black',
                                   shadowOffset: { width: 0, height: 2 },
                                   shadowOpacity: 0.5,
                                   shadowRadius: 4,
                              }}>
                              <Icon name="book" size={17} color="#111" />
                         </View>
                         <Text
                              style={{
                                   backgroundColor: '#93C572',
                                   borderTopRightRadius: 5,
                                   borderBottomRightRadius: 5,
                                   flex: 1,
                                   paddingVertical: 15,
                                   elevation: 10,
                                   paddingLeft: 10,
                                   fontFamily: 'SpaceGrotesk',
                                   fontWeight: "bold",

                                   shadowColor: 'black',
                                   shadowOffset: { width: 0, height: 2 },
                                   shadowOpacity: 0.5,
                                   shadowRadius: 4,
                              }}>
                              Lesson</Text>
                    </View>
               </TouchableOpacity>


              <TouchableOpacity  onPress={() => navigation.navigate('menuKuis')}>
                    <View style={{
                         flexDirection: 'row',
                         marginHorizontal: 20,
                         marginTop: 20,
                    }}>
                         <View
                              style={{
                                   justifyContent: 'center',
                                   alignItems: 'center',
                                   backgroundColor: '#93C572',
                                   width: 50,
                                   borderTopLeftRadius: 5,
                                   borderBottomLeftRadius: 5,
                                   elevation: 10,
                                   

                                   shadowColor: 'black',
                                   shadowOffset: { width: 0, height: 2 },
                                   shadowOpacity: 0.5,
                                   shadowRadius: 4,
                              }}>
                              <Icon name="pen" size={17} color="#111" />
                         </View>
                         <Text
                              style={{
                                   backgroundColor: '#93C572',
                                   borderTopRightRadius: 5,
                                   borderBottomRightRadius: 5,
                                   flex: 1,
                                   paddingVertical: 15,
                                   elevation: 10,
                                   paddingLeft: 10,
                                   fontFamily: 'SpaceGrotesk',
                                   fontWeight: "bold",

                                   shadowColor: 'black',
                                   shadowOffset: { width: 0, height: 2 },
                                   shadowOpacity: 0.5,
                                   shadowRadius: 4,
                              }}>
                              Quis</Text>
                    </View>
               </TouchableOpacity>
              <TouchableOpacity>
                    <View style={{
                         flexDirection: 'row',
                         marginHorizontal: 20,
                         marginTop: 20,
                    }}>
                         <View
                              style={{
                                   justifyContent: 'center',
                                   alignItems: 'center',
                                   backgroundColor: '#93C572',
                                   width: 50,
                                   borderTopLeftRadius: 5,
                                   borderBottomLeftRadius: 5,
                                   elevation: 10,
                                   

                                   shadowColor: 'black',
                                   shadowOffset: { width: 0, height: 2 },
                                   shadowOpacity: 0.5,
                                   shadowRadius: 4,
                              }}>
                              <Icon name="chart-bar" size={17} color="#111" />
                         </View>
                         <Text
                              style={{
                                   backgroundColor: '#93C572',
                                   borderTopRightRadius: 5,
                                   borderBottomRightRadius: 5,
                                   flex: 1,
                                   paddingVertical: 15,
                                   elevation: 10,
                                   paddingLeft: 10,
                                   fontFamily: 'SpaceGrotesk',
                                   fontWeight: "bold",

                                   shadowColor: 'black',
                                   shadowOffset: { width: 0, height: 2 },
                                   shadowOpacity: 0.5,
                                   shadowRadius: 4,
                              }}>
                              Leaderboard</Text>
                    </View>
               </TouchableOpacity>
              <TouchableOpacity>
                    <View style={{
                         flexDirection: 'row',
                         marginHorizontal: 20,
                         marginTop: 20,
                    }}>
                         <View
                              style={{
                                   justifyContent: 'center',
                                   alignItems: 'center',
                                   backgroundColor: '#93C572',
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
                         <Text
                              style={{
                                   backgroundColor: '#93C572',
                                   borderTopRightRadius: 5,
                                   borderBottomRightRadius: 5,
                                   flex: 1,
                                   paddingVertical: 15,
                                   elevation: 10,
                                   paddingLeft: 10,
                                   fontFamily: 'SpaceGrotesk',
                                   fontWeight: "bold",

                                   shadowColor: 'black',
                                   shadowOffset: { width: 0, height: 2 },
                                   shadowOpacity: 0.5,
                                   shadowRadius: 4,
                              }}>
                              Profil</Text>
                    </View>
               </TouchableOpacity>


             
          </View>
     );
}
export default login;