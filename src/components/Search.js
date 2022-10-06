import { View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../common/styles";

const Search = ({ setTerm }) => {
  const [input, setInput] = useState("");
  const handleEndEditing = () => {
    if (!input) return;
    setTerm(input);
    setInput("");
  };
  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        style={styles.input}
        placeholder="Restaurants, Food"
        onChangeText={(text) => setInput(text)}
        value={input}
        onEndEditing={handleEndEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 40,
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Search;
