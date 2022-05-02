import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, SafeAreaView } from 'react-native';



export default function ListAssitenciaTecnica({navigation}) {

  const [service, setService] = useState("");

 const assistenciaTecnicaList = [

    {
        
            id:1,
            name:"Alarme automotivo", 
      
          },
          {
              id:2,
              name:"Ar condicionado", 
        
            },
      
            {
              id:3,
              name:"Auto elétrico", 
        
            },
      
            {
              id:4,
              name:"Borracharia", 
        
            },
      
            {
              id:5,
              name:"Guincho", 
        
            },
      
            {
              id:6,
              name:"Higienização e Polimento", 
        
            },
      
            {
              id:7,
              name:"Insulfilm", 
        
            },
      
            {
              id:8,
              name:"Martelinho de ouro", 
        
            },
      
            {
              id:9,
              name:"Pintura", 
        
            },
      
            {
              id:10,
              name:"Som automotivo", 
        
            }, 
            {
              id:11,
              name:"Vendas de Automóveis", 
        
            },
      
            {
              id:12,
              name:"Vidraçaria", 
        
            },

 ]

 let onPressItem = (name) => {

  setService(name)
  console.log(service)
  navigation.navigate('Forms')
  
  
 }

 const oneService = ( {item} ) => (
  
    <TouchableOpacity  onPress={() => onPressItem(item.name)}>
  <View style = {styles.item}>
  <Text style = {styles.name}>{item.name}</Text>
  </View>
  </TouchableOpacity>
  )
  





  headerComponent = () => {

    return <Text style = {styles.lisHeadline}>Serviços Assistência Técnica</Text>
  }
  
  itemSeparator = () => {
    return <View style = {styles.separator} />
  }
  
    return (
      <SafeAreaView >
       
        <FlatList
        ListHeaderComponentStyle = {styles.listHeader}
        ListHeaderComponent={headerComponent}
       data = {assistenciaTecnicaList}
       renderItem = {oneService} 
       
       ItemSeparatorComponent = {itemSeparator}
      
     
       />
        </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    listHeader:{
   height: 70,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#3B5998',
   
    },
   lisHeadline:{
  color: '#FFF',
  fontSize: 21,
  fontWeight: 'bold',
  
  
  
   },
   item:{
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 10,

  
   },
  
   name:{
  fontWeight: 'bold',
  fontSize:18,
  marginLeft: 15,
  
   },
  
    separator: {
      height: 1,
      backgroundColor: '#FFF',
      width: '100%',
      
    },
  });
  