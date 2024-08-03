import React, { useState } from "react";
import { View, Text, FlatList, TextInput, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import FoodCard from "../Components/FoodCard";
import { add_To_Cart, remove_To_Cart } from "../Redux/Action";

const products = [
  {
    id: 1,
    name: "Dal Makhni",
    imgUrl:
      "https://img.freepik.com/premium-photo/dal-makhani-dal-makhni-is-north-indian-recipe-served-bowl-selective-focus_466689-79140.jpg",
    price: 150,
    color: "white",
    offer: "15%",
    quantity: 0,
  },
  {
    id: 2,
    name: "Matar Paneer",
    imgUrl:
      "https://www.foodie-trail.com/wp-content/uploads/2021/09/PHOTO-2021-09-06-13-17-11.jpg",
    price: 200,
    color: "white",
    offer: "40 %",
    quantity: 0,
  },
  {
    id: 3,
    name: "Malai Chaap",
    imgUrl:
      "https://images.herzindagi.info/image/2024/May/malai-chaap-recipe-at-home.jpg",
    price: 120,
    color: "white",
    quantity: 0,
  },
  {
    id: 4,
    name: "Mix Veg",
    imgUrl:
      "https://cookingfromheart.com/wp-content/uploads/2019/04/Restaurant-Style-Mixed-Veg-Gravy-1.jpg",
    price: 100,
    color: "white",
    quantity: 0,
  },
  {
    id: 5,
    name: "Palak Paneer",
    imgUrl:
      "https://beextravegant.com/wp-content/uploads/2021/08/Palak-paneer-7-edited.jpg",
    price: 170,
    color: "white",
    offer: "20 %",
    quantity: 0,
  },
  {
    id: 6,
    name: "Rajma",
    imgUrl:
      "https://myfoodstory.com/wp-content/uploads/2021/06/Rajma-Masala-5-500x500.jpg",
    price: 90,
    color: "white",
    quantity: 0,
  },
  {
    id: 7,
    name: "Butter Naan",
    imgUrl:
      "https://priyascurrynation.com/wp-content/uploads/2017/07/3-DSC_0398-400x500.jpg",
    price: 45,
    color: "white",
    quantity: 0,
  },
  {
    id: 8,
    name: "Bhindi Masala",
    imgUrl:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/bhindi-masala-recipe-500x375.jpg",
    price: 80,
    color: "white",
    quantity: 0,
  },
];

const VegScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cartData = useSelector((state) => state.reducer);
  const [searchQuery, setSearchQuery] = useState("");

  const addItem = (item) => {
    dispatch(add_To_Cart(item));
  };

  const removeItem = (item) => {
    dispatch(remove_To_Cart(item.id));
  };

  const filteredData = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1, marginTop: 0, backgroundColor: "#E7F0DC" }}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search here"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <FlatList
        data={filteredData}
        keyExtractor={({ id }) => id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <FoodCard value={item} addItem={addItem} removeItem={removeItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    margin: 15,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default VegScreen;
