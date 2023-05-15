import React, { Component } from "react";
import { Alert, Button, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import ProgressBar from "../assets/ProgressBar";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      quizStarted: false,
      timeRemaining: 60,
      questions: [
        {
          question: "Apa arti dari kalimat 'كم عمرك؟' dalam bahasa Indonesia?",
          options: ["Apa kabarmu?", "Berapa usiamu?", "Di mana kamu tinggal?", "Apa pekerjaanmu?"],
          correctAnswer: 1,
        },
        {
          question: "Bagaimana menerjemahkan kalimat 'أنا أحب القراءة' dalam bahasa Inggris?",
          options: ["I like to read", "I like to watch TV", "I like to play football", "I like to cook"],
          correctAnswer: 0,
        },
        {
          question: "Apa arti dari kalimat 'من فضلك، أغلق النافذة' dalam bahasa Inggris?",
          options: ["Please open the door", "Please close the window", "Please turn on the lights", "Please turn off the fan"],
          correctAnswer: 1,
        },
        {
          question: "Terjemahan yang tepat untuk kalimat 'أنا أحب الفاكهة' adalah",
          options: ["Saya suka daging", "Saya suka sayuran", "Saya suka buah-buahan", "Saya suka minuman"],
          correctAnswer: 2,
        },
        {
          question: "Bagaimana menerjemahkan kalimat 'أريد شراء الحليب' dalam bahasa Inggris?",
          options: ["I want to buy some water", "I want to buy some bread", "I want to buy some milk", "I want to buy some juice"],
          correctAnswer: 2,
        },
      ],
      score: 0, // Skor awal
      quizFinished: false, // Apakah kuis sudah selesai atau belum
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
        this.setState({ quizFinished: true });
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
  
    handleAnswer(selectedIndex) {
      const currentQuestion = this.state.questions[this.state.currentQuestion];
      clearInterval(this.interval);
      if (selectedIndex === currentQuestion.correctAnswer) {
        // Menambahkan 1 pada skor jika jawaban benar
        this.setState({ score: this.state.score + 1 });
        Alert.alert("Correct!");
      } else {
        Alert.alert("Incorrect!");
      }
      this.nextQuestion();
    }
  
    render() {
      const currentQuestion = this.state.questions[this.state.currentQuestion];
      return (
        <View style={styles.container}>
          {!this.state.quizStarted && !this.state.quizFinished && (
            <TouchableOpacity style={styles.startButton} onPress={() => this.startQuiz()}>
              <Text style={styles.startButtonText}>Start Quiz</Text>
            </TouchableOpacity>
          )}
  
          {this.state.quizStarted && !this.state.quizFinished && (
            <View>
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
              
  
              <View style={styles.option}>
                {currentQuestion.options.map((option, index) => (
                <View key={index} style={styles.button}>
                  <TouchableOpacity onPress={() => this.handleAnswer(index)}>
                    <Text style={styles.buttonText}>{option}</Text>
                  </TouchableOpacity>
                </View>
                ))}
              </View>
            </View>
          )}
  
          {this.state.quizFinished && (
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>Quiz Finished!</Text>
              <Text style={styles.scoreText}>Your Score: {this.state.score}</Text>
            </View>
          )}
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
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 100,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "SpaceGrotesk",
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
  startButton: {
    backgroundColor: "#93C572",
    padding: 12,
    borderRadius: 10,
  },
  startButtonText: {
    color: "#FFFFFF",
    fontFamily: "SpaceGrotesk",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  scoreContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    fontFamily: "SpaceGrotesk",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
