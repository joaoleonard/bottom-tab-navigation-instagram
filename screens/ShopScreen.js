import { View, Text, StyleSheet } from "react-native";

function ShopScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ShopScreen</Text>
    </View>
  );
}

export default ShopScreen;

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
