import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const materiSentence = ({ navigation }) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      id: 1,
      arabicLetter: "Apa arti dari kalimat 'كم عمرك؟' dalam bahasa Indonesia?",
      options: [
        { id: 1, text: 'Apa kabarmu?', isCorrect: false },
        { id: 2, text: 'Berapa usiamu?', isCorrect: true },
        { id: 3, text: 'Di mana kamu tinggal?', isCorrect: false },
      ],
    },
    {
      id: 2,
      arabicLetter: "Bagaimana menerjemahkan kalimat 'أنا أحب القراءة' dalam bahasa Inggris?",
      options: [
        { id: 1, text: 'I like to read', isCorrect: true },
        { id: 2, text: 'I like to watch TV', isCorrect: false },
        { id: 3, text: 'I like to play football', isCorrect: false },
      ],
    },
    {
      id: 3,
      arabicLetter: "Apa arti dari kalimat 'من فضلك، أغلق النافذة' dalam bahasa Inggris?",
      options: [
        { id: 1, text: 'ease open the door', isCorrect: false },
        { id: 2, text: 'Please close the window', isCorrect: true },
        { id: 3, text: 'Please turn on the lights', isCorrect: false },
      ],
    },
    {
      id: 4,
      arabicLetter: "Terjemahan yang tepat untuk kalimat 'أنا أحب الفاكهة' adalah",
      options: [
        { id: 1, text: 'Saya suka daging', isCorrect: false },
        { id: 2, text: 'Saya suka sayuran', isCorrect: false },
        { id: 3, text: 'Saya suka buah-buahan', isCorrect: true },
      ],
    },
    {
      id: 5,
      arabicLetter: "Bagaimana menerjemahkan kalimat 'أريد شراء الحليب' dalam bahasa Inggris?",
      options: [
        { id: 1, text: 'I want to buy some water', isCorrect: false },
        { id: 2, text: 'I want to buy some bread', isCorrect: false },
        { id: 3, text: 'I want to buy some milk', isCorrect: true },
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
    fontSize: 18,
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
