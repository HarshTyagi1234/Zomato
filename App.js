import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import SplashScreen from "./Screens/SplashScreen";
import store from "./Redux/Store";
import BottomTabNavigator from "./Navigation/BottomTabNavigator";
import CartScreen from "./Screens/CartScreen";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const ShowItemsButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Show Items"
      onPress={() => navigation.navigate("Cart")}
    />
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
            name="VegScreen"
            component={BottomTabNavigator}
            options={{
              headerLeft: null,
              headerRight: () =>  <ShowItemsButton/>,
            }}
          />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
