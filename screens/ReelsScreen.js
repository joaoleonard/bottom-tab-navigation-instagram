import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { ModeContext } from "../context/Context";

function ReelsScreen() {
  const ctx = useContext(ModeContext);

  const { darkMode } = ctx;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: darkMode ? "#1a1a1a" : "#fff",
    },
    title: {
      fontSize: 24,
      color: darkMode ? '#fff' : '#2d2d2d'
    },
  });
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReelsScreen</Text>
    </View>
  );
}

export default ReelsScreen;
