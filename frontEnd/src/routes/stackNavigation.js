
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroTech from "../pages/tecnico/Cadastro"
import ListAssitenciaTecnica from "../pages/Client/ListAssitenciaTecnica"

import CadCategoriaTech from "../pages/tecnico/CadCategoriaTech"
import ListAssitenciaTecnica  from "../pages/tecnico/CadListAssitenciaTecnica"
import ListAutomotivo from "../pages/tecnico/CadListAutomoveis"
import ListEventos from "../pages/tecnico/CadListEventos"
import ListModaeBeleza from "../pages/tecnico/CadListModaBeleza"
import ListReformas from "../pages/tecnico/CadListReformasReparos"

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

          <Stack.Screen name="CadListAssitenciaTecnica" component={ListAssitenciaTecnica}   options={{ headerShown: false }}/>
          <Stack.Screen name="CadCategoriaTech" component={CadCategoriaTech}   options={{ headerShown: false }}/>
          <Stack.Screen name="CadListAutomoveis" component={ListAutomotivo}   options={{ headerShown: false }}/>
          <Stack.Screen name="CadListEventos" component={ListEventos}   options={{ headerShown: false }}/>
          <Stack.Screen name="CadListModaBeleza" component={ListModaeBeleza}   options={{ headerShown: false }}/>
          <Stack.Screen name="CadListReformasReparos" component={ListReformas}   options={{ headerShown: false }}/>

         
          <Stack.Screen name="Forms" component={Forms} options={{ headerShown: false }}/>
      
          <Stack.Screen name="CadastroTech" component={CadastroTech} />

    </Stack.Navigator>
  );
}
