import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Text, View } from "react-native";
import RestaurantScreen from "./screens/RestaurantScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import HomeScreen from "./screens/HomeScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import BasketScreen from "./screens/BasketScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen name="Basket" component={BasketScreen} />
        <Stack.Screen
          name="Delivery"
          component={DeliveryScreen}
          options={{ presentation: "fullScreenmodal", headerShown: false }}
        />
        <Stack.Screen
          name="Preparing"
          component={PreparingOrderScreen}
          options={{ presentation: "fullScreenmodal", headerShown: false }}
        />
        <Stack.Screen
          name="Restaurant"
          component={RestaurantScreen}
          options={{ presentation: "fullScreenmodal", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
