import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import SplashScreen from "./Screens/SplashScreen";

import store from "./Redux/Store";
import BottomTabNavigator from "./Navigation/BottomTabNavigator";
import CartItem from "./Screens/CartItem";

const Stack = createStackNavigator();

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
            options={{ headerShown: false }}
            name="VegScreen"
            component={BottomTabNavigator}
          />
          <Stack.Screen name="Cart" component={CartItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
