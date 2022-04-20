
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListAssitenciaTecnica from "../pages/Client/ListAssitenciaTecnica"
import Forms from "../pages/Client/Forms"
import TabRoutesTech from "./TabRoutesTech"
import TabRoutesClient from "./TabRoutesClient";
import Cadastro from "../pages/Client/Cadastro"


const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Cadastro" component={Cadastro} />

      { 
      <Stack.Screen

        name="TabRoutesClient"
        component={TabRoutesClient}
        options={{ headerShown: false }}
      />    
      }

{
       <Stack.Screen
        name="TabRoutesTech"
        component={TabRoutesTech}
        options={{ headerShown: false }}
      />
      }
          <Stack.Screen name="ListAssitenciaTecnica" component={ListAssitenciaTecnica}   options={{ headerShown: false }}/>
         
          <Stack.Screen name="Forms" component={Forms} options={{ headerShown: false }}/>
      


    </Stack.Navigator>
  );
}
