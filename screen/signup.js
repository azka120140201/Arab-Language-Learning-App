import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';


const signup = ({ navigation }) => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [showPassword, setShowPassword] = useState(false); // State untuk mengontrol tampilan password
     const [loading, setLoading] = useState({
          loadingSign:false,
     });

     const toggleShowPassword = () => {
          setShowPassword(!showPassword); // Mengubah state showPassword ketika tombol mata ditekan
     };


     const AuthSign = async () =>{
          const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQDNj-ErcBzNzhWMa6uPMgC8t79YuXtnw", {
               method:"POST",
               headers:{
                    'Content-type':'application/json'
               },
               body:JSON.stringify({
                    email:email,
                    password:password,
                    returnSecureToken:true
               })
          })
          const resData = await response.json()
          console.log(resData)
          await navigation.navigate('login')
     }

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
                         secureTextEntry={!showPassword} /> {/* Menggunakan secureTextEntry dan showPassword state */}
                         <TouchableOpacity onPress={toggleShowPassword} style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                              <Icon name={showPassword ? 'eye-slash' : 'eye'} size={17} color="#111" /> {/* Menggunakan ikon mata */}
                         </TouchableOpacity>
               </View>

               <TouchableOpacity
                    onPress={AuthSign}
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
                         Sign-Up
                    </Text>
               </TouchableOpacity>
          </View>
     );
}
export default signup;