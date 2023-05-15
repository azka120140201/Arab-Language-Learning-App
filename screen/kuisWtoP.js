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
          question: "What picture represents the word 'قِطٌّ'?",
          options: ["https://www.greeners.co/wp-content/uploads/2021/03/Kucing-Domestik-1.jpg", "https://asset.kompas.com/crops/ZooJx7Zw6jqaVJeVsWEEVyOkor0=/27x0:863x558/750x500/data/photo/2023/02/18/63f02d9393e94.jpg", "https://store.sirclo.com/blog/wp-content/uploads/2022/03/bisnis-ikan-hias.jpg", "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/07/21063812/Ketahui-X-Fakta-tentang-Kura-Kura-Brazil.jpg"],
          correctAnswer: 0,
        },
        {
          question: "What picture represents the word 'أُمٌّ'",
          options: ["https://i.pinimg.com/originals/46/3b/2d/463b2d66503541d4901b158356ccaad6.jpg", "https://1.vikiplatform.com/pr/15046pr/0ab3a3cb0a.jpg?x=b&s=590x330&q=h&e=t&f=t&cb=1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUoooqgt3LQlxgOI3P0vWriPBt3i5OVN3UYg&usqp=CAU", "https://www.kanal247.com/images/media/photo/2021/07/22/0000077695.jpg"],
          correctAnswer: 0,
        },
        {
          question: "What picture represents the word 'قَلَمٌ رَصَاصٌ'",
          options: ["https://i0.wp.com/magic-stores.com/wp-content/uploads/2021/08/%D8%AF%D9%81%D8%A7%D8%AA%D8%B1-%D8%B3%D9%84%D9%83-2.png?fit=2048%2C2048&ssl=1", "https://www.artigianiartstore.com/media/catalog/product/cache/230274f50c3fd7eca2d39dfa1bd6e08e/1/8/188220.jpg", "https://m.media-amazon.com/images/I/51VYMevfJZL._AC_UF1000,1000_QL80_.jpg", "https://cdn.salla.sa/qXqEV/mJm1Q0XCKhMOxNHsDVsG0ye0ckhe8QbVF1hbkMah.jpg"],
          correctAnswer: 0,
        },
        {
          question: "What picture represents the word 'أَصْفَرُ'",
          options: ["https://vid.alarabiya.net/images/2022/08/07/eec81692-a1d7-45f4-8554-b38030f4c617/eec81692-a1d7-45f4-8554-b38030f4c617.jpg?crop=1:1&width=1000", "https://i.pinimg.com/originals/f0/1a/5b/f01a5b0786cf8f22737fa6dd15b680e8.jpg", "https://cdn.salla.sa/XzOPD/wPx4y4lVwZ3QBucjmq52Xe0ZYVagpBhg2fYBvN9K.png", "https://static.webteb.net/images/content/tbl_articles_article_25143_69779cd75a1-c7fe-453e-ba4b-e4866a52cb0c.jpg"],
          correctAnswer: 0,
        },
        {
          question: "What picture represents the word 'طَائِرَةٌ '",
          options: ["https://argaamplus.s3.amazonaws.com/b4a71689-7895-4fd9-adbb-ccd743571718.png", "https://images.netdirector.co.uk/gforces-auto/image/upload/w_343,h_257,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/38ae48607d71ab056341fed467a25591/768x576pxls.jpg", "https://m.al-sharq.com/get/maximage/20220823_1661252914-488.jpg?t=1661252915", "https://upload.wikimedia.org/wikipedia/commons/9/9e/Airbus_A380_Bourget_2017_n4.jpg"],
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
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 100,
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
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    resizeMode: "cover",
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
