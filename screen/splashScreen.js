import React, {Component, useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StackActions } from '@react-navigation/native';


const splashScreen = ({ navigation }) => {
     useEffect(() => {
          setTimeout(() =>{
               navigation.navigate('login')    
          }, 3000);
          
     })
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

                    <Text style={{ fontSize: 24, fontWeight: 'bold', }}>DARSU<Text style={{ color: '#72A152' }}>ARAB</Text></Text>
               </View>
          </View>
     );
}
export default splashScreen;