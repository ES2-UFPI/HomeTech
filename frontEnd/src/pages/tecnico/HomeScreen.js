import React from 'react';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, SafeAreaView } from 'react-native';



export default function HomeScreen(navigation) {

return (

<View style={styles.container}>  


<Text>Página Home do tecnico </Text>

</View>


);


}
const styles = StyleSheet.create({

    container:{
    
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },


})