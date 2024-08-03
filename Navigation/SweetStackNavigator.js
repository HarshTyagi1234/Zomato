import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SweetScreen from "../Screens/SweetScreen";

const Stack = createStackNavigator();

const SweetStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SweetScreen" component={SweetScreen} />
    </Stack.Navigator>
  );
};

export default SweetStackNavigator;