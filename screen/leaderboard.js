import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';

const Leaderboard = () => {
  const navigation = useNavigation();

  const [loaded] = useFonts({
    SpaceGrotesk: require('../assets/fonts/SpaceGrotesk-VariableFont_wght.ttf'),
  });

  if (!loaded) {
   return null;
  }

  return (
    <View style={styles.container}>
      <View style={{
        flex: 0.9
      }}>

        <View style={styles.navigationBar}>
          <Pressable
            style={styles.navigationBarIcon}
            onPress={() => navigation.navigate("home")}
          >
            <Image
              style={styles.navigationBarIconImage}
              source={require("../assets/icon--left.png")}
            />
          </Pressable>
          <Text style={styles.navigationBarText}>Quiz - Leaderboard</Text>
          <Pressable
            style={styles.navigationBarIcon}
            onPress={() => navigation.navigate("Menu")}
          >
            <Image
              style={styles.navigationBarIconImage}
              source={require("../assets/icon--more.png")}
            />
          </Pressable>
        </View>

        
          <View style={styles.nameScore}>
            <Text style={styles.nameStuden}>Hanaa lee</Text>
              <View style={styles.score}>
                  <Text style={{fontWeight: 'bold',  fontFamily: 'SpaceGrotesk',}}>80</Text>
              </View>
          </View>

    
          <View style={styles.nameScore}>
            <Text style={styles.nameStuden}>Name Studen</Text>
              <View style={styles.score}>
                  <Text style={{fontWeight: 'bold', fontFamily: 'SpaceGrotesk', }}>80</Text>
              </View>
          </View>

    
          <View style={styles.nameScore}>
            <Text style={styles.nameStuden}>Name Studen</Text>
              <View style={styles.score}>
                  <Text style={{fontWeight: 'bold', fontFamily: 'SpaceGrotesk', }}>80</Text>
              </View>
          </View>

    
          <View style={styles.nameScore}>
            <Text style={styles.nameStuden}>Name Studen</Text>
              <View style={styles.score}>
                  <Text style={{fontWeight: 'bold', fontFamily: 'SpaceGrotesk', }}>80</Text>
              </View>
          </View>

    
          <View style={styles.nameScore}>
            <Text style={styles.nameStuden}>Name Studen</Text>
              <View style={styles.score}>
                  <Text style={{fontWeight: 'bold', fontFamily: 'SpaceGrotesk', }}>80</Text>
              </View>
          </View>

    
          <View style={styles.nameScore}>
            <Text style={styles.nameStuden}>Name Studen</Text>
              <View style={styles.score}>
                  <Text style={{fontWeight: 'bold', fontFamily: 'SpaceGrotesk', }}>80</Text>
              </View>
          </View>

    
          <View style={styles.nameScore}>
            <Text style={styles.nameStuden}>Name Studen</Text>
              <View style={styles.score}>
                  <Text style={{fontWeight: 'bold', fontFamily: 'SpaceGrotesk', }}>80</Text>
              </View>
          </View>


      </View>



      <View style={{ flex: 0.1, backgroundColor: '#93C572', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
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
          <TouchableOpacity  onPress={() => navigation.navigate('home')}
              style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
              }}
          >
              <Icon name="home" size={20} color="#111" />
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F6EE',
  },
  score: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#93C572',
    width: 50,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    elevation: 10,
    
    

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  nameStuden: {
    backgroundColor: '#93C572',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
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
  nameScore: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
  },
  navigationBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  navigationBarIcon: {
    padding: 8,
    borderRadius: 4,
  },
  navigationBarIconImage: {
    width: 24,
    height: 24,
  },
  navigationBarText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: 'SpaceGrotesk',
  },
});

export default Leaderboard;
