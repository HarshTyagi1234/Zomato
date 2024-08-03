import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import VegScreen from "../Screens/VegScreen";

const Stack = createStackNavigator();

const VegStackNavigator = ({ navigation }) => {
  useLayoutEffect(() => {
    if (navigation && navigation.getParent) {
      navigation.getParent().setOptions({ title: "Main Meals" });
    }
  }, [navigation]);

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
