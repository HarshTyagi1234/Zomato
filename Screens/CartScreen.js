import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { add_To_Cart, remove_To_Cart, delete_To_Cart } from "../Redux/Action";

const CartScreen = () => {
  const navigation = useNavigation();
  const cartData = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const [combinedProducts, setCombinedProducts] = useState([]);

  useEffect(() => {
    const deduplicatedProducts = [];
    cartData.forEach((product) => {
      const existingProduct = deduplicatedProducts.find(
        (p) => p.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        deduplicatedProducts.push({ ...product, quantity: 1 });
      }
    });

    setCombinedProducts(deduplicatedProducts);
  }, [cartData]);

  const addItem = (id) => {
    const matchedItem = cartData.find((item) => item.id === id);
    dispatch(add_To_Cart(matchedItem));
  };

  const removeItem = (id) => {
    const matchedItem = cartData.find((item) => item.id === id);
    dispatch(remove_To_Cart(matchedItem.id));

    if (combinedProducts.length === 1) {
      navigation.goBack();
    }
  };

  const DeleteAllItem = (id) => {
    dispatch(delete_To_Cart(id));

    if (combinedProducts.length === 1) {
      navigation.goBack();
    }
  };

  const calculateTotalAmount = () => {
    return combinedProducts.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>Rs {item.price}</Text>
      </View>

      <View style={styles.alignment}>
        <TouchableOpacity
          onPress={() => {
            addItem(item.id);
          }}
        >
          <Icon name="plus-square" size={25} color="green" />
        </TouchableOpacity>
        <Text style={styles.quantityStyle}>{item.quantity}</Text>
        <TouchableOpacity
          onPress={() => {
            removeItem(item.id);
          }}
        >
          <Icon name="minus-square" size={25} color="red" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => DeleteAllItem(item.id)}>
        <Icon name="trash" size={30} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={combinedProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: Rs {calculateTotalAmount()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7F0DC",
    padding: 10,
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "space-between",
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
  },
  alignment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  quantityStyle: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    color: "black",
    fontWeight: "600",
  },
  totalContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    marginTop: 10,
    marginBottom: 50,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default CartScreen;
