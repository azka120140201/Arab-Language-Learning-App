import React, { Component } from "react";
import { Alert, Button, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import ProgressBar from "./assets/ProgressBar";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      quizStarted: false,
      timeRemaining: 60,
      questions: [
        {
          question: "what is this thing?",
          image: "https://png.pngtree.com/png-clipart/20221017/ourmid/pngtree-gambar-pensil-yang-imut-png-image_6350444.png",
          options: ["كِتَابٌ", "قَلَمٌ", "مُمْحَاةٌ"],
          correctAnswer: 0,
        },
        {
          question: "what is this thing?",
          image: "https://www.pngplay.com/wp-content/uploads/1/Laptop-PNG-Image.png",
          options: ["تِلِفِزْيُونٌ", "لَابْتوبٌ", "جَوَّالٌ"],
          correctAnswer: 0,
        },
        {
          question: "what is this thing?",
          image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8mjdfCvOs0oREO_1rInt2iCLFfd2iLR7sKQJs7cWQ4YpfNX4EySzJgXlj__cl9efG7gpVoAW8rQ2_dJ7RK1h-PpsRznD7fw6azfeTtM-r8dwN4c8vJcvwIBKhadM2TA0W3I0JrlH8taKBNoNAPn3iQW0YyRnrVJls1hVGqo-8MMVVgyDPM8djTJWmCA/s1151/jus-buah.png",
          options: ["شَايٌ","حَلِيب", "عَصِيرٌ"],
          correctAnswer: 0,
        },
        {
          question: "what is this thing?",
          image: "https://www.pngall.com/wp-content/uploads/8/Hospital-PNG-Free-Image.png",
          options: ["حَدِيقَةٌ تَرْفِيهِيَّةٌ","مُسْتَشْفَىٰ", "مَدْرَسَةٌ"],
          correctAnswer: 0,
        },
        {
          question: "what is this thing?",
          image: "https://www.pngplay.com/wp-content/uploads/12/Easy-Rose-Drawings-PNG-Clipart-Background.png",
          options: ["وَرْدَةٌ","يَاسْمِينٌ","أُرْكِيدِيَّةٌ "],
          correctAnswer: 0,
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
    marginTop: 120,
    marginBottom: 20,
    width: 250,
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
