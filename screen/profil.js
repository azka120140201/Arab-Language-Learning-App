import React, {Component, useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const profil = ({ navigation }) => {
    
     return (
          <View
               style={{
                    flex: 1,
                    backgroundColor: '#F9F6EE',
               }}>
               <View
                    style={{
                         flex: 0.9,
               
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
                              
                         }}>
                         <TouchableOpacity  
                              onPress={() => navigation.goBack()}
                              style={{
                                   backgroundColor: '#ababab',
                                   paddingVertical: 10,
                                   paddingHorizontal: 10,
                                   borderRadius: 50
                              }}>
                              <Icon name="user" size={40} color="#111"/> 
                         </TouchableOpacity>



                    
                    </View>
                   
                    
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
                               onPress={() => navigation.navigate('home')}
                              style={{
                                   flex: 1, 
                                   justifyContent: 'center', 
                                   alignItems: 'center'
                              }}
                         >
                              <Icon name="home" size={20} color="#111"/> 
                         </TouchableOpacity>
                         
                    </View>     
               </View>
          </View>
     );
}
export default profil;