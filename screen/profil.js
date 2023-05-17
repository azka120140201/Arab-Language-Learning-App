import React, { useEffect, useState } from 'react';
import { View, Text, Image,  TouchableOpacity, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { auth, db } from '../src/DataBase/firebaseConfig';
import { ref, onValue } from 'firebase/database';

const Profil = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fungsi untuk mengambil data pengguna dari Firebase
    const fetchUserData = async () => {
      try {
        // Mendapatkan pengguna yang sedang login
        const user = auth.currentUser;

        // Mendefinisikan path pengguna di Firebase
        const userPath = `users/${user.uid}`;

        // Listener untuk mendapatkan perubahan data pengguna
        const userRef = ref(db, userPath);
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();

          // Menyimpan data pengguna ke dalam state
          setUserData(userData);
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#F9F6EE' }}>
      <View style={{ flex: 0.5, backgroundColor: '#93C572' }}>
      <TouchableOpacity  
          onPress={() => navigation.goBack()}
          style={{
                marginTop: 21,
                marginLeft: 21
          }}>
          <Icon name="chevron-left" size={17} color="#111"/> 
      </TouchableOpacity>
      </View>
      <View style={{ flex: 1, backgroundColor: '#F9F6EE' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../src/images/foto_profil.jpg')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginLeft: 5,
              position: 'absolute',
              marginBottom: 330,
              borderColor: '#ffff',
              borderWidth: 3
            }}
          />

{userData && (
            <View>
          
          
                    <View style={{
                         flexDirection: 'row',
                         marginHorizontal: 20,
                         marginTop: 60,
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
                                   paddingHorizontal: 20,
                                   elevation: 10,
                                   paddingLeft: 10,
                                   fontFamily: 'SpaceGrotesk',
                                   fontWeight: "bold",

                                   shadowColor: 'black',
                                   shadowOffset: { width: 0, height: 2 },
                                   shadowOpacity: 0.5,
                                   shadowRadius: 4,
                              }}>
                              {userData.name}</Text>
                    </View>
               

          
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
                              <Icon name="phone-alt" size={17} color="#111" />
                         </View>
                         <Text
                              style={{
                                   backgroundColor: '#93C572',
                                   borderTopRightRadius: 5,
                                   borderBottomRightRadius: 5,
                                   flex: 1,
                                   paddingVertical: 15,
                                   paddingHorizontal: 20,
                                   elevation: 10,
                                   paddingLeft: 10,
                                   fontFamily: 'SpaceGrotesk',
                                   fontWeight: "bold",

                                   shadowColor: 'black',
                                   shadowOffset: { width: 0, height: 2 },
                                   shadowOpacity: 0.5,
                                   shadowRadius: 4,
                              }}>
                              {userData.telepon}</Text>
                    </View>
               

         
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
                              <Icon name="envelope" size={17} color="#111" />
                         </View>
                         <Text
                              style={{
                                   backgroundColor: '#93C572',
                                   borderTopRightRadius: 5,
                                   borderBottomRightRadius: 5,
                                   flex: 1,
                                   paddingVertical: 15,
                                   paddingHorizontal: 20,
                                   elevation: 10,
                                   paddingLeft: 10,
                                   fontFamily: 'SpaceGrotesk',
                                   fontWeight: "bold",

                                   shadowColor: 'black',
                                   shadowOffset: { width: 0, height: 2 },
                                   shadowOpacity: 0.5,
                                   shadowRadius: 4,
                              }}>
                             {auth.currentUser.email}</Text>
                    </View>
  
                  <TouchableOpacity onPress={() => navigation.navigate('login')}>
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
                              <Icon name="sign-out-alt" size={17} color="#111" />
                         </View>
                         <Text
                              style={{
                                   backgroundColor: '#93C572',
                                   borderTopRightRadius: 5,
                                   borderBottomRightRadius: 5,
                                   flex: 1,
                                   paddingVertical: 15,
                                   paddingHorizontal: 20,
                                   elevation: 10,
                                   paddingLeft: 10,
                                   fontFamily: 'SpaceGrotesk',
                                   fontWeight: "bold",

                                   shadowColor: 'black',
                                   shadowOffset: { width: 0, height: 2 },
                                   shadowOpacity: 0.5,
                                   shadowRadius: 4,
                              }}>
                              Log-Out</Text>
                      
                    </View>
                  </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <View style={{ flex: 0.15, backgroundColor: '#93C572', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
      <View style={{ marginTop: 20, flexDirection: 'row' }}>
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
                              onPress={() => navigation.navigate('menuKuis')}
                              style={{
                                   flex: 1,
                                   justifyContent: 'center',
                                   alignItems: 'center'
                              }}
                         >
                              <Icon name="pen" size={20} color="#111" />
                         </TouchableOpacity>
                         <TouchableOpacity  onPress={() => navigation.navigate('Leaderboard')}
                              style={{
                                   flex: 1,
                                   justifyContent: 'center',
                                   alignItems: 'center'
                              }}
                         >
                              <Icon name="chart-bar" size={20} color="#111" />
                         </TouchableOpacity>
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

                    </View>


      </View>
    </View>
  );
};

export default Profil;
