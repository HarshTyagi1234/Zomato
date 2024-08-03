import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/FontAwesome";

const FoodCard = (props) => {
  const item = props.value;
  const bgColor = item.color;
  const cartData = useSelector((state) => state.reducer);
  const cardItemCount = cartData.filter((product) => product.id === item.id);

  const AddPress = () => {
    props.addItem(item);
  };
  const RemovePress = () => {
    props.removeItem(item);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={{ justifyContent: "center" }}>
        <Animatable.Image
          source={{ uri: item.imgUrl }}
          style={styles.image}
          resizeMode="cover"
          animation="zoomIn"
          duration={4000}
        />

        <View
          style={{
            justifyContent: "center",
            flex: 1,
            alignItems: "center",
            margin: 5,
          }}
        >
          <Text style={styles.names}>{item.name}</Text>
          <Text style={styles.price}>Rs {item.price}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 2,
          }}
        >
          <TouchableOpacity onPress={AddPress}>
            <Icon name="plus-square" size={25} color="green" />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 10,
              marginRight: 10,
              fontSize: 15,
              color: "black",
              fontWeight: "650",
            }}
          >
            {cardItemCount.length}
          </Text>

          <TouchableOpacity
            disabled={cardItemCount.length === 0}
            onPress={RemovePress}
          >
            <Icon
              name="minus-square"
              size={25}
              color={cardItemCount.length === 0 ? "gray" : "red"}
            />
          </TouchableOpacity>
        </View>
      </View>

      {item.offer && (
        <Animatable.View
          animation="bounceIn"
          iterationCount="infinite"
          duration={1500}
          style={styles.offers}
        >
          <Text style={{fontWeight:'700'}}>{item.offer}</Text>
        </Animatable.View>
      )}
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 8,
    borderRadius: 8,
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { height: 0.6, width: 0 },
  },
  contentBox: {
    justifyContent: "flex-start",
    alignItems: "baseline",
    marginLeft: 5,
  },
  titleText: {
    margin: 5,
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  descText: {
    margin: 5,
    fontSize: 13,
    color: "black",
    fontWeight: "600",
  },
  image: {
    height: 160,
    aspectRatio: 1,
    borderRadius: 8,
  },
  price: { fontSize: 13, fontWeight: "bold" },
  names: {
    fontSize: 15,
    fontWeight: "400",
  },
  offers: {
    backgroundColor: "yellow",
    height: 30,
    width: 50,
    position: "absolute",
    top: "0%",
    right: "0%",
    alignItems: "flex-end",
    justifyContent:'center',
    borderRadius: 8,
  },
});
