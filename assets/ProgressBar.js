import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const ProgressBar = ({ progress, width, height, color, secondColor }) => {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const calculateProgress = () => {
    const fillProgress = progress * width;
    return {
      backgroundColor: color,
      width: fillProgress,
      height: height,
      flexDirection: "row",
    };
  };

  const calculateSecondProgress = () => {
    const fillProgress = progress * width * ((60 - counter) / 60);
    return {
      backgroundColor: secondColor,
      width: fillProgress,
      height: height,
      position: "absolute",
      top: 0,
      right: 0,
      flexDirection: "row-reverse",
    };
  };

  const calculateTime = () => {
    const minutes = Math.floor(counter / 60);
    const seconds = counter % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={calculateProgress()}>
        <View style={calculateSecondProgress()} />
      </View>
      <Text style={styles.time}>{calculateTime()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    fontFamily: "SpaceGrotesk",
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 8,
  },
});

export default ProgressBar;
