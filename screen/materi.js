import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Materi = ({ navigation }) => {
  const [typeMateri, settypeMateri] = useState('');

  const [loaded] = useFonts({
    SpaceGrotesk: require('../assets/fonts/SpaceGrotesk-VariableFont_wght.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const handleLessonPress = () => {
    navigation.navigate('isiMateri'); // navigasi ke halaman IsiMateri
  };

  return (
    <View style={{ backgroundColor: '#F9F6EE', flex: 1, paddingHorizontal: 30, paddingTop: 30 }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Icon name="chevron-left" size={17} color="#111" />
        <Text style={{ fontFamily: 'SpaceGrotesk', color:'#212427', fontSize: 20, fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }}></Text>
      </TouchableOpacity>
      <Text style={{ fontFamily: 'SpaceGrotesk', color:'#212427', fontSize: 32, fontWeight: 'bold', textAlign: 'left', marginTop: 20, paddingBottom: 30 }}>Arab Lessons</Text>
      
      <View style={{ marginTop: 30 }}>
        <TouchableOpacity style={{ backgroundColor: '#93C572', height: 74, borderRadius: 10, marginBottom: 20 }} onPress={handleLessonPress}>
          <Text style={{ fontFamily: 'SpaceGrotesk', color: '#F9F6EE', textAlign: 'left', fontSize: 24, fontWeight: 'bold', lineHeight: 74, paddingLeft: 15, paddingRight: 15 }}>Lesson 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#93C572', height: 74, borderRadius: 10, marginBottom: 20 }}>
          <Text style={{ fontFamily: 'SpaceGrotesk', color: '#F9F6EE', textAlign: 'left', fontSize: 24, fontWeight: 'bold', lineHeight: 74, paddingLeft: 15, paddingRight: 15 }}>Lesson 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#93C572', height: 74, borderRadius: 10 }}>
          <Text style={{ fontFamily: 'SpaceGrotesk', color: '#F9F6EE', textAlign: 'left', fontSize: 24, fontWeight: 'bold', lineHeight: 74, paddingLeft: 15, paddingRight: 15 }}>Lesson 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Materi;