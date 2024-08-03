import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Food_Logo_URL } from "../Components/Constant";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 5000);
  });

  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <View style={styles.content}>
          <Animatable.Image
            source={{ uri: Food_Logo_URL }}
            style={styles.image}
            animation="zoomIn"
            duration={4000}
          />
          {
            <Animatable.Text
              animation="flipInX"
              style={styles.text}
              duration={4050}
            >
              Let's try food with us...
            </Animatable.Text>
          }
        </View>
      </View>
      <Text style={styles.versionText}>Version 1.0</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  imagecontainer: {
    flex: 1,
    width: 280,
    height: 280,
    justifyContent: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 1,
    borderColor: "#000",
  },
  text: {
    marginTop: 10,
    fontSize: 20,
  },
  versionText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
  },
});
