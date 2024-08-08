import React, { useState, useLayoutEffect } from "react";
import { View, FlatList ,TouchableOpacity} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FoodCard from "../Components/FoodCard";
import { add_To_Cart, remove_To_Cart } from "../Redux/Action";
import SearchBar from "../Components/SearchBar";

const products = [
  {
    id: 9,
    name: "Gulab Jamun",
    imgUrl:
      "https://aartimadan.com/wp-content/uploads/2020/11/milk-powder-gulab-jamuns.jpg",
    price: 250,
    color: "white",
    quantity: 0,
    offer: "27%",
  },
  {
    id: 10,
    name: "Ghewar",
    imgUrl:
      "https://cdn-jpbin.nitrocdn.com/sYLTElulopiLltYccZgkISfjEcRemCCS/assets/images/optimized/rev-1f0c853/jodhpursweethomeandbakers.com/wp-content/uploads/2023/08/Ghewar-plain-jodhpur-sweet-home-and-bakery-in-sikar.jpg",
    price: 350,
    color: "white",
    quantity: 0,
  },
  {
    id: 11,
    name: "Gajar ka Halwa",
    imgUrl:
      "https://vanitascorner.com/wp-content/uploads/2018/01/carrothalwa.jpg",
    price: 325,
    color: "white",
    quantity: 0,
  },
  {
    id: 12,
    name: "Rasmalai",
    imgUrl:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/moumita.malla-gmail.com/traditional_rasmalai_recipe.jpg",
    price: 60,
    color: "white",
    quantity: 0,
    offer: "36%",
  },
  {
    id: 13,
    name: "Jalebi",
    imgUrl: "https://i.ytimg.com/vi/QIn46ZY1Bdo/maxresdefault.jpg",
    price: 120,
    color: "white",
    quantity: 0,
  },
  {
    id: 14,
    name: "Kaju Katli",
    imgUrl:
      "https://www.thespruceeats.com/thmb/UedN4ndNPelG94CEaKMZK108-iA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-kaju-katli-recipe-7566984-hero-01-a94405c029c64f2ab2db6e59c4e5e53d.jpg",
    price: 1000,
    color: "white",
    quantity: 0,
  },
  {
    id: 15,
    name: "Imarti",
    imgUrl:
      "https://img3.exportersindia.com/product_images/bc-full/2021/10/9281908/imarti-1634216582-6038369.jpeg",
    price: 170,
    color: "white",
    quantity: 0,
    offer: "25%",
  },
  {
    id: 16,
    name: "Rabri",
    imgUrl:
      "https://c.ndtvimg.com/2021-08/5i0rn2d8_rabri_625x300_06_August_21.jpg",
    price: 280,
    color: "white",
    quantity: 0,
  },
];

const SweetScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.reducer);
  const [searchQuery, setSearchQuery] = useState("");

  useLayoutEffect(() => {
    navigation.getParent().setOptions({ title: "Sweets" });
  }, [navigation]);

  const addItem = (item) => dispatch(add_To_Cart(item));
  const removeItem = (item) => dispatch(remove_To_Cart(item.id));
  const filterData = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleImagePress = (url) => {
    navigation.navigate("ImageScreen", { imageUrl: url });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#E7F0DC" }}>
      <SearchBar
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={filterData}
        keyExtractor={({ id }) => id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleImagePress(item.imgUrl)}>
          <FoodCard value={item} addItem={addItem} removeItem={removeItem} />
        </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SweetScreen;
