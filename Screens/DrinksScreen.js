import React, { useState,useLayoutEffect } from "react";
import { View, Text, FlatList, TextInput, StyleSheet,Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import FoodCard from "../Components/FoodCard";
import { add_To_Cart, remove_To_Cart } from "../Redux/Action";



const products = [
  {
    id: 17,
    name: "Cold Drink",
    imgUrl:
      "https://5.imimg.com/data5/NQ/XF/MY-3051570/double-pe-cold-cups.jpg",
    price: 40,
    color: "white",
    quantity: 0,
    offer: "55%",
  },
  {
    id: 18,
    name: "Cold Coffe",
    imgUrl: "https://cdn.dotpe.in/longtail/store-items/1332303/IX4B7CFe.jpeg",
    price: 70,
    color: "white",
    quantity: 0,
  },
  {
    id: 19,
    name: "Mojito",
    imgUrl:
      "https://www.foodandwine.com/thmb/e8AvEfBBfwjg3xmt6E__rRvSZlA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mojito-FT-RECIPE1022-2000-85cdb1eb59454847b713713e32e365c0.jpg",
    price: 120,
    color: "white",
    quantity: 0,
  },
  {
    id: 20,
    name: "Starbucks",
    imgUrl: "https://m.media-amazon.com/images/I/81W0+f6HCtL.jpg",
    price: 450,
    color: "white",
    quantity: 0,
    offer: "10%",
  },
  {
    id: 21,
    name: "Bisleri",
    imgUrl: "https://www.bisleri.com/images/brand-bisleri-02.webp",
    price: 25,
    color: "white",
    quantity: 0,
  },
  {
    id: 22,
    name: "Milk Shake",
    imgUrl:
      "https://www.dessertfortwo.com/wp-content/uploads/2022/08/How-to-Make-a-Milkshake-10.jpg",
    price: 100,
    color: "white",
    quantity: 0,
  },
  {
    id: 23,
    name: "Lassi",
    imgUrl: "https://i.ytimg.com/vi/tziQpzMX8Uk/maxresdefault.jpg",
    price: 45,
    color: "white",
    quantity: 0,
    offer: "15%",
  },
  {
    id: 24,
    name: "Red Bull",
    imgUrl:
      "https://images-cdn.ubuy.co.in/64bfedad104706602b4ee782-red-bull-sugar-free-energy-drink-8-4-fl.jpg",
    price: 135,
    color: "white",
    quantity: 0,
  },
];

const DrinkScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.reducer);
  const [searchQuery, setSearchQuery] = useState("");


  useLayoutEffect (()=>{
    navigation.getParent().setOptions({title:"Drinks"});
  },[navigation])

  const addItem = (item) => {
    dispatch(add_To_Cart(item));
  };
  const removeItem = (item) => {
    dispatch(remove_To_Cart(item.id));
  };
  const filterData = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View
      style={{
        flex: 1,
        marginTop: 0,
        backgroundColor: "#E7F0DC",
      }}
    >
  
      
      <TextInput
        style={styles.searchBar}
        placeholder="Search for sweets..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={filterData}
        keyExtractor={({ id }) => id}
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

export default DrinkScreen;
