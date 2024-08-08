import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VegScreen from '../Screens/VegScreen';
 import ImageScreen from '../Screens/ImageScreen';

const Stack = createStackNavigator();

const VegStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="VegScreen" component={VegScreen} options={{ title: 'Veg' }} />
      <Stack.Screen name="ImageScreen" component={ImageScreen} />
    </Stack.Navigator>
  );
};

export default VegStackNavigator;
