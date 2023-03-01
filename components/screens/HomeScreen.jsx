import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.main}>
      <Image
        source={require("../../assets/mushi.png")}
        style={styles.titleImg}
      />
      <View style={styles.disclaimerBox}>
        <Image
          style={styles.image}
          source={require("../../assets/mushroom-question.png")}
        />
        <Text style={styles.disclaimerTitle}>DISCLAIMER</Text>

        <Text style={styles.disclaimerText}>
          Mushi App is intended for educational purposes only and does not
          provide advice regarding the safety or edibility of any mushroom.
          Eating or handling wild mushrooms can be dangerous, and you should
          never touch a mushroom unless you are positive that it is safe. Mushi
          does not guarantee the accuracy of any information contained within
          the App and is not responsible for any harm that may result from
          touching or ingesting mushrooms. By using the App, you agree to assume
          all responsibility for any such risks.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(31, 35, 53)",
    height: "100%",
  },
  titleImg: {
    marginTop: 20,
    alignSelf: "center",
    tintColor: "rgb(15, 163, 177)",
  },

  button: {
    height: "100%",
    backgroundColor: "lightseagreen",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  disclaimerHeader: {
    display: "flex",
    flexDirection: "row",
  },

  disclaimerBox: {
    marginTop: "auto",
    position: "relative",
    margin: 10,
    padding: 10,
    borderWidth: 3,
    backgroundColor: "rgba(255,255,255,.8)",
    borderColor: "rgb(255, 30, 80)",
    color: "rgb(255, 130, 80)",
    borderRadius: 10,
  },
  disclaimerTitle: {
    alignSelf: "center",
    fontSize: 22,
    margin: 12,
    marginTop: 8,

    color: "rgb(255, 30, 80)",
  },
  disclaimerText: {
    textAlign: "center",
    fontSize: 12,
  },
  image: {
    height: 80,
    width: 80,
    position: "absolute",
    right: 0,
    top: -8,
  },
});

export default HomeScreen;
