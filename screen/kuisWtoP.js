import React, { Component } from "react";
import { Alert, Button, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import ProgressBar from "./ProgressBar";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      quizStarted: false,
      timeRemaining: 60,
      questions: [
        {
          question: "What picture represents the word 'قِطٌّ'?",
          options: ["https://png.pngtree.com/png-clipart/20221017/ourmid/pngtree-gambar-pensil-yang-imut-png-image_6350444.png", "https://png.pngtree.com/png-clipart/20221017/ourmid/pngtree-gambar-pensil-yang-imut-png-image_6350444.png", "https://png.pngtree.com/png-clipart/20221017/ourmid/pngtree-gambar-pensil-yang-imut-png-image_6350444.png", "https://png.pngtree.com/png-clipart/20221017/ourmid/pngtree-gambar-pensil-yang-imut-png-image_6350444.png"],
          correctAnswer: 0,
        },
        {
          question: "What is the largest country in the world by area?",
          options: ["Russia", "Canada", "China", "USA"],
          correctAnswer: 0,
        },
        {
          question: "What is the currency of Japan?",
          options: ["Yen", "Dollar", "Euro", "Pound"],
          correctAnswer: 0,
        },
        {
          question: "What is the highest mountain in the world?",
          options: ["Mount Everest", "K2", "Makalu", "Annapurna"],
          correctAnswer: 0,
        },
        {
          question: "What is the capital of India?",
          options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
          correctAnswer: 0,
        },
      ],
    };
  }

  componentDidMount() {
    // Jangan memulai penghitungan mundur saat komponen di-mount, tapi saat tombol Start ditekan
  }

  startQuiz() {
    this.setState({ quizStarted: true }, () => {
      this.interval = setInterval(() => {
        if (this.state.timeRemaining > 0) {
          this.setState({ timeRemaining: this.state.timeRemaining - 1 });
        } else {
          this.nextQuestion();
        }
      }, 1000);
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextQuestion() {
    if (this.state.currentQuestion === this.state.questions.length - 1) {
      Alert.alert("Quiz is finished!");
      this.setState({ currentQuestion: 0, timeRemaining: 60 });
    } else {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        timeRemaining: 60,
      });
    }
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        this.setState({ timeRemaining: this.state.timeRemaining - 1 });
      } else {
        this.nextQuestion();
      }
    }, 1000);
  }

  render() {
  const currentQuestion = this.state.questions[this.state.currentQuestion];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.questionNumber}>
          Question {this.state.currentQuestion + 1}
        </Text>
        <ProgressBar
          progress={0.5}
          width={300}
          height={8}
          color={"#93C572"}
          secondColor={"#FFE5D9"}
        />
      </View>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => this.handleAnswer(0)}>
          <View style={styles.column}>
            <Image source={{ uri: currentQuestion.options[0] }} style={styles.image} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleAnswer(1)}>
          <View style={styles.column}>
            <Image source={{ uri: currentQuestion.options[1] }} style={styles.image} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => this.handleAnswer(2)}>
          <View style={styles.column}>
            <Image source={{ uri: currentQuestion.options[2] }} style={styles.image} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleAnswer(3)}>
          <View style={styles.column}>
            <Image source={{ uri: currentQuestion.options[3] }} style={styles.image} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}



  handleAnswer(selectedIndex) {
    const currentQuestion = this.state.questions[this.state.currentQuestion];
    clearInterval(this.interval);
    if (selectedIndex === currentQuestion.correctAnswer) {
      Alert.alert("Correct!");
    } else {
      Alert.alert("Incorrect!");
    }
    this.nextQuestion();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F6EE",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "SpaceGrotesk",
  },
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins",
    fontWeight: "500",
    textDecorationLine: "none",
    lineHeight: 32,
    fontSize: 20,
    color: "rgba(0, 0, 0, 1)",
    textAlign: "center",
    textAlignVertical: "center",
    letterSpacing: 0.1,
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
});
