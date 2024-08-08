import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SweetScreen from "../Screens/SweetScreen";
import ImageScreen from "../Screens/ImageScreen";



const Stack = createStackNavigator();

const SweetStackNavigator = ({ navigation }) => {
  useLayoutEffect(() => {
    if (navigation && navigation.getParent) {
      navigation.getParent().setOptions({ title: "Sweets" });
    }
  }, [navigation]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SweetScreen" component={SweetScreen} />
      <Stack.Screen name="ImageScreen" component={ImageScreen}/>
    </Stack.Navigator>
  );
};

export default SweetStackNavigator;
