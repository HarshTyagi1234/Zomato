import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider, useSelector } from "react-redux";
import SplashScreen from "./Screens/SplashScreen";
import store from "./Redux/Store";
import BottomTabNavigator from "./Navigation/BottomTabNavigator";
import CartScreen from "./Screens/CartScreen";
import { TouchableOpacity, Image, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const ShowItemsButton = () => {
  const navigation = useNavigation();
  const cartData = useSelector((state) => state.reducer);
  const cartTitle = cartData.length > 10 ? "10+" : cartData.length;

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
      <View style={{ margin: 20 }}>
        <Image
          source={require("./assets/shooping.png")}
          style={{ width: 35, height: 35 }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#FF4C4C",
          width: 32,
          height: 32,
          borderRadius: 20,
          right: "5%",
          top: "5%",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "black",
          shadowOpacity: 0.5,
          shadowOffset: { height: 0.6, width: 0 },
        }}
      >
        <Text
          style={{
            backgroundColor: "red",
            margin: 1,
            color: "#FFF6E9",
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          {cartTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Splash"
            component={SplashScreen}
          />

          <Stack.Screen
            name="Home"
            component={BottomTabNavigator}
            options={{
              headerShown: true,
              title: "Home",
              headerLeft: null,
              headerRight: () => <ShowItemsButton />,
            }}
          />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
