
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListServices from "../pages/Client/ListServices"
import Forms from "../pages/Client/Forms"
import TabRoutesTech from "./TabRoutesTech"
import TabRoutesClient from "./TabRoutesClient";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      
      { /*
      <Stack.Screen
        name="TabRoutesClient"
        component={TabRoutesClient}
        options={{ headerShown: false }}
      />  */   
      }

{
       <Stack.Screen
        name="TabRoutesTech"
        component={TabRoutesTech}
        options={{ headerShown: false }}
      />
      }
          <Stack.Screen name="ListServices" component={ListServices}   options={{ headerShown: false }}/>
         
          <Stack.Screen name="Forms" component={Forms} options={{ headerShown: false }}/>
      

    </Stack.Navigator>
  );
}
