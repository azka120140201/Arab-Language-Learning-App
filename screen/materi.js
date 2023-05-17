import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';


const materi = ({ navigation }) => {



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
          >Choose Lessons</Text>
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

          <Text style={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'SpaceGrotesk' }}>DARSU<Text style={{ color: '#72A152' }}>ARAB</Text></Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'SpaceGrotesk' }}>MATERI</Text>

        </View>



        <TouchableOpacity onPress={() => navigation.navigate('materiBenda')}>
          <View style={styles.pilihanMenu}>
            <View style={styles.iconMeneKuis}>
              <Icon name="star" size={17} color="#111" />
            </View>
            <Text style={styles.tombolMateri}>Kata Benda</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('materiHewan')}>
          <View style={styles.pilihanMenu}>
            <View style={styles.iconMeneKuis}>
              <Icon name="paw" size={17} color="#111" />
            </View>
            <Text style={styles.tombolMateri}>Kata Hewan</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('materiKerja')}>
          <View style={styles.pilihanMenu}>
            <View style={styles.iconMeneKuis}>
              <Icon name="suitcase" size={17} color="#111" />
            </View>
            <Text style={styles.tombolMateri}>Kata Kerja</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('materiKeterangan')}>
          <View style={styles.pilihanMenu}>
            <View style={styles.iconMeneKuis}>
              <Icon name="info" size={17} color="#111" />
            </View>
            <Text style={styles.tombolMateri}>Kata Keterangan</Text>
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
            onPress={() => navigation.navigate('menuKuis')}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Icon name="pen" size={20} color="#111" />
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
  tombolMateri: {
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

export default materi;