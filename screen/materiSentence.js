import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const materiSentence = ({ navigation }) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      id: 1,
      arabicLetter: 'آ',
      options: [
        { id: 1, text: 'a', isCorrect: true },
        { id: 2, text: 'i', isCorrect: false },
        { id: 3, text: 'u', isCorrect: false },
      ],
    },
    {
      id: 2,
      arabicLetter: 'ب',
      options: [
        { id: 1, text: 'b', isCorrect: true },
        { id: 2, text: 'p', isCorrect: false },
        { id: 3, text: 't', isCorrect: false },
      ],
    },
    {
      id: 3,
      arabicLetter: 'ج',
      options: [
        { id: 1, text: 'j', isCorrect: true },
        { id: 2, text: 'k', isCorrect: false },
        { id: 3, text: 'z', isCorrect: false },
      ],
    },
    {
      id: 4,
      arabicLetter: 'د',
      options: [
        { id: 1, text: 'd', isCorrect: true },
        { id: 2, text: 'r', isCorrect: false },
        { id: 3, text: 'f', isCorrect: false },
      ],
    },
    {
      id: 5,
      arabicLetter: 'ص',
      options: [
        { id: 1, text: 's', isCorrect: true },
        { id: 2, text: 'sh', isCorrect: false },
        { id: 3, text: 'z', isCorrect: false },
      ],
    },
  ];

  const handleAnswer = (option) => {
    const question = questions.find((q) => q.id === questionNumber);
    const isCorrect = option.isCorrect;
    setSelectedAnswer(option.id);

    // Set timeout to delay going to next question
    setTimeout(() => {
      if (isCorrect) {
        option.isCorrect = true;
      } else {
        option.isCorrect = false;
      }
      nextQuestion();
    }, 1000);
  };

  const nextQuestion = () => {
    if (questionNumber < 5) {
      setQuestionNumber(questionNumber + 1);
      setSelectedAnswer(null);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <View style={styles.backButton}>
          <Icon name="chevron-left" size={17} color="#111" />
          <Text style={styles.backButtonText}></Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>Lesson {questionNumber}: What is the sound of this letter?</Text>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{questions[questionNumber - 1].arabicLetter}</Text>
      </View>
      <View style={styles.optionsContainer}>
        {questions[questionNumber - 1].options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionButton,
              selectedAnswer === option.id && option.isCorrect ? styles.correctAnswer : null,
              selectedAnswer === option.id && !option.isCorrect ? styles.wrongAnswer : null,
            ]}
            onPress={() => handleAnswer(option)}>
            <Text style={styles.optionText}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#F9F6EE',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'SpaceGrotesk',
    color:'#212427',
  },
  title: {
    fontFamily: 'SpaceGrotesk',
    color:'#212427',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  questionContainer: {
    backgroundColor: '#93C572',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  questionText: {
    fontFamily: 'SpaceGrotesk',
    color:'#212427',
    fontSize: 50,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'column',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    color: '#93C572',
    borderColor: '#93C572',
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 20,
  },
  optionText: {
    color: '#93C572',
    fontSize: 18,
    fontWeight: '500',
  },
  correctAnswer: {
    backgroundColor: 'green',
  },
  wrongAnswer: {
    backgroundColor: 'red',
  },
});

export default materiSentence;
