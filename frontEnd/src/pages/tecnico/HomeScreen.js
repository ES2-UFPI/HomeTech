import React from 'react';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, SafeAreaView } from 'react-native';



export default function HomeScreen(navigation) {

return (

    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headline}>HomeTech </Text>
    </View>

    <View style={styles.subheader}>
      <Text style={styles.subHeadline}>serviços disponíveis </Text>
    </View>

    



</SafeAreaView>
);


}
const styles = StyleSheet.create({
    container:{
    
        flex: 1,
        
        
    },

    header: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3B5998",
      },
      headline: {
        color: "#FFF",
        fontSize: 21,
        fontWeight: "bold",
      },
    
    subheader:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        marginTop: 8,

    },
    subHeadline: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold",
      },

})