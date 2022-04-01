import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  SearchBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Home({ navigation }) {
  const services = [
    {
      id: 1,
      name: "Assistência Técnica",
      image: require("../assets/assistenciaTecnica.png"),
    },
    {
      id: 2,
      name: "Reformas e Reparos",
      image: require("../assets/reformasReparos.png"),
    },
    {
      id: 3,
      name: "Eventos",
      image: require("../assets/eventos.png"),
    },
    {
      id: 4,
      name: "Moda e Beleza",
      image: require("../assets/beauty.png"),
    },
    {
      id: 5,
      name: "Automóveis",
      image: require("../assets/carro.png"),
    },
  ];

  const oneService = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("ListServices")}>
      <View style={styles.item}>
        <View style={styles.serviceContainer}>
          <Image source={item.image} style={styles.service} />
        </View>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  itemSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.lisHeadline}>HomeTech Services</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Buscar serviço..."
          placeholderTextColor="#888"
          itemSeparator
          /*onChangeText={(t) => setSearchText(t)}*/
        />
      </View>
      <FlatList
        data={services}
        renderItem={oneService}
        ItemSeparatorComponent={itemSeparator}
      />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B5998",
  },
  lisHeadline: {
    color: "#FFF",
    fontSize: 21,
    fontWeight: "bold",
  },
  container: {
    padding: 4,
    height: 100,
  },

  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
  },
  serviceContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    height: 89,
    width: 89,
    justifyContent: "center",
    alignItems: "center",
  },

  service: {
    height: 55,
    width: 55,
  },

  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
  },

  separator: {
    height: 1,
    backgroundColor: "#CCC",
    width: "100%",
  },

  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#363636",
    margin: 30,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
    color: "#FFFFFF",
  },
});
