import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { ItemModel } from "../Components/ItemModel"; // Ensure this path is correct

const HomeScreen = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);

  // Define getNewItem function
  const getNewItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
    console.warn('Hi');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddScreen", { getNewItem })}
      >
        <Icon name="plus-circle" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id} // Ensure each item has a unique ID
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.image}>
                <Image source={{ uri: item.image }} style={styles.imageContent} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Name: {item.name}</Text>
                <Text style={styles.text}>Address: {item.address}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightpink",
  },
  innerContainer: {
    flexDirection: "row",
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "grey",
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContent: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    position: "absolute",
    top: 30,
    right: 30,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default HomeScreen;