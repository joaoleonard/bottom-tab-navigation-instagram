import { View, Text, StyleSheet } from "react-native";

function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SearchScreen</Text>
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
});
