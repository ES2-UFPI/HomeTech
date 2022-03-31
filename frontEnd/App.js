import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
//import Cadastro from './src/form';
import   StackNavigation   from './src/routes/stackNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Stack" component={StackNavigation} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
