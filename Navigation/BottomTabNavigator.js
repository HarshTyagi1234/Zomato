import * as React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VegStackNavigator from "./VegStackNavigator";
import SweetStackNavigator from "./SweetStackNavigator";
import DrinkStackNavigator from "./DrinkStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="VegStack"
        component={VegStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="bowl-food"
              size={28}
              color={focused ? "green" : "#000"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 14, color: focused ? "green" : "black" }}>
              Veg
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="SweetsStack"
        component={SweetStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="burger" size={28} color={focused ? "green" : "#000"} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 14, color: focused ? "green" : "black" }}>
              Sweets
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="DrinkStack"
        component={DrinkStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="glass-water-droplet"
              size={28}
              color={focused ? "green" : "#000"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 14, color: focused ? "green" : "black" }}>
              Drinks
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
