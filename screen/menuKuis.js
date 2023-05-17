import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';


const menuKuis = ({ navigation }) => {


     
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

               <View style={{ flex: 0.9 }}>
                    <View
                         style={{
                              flexDirection: 'row',
                              marginHorizontal: 20,
                              marginTop: 25,
                         }}>
                         <View>
                              <TouchableOpacity onPress={() => navigation.goBack()}>
                                   <Icon name="chevron-left" size={17} color="#111" />
                              </TouchableOpacity>
                         </View>
                         <Text
                              style={{
                                   fontFamily: 'SpaceGrotesk',
                                   marginLeft: 15,
                                   fontWeight: 'bold'
                              }}
                         >Choose Category Quiz</Text>
                    </View>




                    <View
                    style={{
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginTop: 30,
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
                    <Text style={{ fontSize: 24, fontWeight: 'bold',fontFamily: 'SpaceGrotesk' }}>QUIZ</Text>
                   
               </View>



                    <TouchableOpacity  onPress={() => navigation.navigate('kuisSentence')}>
                         <View style={styles.pilihanMenu}>
                              <View style={styles.iconMeneKuis}>
                                   <Icon name="book-open" size={17} color="#111" />
                              </View>
                              <Text style={styles.tombolMenuKuis}>Sentence</Text>
                         </View>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={() => navigation.navigate('kuisVocab')}>
                         <View style={styles.pilihanMenu}>
                              <View style={styles.iconMeneKuis}>
                                   <Icon name="book-reader" size={17} color="#111" />
                              </View>
                              <Text style={styles.tombolMenuKuis}>Vocabulary</Text>
                         </View>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={() => navigation.navigate('kuisWtoP')}>
                         <View style={styles.pilihanMenu}>
                              <View style={styles.iconMeneKuis}>
                                   <Icon name="images" size={17} color="#111" />
                              </View>
                              <Text style={styles.tombolMenuKuis}>Picture</Text>
                         </View>
                    </TouchableOpacity>
                    

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
                         <TouchableOpacity onPress={() => navigation.navigate('Leaderboard')}
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

const styles = StyleSheet.create({
     iconMeneKuis: {
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
      },
      tombolMenuKuis:{
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
      },
      pilihanMenu: {
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: 20,
      }

});

export default menuKuis;