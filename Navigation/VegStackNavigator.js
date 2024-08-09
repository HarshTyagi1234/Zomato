import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VegScreen from '../Screens/VegScreen';
 import ImageViewer from '../Screens/ImageViewer';

const Stack = createStackNavigator();

const VegStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="VegScreen" component={VegScreen} options={{ title: 'Veg' }} />
      <Stack.Screen name="ImageViewer" component={ImageViewer} />
    </Stack.Navigator>
  );
};

export default VegStackNavigator;
