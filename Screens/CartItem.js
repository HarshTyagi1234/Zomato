import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { remove_To_Cart } from "../Redux/Action";
import Icon from "react-native-vector-icons/FontAwesome";

const CartItem = () => {
  const cartData = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove_To_Cart(id));
  };

  const calculateTotalAmount = () => {
    return cartData.reduce((total, item) => total + item.price, 0);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>Rs {item.price}</Text>
      <TouchableOpacity onPress={() => handleRemove(item.id)}>
        <Icon name="trash" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <FlatList
        data={cartData}
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
  },
  totalContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartItem;
