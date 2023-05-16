import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';

// Import Firebase SDK
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

// Inisialisasi Firebase
import firebaseConfig from '../src/DataBase/firebaseConfig'; 

const auth = getAuth();
const db = getDatabase();

const signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [telepon, setTelepon] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [loaded] = useFonts({
    SpaceGrotesk: require('../assets/fonts/SpaceGrotesk-VariableFont_wght.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const signUpToFirebase = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Simpan data tambahan ke database Firebase
        const userRef = ref(db, 'users/' + user.uid);
        set(userRef, {
          name: name,
          telepon: telepon,
        }).then(() => {
          console.log('Data user berhasil disimpan ke database');
          navigation.navigate('berhasilSignup')
        }).catch((error) => {
          console.log('Gagal menyimpan data user ke database: ' + error.message);
        });

        console.log('User berhasil didaftarkan dengan ID:', user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Gagal melakukan signup:', errorCode, errorMessage);
      });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
                              marginTop: -30,

                              shadowColor: 'black',
                              shadowOffset: { width: 0, height: 2 },
                              shadowOpacity: 0.5,
                              shadowRadius: 4,
                         }} />

                    <Text style={{ fontSize: 24, fontWeight: 'bold',fontFamily: 'SpaceGrotesk' }}>DARSU<Text style={{ color: '#72A152' }}>ARAB</Text></Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20,fontFamily: 'SpaceGrotesk' }}>sign-Up</Text>
               </View>


               <Text
                    style={{
                         marginTop: 8,
                         marginLeft: 21,
                         marginBottom: -8,
                         fontFamily: 'SpaceGrotesk'
                    }}
               >Name</Text>
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
                         value={name}
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
                         onChangeText={text => setName(text)} />
               </View>

               <Text
                    style={{
                         marginTop: 8,
                         marginLeft: 21,
                         marginBottom: -8,
                         fontFamily: 'SpaceGrotesk'
                    }}
               >Telepon</Text>
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
                         <Icon name="phone-alt" size={17} color="#111" />
                    </View>
                    <TextInput
                         value={telepon}
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
                         placeholder='Masukan No. Telepon'
                         onChangeText={text => setTelepon(text)} />
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
                    onPress={signUpToFirebase}
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