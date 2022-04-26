import { View, Text, StyleSheet } from "react-native";

function ReelsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReelsScreen</Text>
    </View>
  );
}

export default ReelsScreen;

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
