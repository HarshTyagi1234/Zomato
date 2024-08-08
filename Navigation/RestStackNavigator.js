import RestScreen from "../Screens/RestScreen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const RestStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Rest" component={RestScreen} />
    </Stack.Navigator>
  );
};

export default RestStackNavigator;
