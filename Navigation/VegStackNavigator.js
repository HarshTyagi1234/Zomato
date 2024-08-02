import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import VegScreen from "../Screens/VegScreen";

const Stack = createStackNavigator();

const VegStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="VegScreen" component={VegScreen} />
    </Stack.Navigator>
  );
};

export default VegStackNavigator;
