
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home"
import ListServices from "../pages/ListServices"
import Forms from "../pages/Forms"

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      
      { 
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />     
      }
          <Stack.Screen name="ListServices" component={ListServices} />
          <Stack.Screen name="Forms" component={Forms} />
    </Stack.Navigator>
  );
}
