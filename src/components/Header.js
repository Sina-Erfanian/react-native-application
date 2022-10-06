import { View, Text, StyleSheet } from "react-native";
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Grab Your</Text>
      <Text style={styles.boldHeader}>Delicious meal!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 60,
  },
  lightHeader: {
    fontSize: 35,
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default Header;
