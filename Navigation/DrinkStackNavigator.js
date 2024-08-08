import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrinkScreen from "../Screens/DrinksScreen";
import ImageScreen from "../Screens/ImageScreen";


const Stack = createStackNavigator();

const DrinkStackNavigator = ({ navigation }) => {
  useLayoutEffect(() => {
    if (navigation && navigation.getParent) {
      navigation.getParent().setOptions({ title: "Drinks" });
    }
  }, [navigation]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DrinkScreen" component={DrinkScreen} />
      <Stack.Screen name="ImageScreen" component={ImageScreen}/>
    </Stack.Navigator>
  );
};

export default DrinkStackNavigator;
