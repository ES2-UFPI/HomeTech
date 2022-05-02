import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, SafeAreaView } from 'react-native';



export default function ListAssitenciaTecnica({navigation}) {

  const [service, setService] = useState("");

 const assistenciaTecnicaList = [

    {
        id:1,
        name:"Acessibilidade", 
  
      },
      {
          id:2,
          name:"Afiaçção", 
    
        },
  
        {
          id:3,
          name:"Agrimensura", 
    
        },
  
        {
          id:4,
          name:"Arquiteto", 
    
        },
  
        {
          id:5,
          name:"Banheira", 
    
        },
  
        {
          id:6,
          name:"Casas e Chalés de madeira", 
    
        },
  
        {
          id:7,
          name:"Chaveiro", 
    
        },
  
        {
          id:8,
          name:" Cimatização ", 
    
        },
  
        {
          id:9,
          name:"Decorador ", 
    
        },
  
        {
          id:10,
          name:"Demolição", 
    
        }, 
        {
          id:11,
          name:"Desentupidor", 
    
        },
  
        {
          id:12,
          name:"Design de interiores", 
    
        },
        {
          id:13,
          name:" Eletricista", 
    
        },
  
        {
          id:14,
          name:"Engenheiro", 
    
        },
  
        {
          id:15,
          name:"Encanador ", 
    
        },
  
        {
        id: 16,
          name : "Fossa ", 
    
        },
        {
          id: 17,
            name : "Gesso e drywall ", 
      
          },
          {
              id: 18,
                name : "Gás", 
          
              },
              {
                  id: 19,
                    name : "Jardinagem ", 
              
                  },
  
                  {
                      id: 20,
                        name : "Marceneiro ", 
                  
                      },
                      {
                          id: 21,
                            name : "Pintor ", 
                      
                          },
                      
                          {
                              id: 22,
                                name : "Piscina ", 
                          
                              },
                      
                              {
                                  id: 23,
                                    name : "Portão automático ", 
                              
                                  },
                      
                                  {
                                      id: 24,
                                        name : "Segurança eletrônica ", 
                                  
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
  