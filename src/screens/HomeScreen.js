import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Restaurants from "../components/Restaurants";
import Search from "../components/Search";

export default function HomeScreen() {
  const [term, setTerm] = useState("Burger");
  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("../images/burger.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("../images/pizza.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("../images/cake.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("../images/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("../images/steak.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("../images/pasta.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories
        commonCategories={commonCategories}
        setTerm={setTerm}
        term={term}
      />
      <Restaurants term={term} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(253,253,253)",
    flex: 1,
  },
});
