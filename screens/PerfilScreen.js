import { View, Text, StyleSheet } from "react-native";

function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil Screen</Text>
    </View>
  );
}

export default PerfilScreen;

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
