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
          options: ["Paris", "Berlin", "Rome"],
          correctAnswer: 0,
        },
        {
          options: ["Rusia", "Kanada", "China"],
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

  async nextQuestion() {
    if (this.state.currentQuestion === this.state.questions.length - 1) {
      Alert.alert("Quiz selesai!");
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

  async handleAnswer(selectedIndex) {
    const currentQuestion = this.state.questions[this.state.currentQuestion];
    clearInterval(this.interval);
    if (selectedIndex === currentQuestion.correctAnswer) {
      Alert.alert("Correct!!");
    } else {
      Alert.alert("Incorrect!!");
    }
    await this.nextQuestion();
  }

  render() {
    const currentQuestion = this.state.questions[this.state.currentQuestion];
    const imageUri = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/800px-Speaker_Icon.svg.png";
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.questionNumber}>
            Question {this.state.currentQuestion + 1}
          </Text>
          <ProgressBar progress={0.5} width={300} height={8} color={"#93C572"} secondColor={"#FFE5D9"}/>
        </View>

        <View style={styles.question}>
          <Image source={{ uri: imageUri }} style={styles.image} />
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

        <Text style={styles.timeRemaining}>{this.state.timeRemaining} detik tersisa</Text>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F6EE",
  },
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  questionNumber: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 20,
    color: "#000000",
    marginBottom: 20,
  },
  question: {
    marginTop: 120,
    marginBottom: 20,
    width: "80%",
    height: 180,
    padding: 20,
    borderRadius: 40,
    backgroundColor: "#93C572",
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  option: {
    alignItems: "center",
    width: "100%",
    paddingTop: 0,
    paddingBottom: 0,
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
  timeRemaining: {
    fontFamily: "SpaceGrotesk",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#000000",
  },
});