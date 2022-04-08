import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({navigation}) {

 const services = [
 {
id: 1,
name: 'Assistência Técnica',
image: require('../assets/assistenciaTecnica.png'),

 },
 {
  id: 2,
  name: 'Reformas e Reparos',
  image: require('../assets/reformasReparos.png'),
   },
   {
    id: 3,
    name: 'Eventos',
    image: require('../assets/eventos.png'),
     },
     {
      id: 4,  
      name: 'Moda e Beleza',
     image: require('../assets/beauty.png'),
       },
       {
        id: 5,
        name: 'Automóveis',
        image: require('../assets/carro.png'),
         },



 ]

 const oneService = ( {item} ) => (
  
  <TouchableOpacity onPress={() => navigation.navigate('ListServices')}>
<View style = {styles.item}>

<View style = {styles.serviceContainer}>
  <Image source ={item.image} style = {styles.service} />
</View>
<Text style = {styles.name}>{item.name}</Text>

</View>
</TouchableOpacity>
)


headerComponent = () => {

  return <Text style = {styles.lisHeadline}>HomeTech Services</Text>
}

itemSeparator = () => {
  return <View style = {styles.separator} />
}

  return (
    <SafeAreaView >
     
      <FlatList
      ListHeaderComponentStyle = {styles.listHeader}
      ListHeaderComponent={headerComponent}
     data = {services}
     renderItem = {oneService} 
     
     ItemSeparatorComponent = {itemSeparator}
    
   
     />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listHeader:{
 height: 100,
 alignItems: 'center',
 justifyContent: 'center',
 
  },
 lisHeadline:{
color: '#333',
fontSize: 21,
fontWeight: 'bold',



 },
 item:{
flex: 1,
flexDirection: 'row',
alignItems: 'center',
paddingVertical: 13,

 },
 serviceContainer:{
  backgroundColor: '#D9D9D9',
  borderRadius: 100,
  height: 89,
  width: 89,
  justifyContent: 'center',
  alignItems: 'center',
},

 service:{
height: 55,
width: 55,

 },

 name:{
fontWeight: 'bold',
fontSize:18,
marginLeft: 15,

 },



 
  separator: {
    height: 1,
    backgroundColor: '#CCC',
    width: '100%',
    
  },
});
