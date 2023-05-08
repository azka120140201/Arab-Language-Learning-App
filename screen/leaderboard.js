import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Leaderboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.student}>
        <Text style={styles.studentName}>Hanna Lee</Text>
        <Text style={styles.studentScore}>98</Text>
      </View>
      <View style={styles.student}>
        <Text style={styles.studentName}>StudentName</Text>
        <Text style={styles.studentScore}>80</Text>
      </View>
      <View style={styles.student}>
        <Text style={styles.studentName}>StudentName</Text>
        <Text style={styles.studentScore}>70</Text>
      </View>
      <View style={styles.student}>
        <Text style={styles.studentName}>StudentName</Text>
        <Text style={styles.studentScore}>60</Text>
      </View>
      <View style={styles.student}>
        <Text style={styles.studentName}>StudentName</Text>
        <Text style={styles.studentScore}>50</Text>
      </View>
      <View style={styles.navigationBar}>
        <Pressable
          style={styles.navigationBarIcon}
          onPress={() => navigation.navigate("BottomTabsRoot", { screen: "Profile" })}
        >
          <Image
            style={styles.navigationBarIconImage}
            source={require("../assets/icon--left.png")}
          />
        </Pressable>
        <Text style={styles.navigationBarText}>Quiz 1 - Leaderboard</Text>
        <Image
          style={styles.navigationBarIconImage}
          source={require("../assets/icon--more.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  student: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  studentName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  studentScore: {
    fontSize: 16,
  },
  navigationBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  navigationBarIcon: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#EFEFEF",
  },
  navigationBarIconImage: {
    width: 24,
    height: 24,
  },
  navigationBarText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Leaderboard;