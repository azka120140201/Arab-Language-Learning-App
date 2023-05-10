import React, { Component } from "react";
import { Alert, Button, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import ProgressBar from "./asset/ProgressBar";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      quizStarted: false,
      timeRemaining: 60,
      questions: [
        {
          question: "What is the capital of France?",
          image: "https://png.pngtree.com/png-clipart/20221017/ourmid/pngtree-gambar-pensil-yang-imut-png-image_6350444.png",
          options: ["Paris", "Berlin", "Rome", "Madrid"],
          correctAnswer: 0,
        },
        {
          question: "What is the largest country in the world by area?",
          image: "https://www.pngplay.com/wp-content/uploads/2/Cat-PNG-Clipart-Background.png",
          options: ["Russia", "Canada", "China", "USA"],
          correctAnswer: 0,
        },
        // ...
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

        <View style={styles.question}>
          <View style={styles.bg_2}>
            <Image source={{ uri: currentQuestion.image }} style={styles.image} />
          </View>
          <Text style={styles.label}>{currentQuestion.question}</Text>
        </View>

        <View style={styles.option}>
          {currentQuestion.options.map((option, index) => (
            <View key={index} style={styles.button}>
              <TouchableOpacity onPress={() => this.handleAnswer(index)}>
                <Text style={styles.buttonText}>{option}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <Text style={styles.timeRemaining}>{this.state.timeRemaining} seconds remaining</Text>
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
    button: {
    borderColor: "#93C572",
    borderRadius: 10,
    borderWidth: 2,
    width: "80%",
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
    buttonText: {
    color: "#93C572",
    fontFamily: "SpaceGrotesk",
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 12,
    textAlign: "center",
  },
    question: {
    marginTop: 120,
    marginBottom: 20,
    width: '80%',
    height: 180,
    padding: 20,
    borderRadius: 40,
    backgroundColor: "#93C572",
    alignItems: "center",
    position: "relative",
  },
  bg_2: {
    position: "absolute",
    backgroundColor: "rgba(255, 176, 132, 1)",
    borderRadius: 10,
    top: -28,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: "SpaceGrotesk",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 100,
    paddingHorizontal: 10,
  },
  image: {
    width: "75%",
    height: "75%",
  },
  option: {
    alignItems: "center",
    width: "100%",
    paddingTop: 0,
    paddingBottom: 0,
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
  timeRemaining: {
    fontFamily: "SpaceGrotesk",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#000000",
  },
});