import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome5';

const materi = ({ navigation }) => {
  const [typeMateri, settypeMateri] = useState('');

  const [loaded] = useFonts({
    SpaceGrotesk: require('../assets/fonts/SpaceGrotesk-VariableFont_wght.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const handleSentencesPress = () => {
    navigation.navigate('materiSentence', { type: 'Sentences' });
  };

  const handleListeningPress = () => {
    navigation.navigate('materiListening', { type: 'Listening' });
  };

  const handleVocabularyPress = () => {
    navigation.navigate('materiVocabulary', { type: 'Vocabulary' });
  };

  const handleWordsPress = () => {
    navigation.navigate('materiWtoP', { type: 'WtoP' });
  };

  return (
    <><View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="chevron-left" size={17} color="#111" />
        <Text style={styles.backButtonText}></Text>
      </TouchableOpacity>
      <Text style={styles.title}>Arab Lessons</Text>

      <View style={styles.lessonContainer}>
        <TouchableOpacity style={styles.lessonButton} onPress={handleSentencesPress}>
          <Text style={styles.lessonButtonText}>Sentences</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lessonButton} onPress={handleListeningPress}>
          <Text style={styles.lessonButtonText}>Listening</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lessonButton} onPress={handleVocabularyPress}>
          <Text style={styles.lessonButtonText}>Vocabulary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lessonButton} onPress={handleWordsPress}>
          <Text style={styles.lessonButtonText}>Picture</Text>
        </TouchableOpacity>
      </View>

    </View>
      <View
        style={{
          flex: 0.1,
          backgroundColor: '#93C572',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          paddingBottom: 8
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
            <Icon name="quidditch" size={20} color="#111" />
          </TouchableOpacity>
          <TouchableOpacity
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F6EE',
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    fontFamily: 'SpaceGrotesk',
    color: '#212427',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10,
  },
  title: {
    fontFamily: 'SpaceGrotesk',
    color: '#212427',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  lessonContainer: {
    marginTop: 30,
  },
  lessonButton: {
    backgroundColor: '#93C572',
    height: 50,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  lessonButtonText: {
    fontFamily: 'SpaceGrotesk',
    color: '#F9F6EE',
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 50,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default materi;
