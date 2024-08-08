import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to find your Restaurant</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "red",
  },
});

export default RestScreen;
