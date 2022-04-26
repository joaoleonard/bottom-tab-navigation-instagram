import { View, StyleSheet, Text } from "react-native";
import { useContext } from "react";
import { ModeContext } from "../context/Context";

function HomeScreen() {
  const ctx = useContext(ModeContext);

  const { darkMode } = ctx;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: darkMode ? "#1a1a1a" : "#fff",
      margin: 0,
      padding: 0
    },
    title: {
      fontSize: 24,
      color: darkMode ? '#fff' : '#2d2d2d'
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

export default HomeScreen;
