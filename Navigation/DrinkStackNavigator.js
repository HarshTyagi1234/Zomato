import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrinkScreen from "../Screens/DrinksScreen";

const Stack = createStackNavigator();

const DrinkStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DrinkScreen" component={DrinkScreen} />
    </Stack.Navigator>
  );
};

export default DrinkStackNavigator;
