
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListServices from "../pages/Client/ListServices"
import Forms from "../pages/Client/Forms"
import TabRoutesTech from "./TabRoutesTech"
import TabRoutesClient from "./TabRoutesClient";
import TelaDeInicio from "../pages/TelaDeInicio"

import Loguin from "../pages/Client/Loguin"
import Cadastro from "../pages/Client/Cadastro"

import LoguinTech from "../pages/tecnico/Loguin"
import CadastroTech from "../pages/tecnico/Cadastro"
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      
      <Stack.Screen
        name="TelaDeInicio"
        component={TelaDeInicio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Loguin"
        component={Loguin}
        options={{ headerShown: true }}
      />

      <Stack.Screen name="Cadastro" component={Cadastro} />


      <Stack.Screen
        name="LoguinTech"
        component={LoguinTech}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="CadastroTech" component={CadastroTech} />
 

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
          <Stack.Screen name="ListServices" component={ListServices}   options={{ headerShown: false }}/>
         
          <Stack.Screen name="Forms" component={Forms} options={{ headerShown: false }}/>
      


    </Stack.Navigator>
  );
}
