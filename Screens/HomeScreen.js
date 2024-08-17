import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {useRoute,useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // const handlePress = () =>{
  //   console.warn("pressed")
  // }

  const {
    imageUri = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0RDg0QEBAQDhIPEA0ODQ4PDQ8NDw8NFhEXFhURExUZHSggGBolGxMTITEhJSkrLi4uFx8zODMsNygtNSsBCgoKDQ0NDg0NDisZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABAIDBQEGB//EAC0QAQABAgQEBQQCAwAAAAAAAAABAgMEESFxMUFRYSKBkaGxEjJC0VKSBcHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGqu/THfZpqxFXLT3BWIJuVTzn1Yg6I5zKK5jnPqC8R04irduoxFM8dPgG4AAAAAAAAAAAAAAAAAAGu9d+nflAPblyI4+iW5dme0dGFUzM5y8VAABqqv0xzz21aL97PSOHy0gtjEU7bw2xLmtlm7NM9ucAuHkTnq9BnbuTHD05KrV2Ku09EREg6I02L2ek8fluRQAAAAAAAAAAAAAGF2vKM/TdFVMzOcs71zOe0cGtQAEGnE15U76eTclxc6xHYE4AAAKsJXpMdNY2UIsNPijvnC0AACJW2bn1R3jiiZW68pifXYF48iXqKAAAAAAAAAANWIryp30bUmKq8WXQGkBUAAEmL+6No+ZVp8ZTwnyBKAAADZh/vjz+FyTCU6zPSPdWAAAACrC16ZdPhvRWKsqo76LUUAAAAAAAAAAQXJzqneV7nAAKgAAxrpziY6sgHOqpmJyl4uu2oq7T1TVYeqO+wNT2GyLFfTLeVFqzFOvGeoMrNH0xl5zuzAAAAACJdGHOX2/tp2j4RWQAAAAAAAAADnOiguRrO8gxAVAAAYXLtNPH05p68TVPDT3kFbyao6x6oKqpnjMz5sQdH6o6x6w9c17EzHCctgdER0YiqOOu6i3epntPSQbAAAAF9v7ado+EDoRCK9AAAAAAAAAAR4mnxbrGnE05059PgEgCoJr2I5U+c/p7ibv4x5/pKAAAAAAAACiziMtKuHXoqc1RhruXhnhy7SCoAGdmnOqPVcnwlHGfKFCKAAAAAAAAAAAAhu0ZTl6bNVyrKJn/ALNfet/VHfk5WMnhG8yqJpl4AAAAAAAAAAALrFedPfhLbRTnMQjwlWsx1j3dbD2soznjPtANtMZREdHoIoAAAAAAAAAAAAjx2E+vxR90e8dFgD52YmNJ0y4w8drFYSmvXhVyq/blX7FVE5VRtPKfNUagAAAAAAABnatVVTlTGf8Ard1cJgoo1nxVe0bA14DBzGVdXH8aeneV4IoAAAAAAAAAAAAAAAA8qpiYymM46Tq9AQ3v8bTOtM/T2nWEVzBXafxz706u2A+dmJjjpvo8fRTETx1YTYt/wp/rAOAQ78WLf8Kf6wzimI4REbRkDiW8Jcq4UzHefCss/wCMj85z7RpHq6ADG3RTTGURER2ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==",
    name = "No Name",
    address = "No Address",
  } = route.params || {};

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddScreen")}
        //navigation.navigate('AddStackNavigator', { screen: 'AddScreen' });
        //onPress={handlePress}
      >
        <Icon name="plus-circle" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <View style={styles.image}>
          <Image source={{ uri: imageUri }} style={styles.imageContent} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Address: {address}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightpink",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
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
});

export default HomeScreen;
