import { useContext } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import BottomTabNavigator from "./navigator/BottomTabNavigator";
import ModeContextProvider, { ModeContext } from "./context/Context";

const Stack = createNativeStackNavigator();

export default function App() {
  const ctx = useContext(ModeContext);

  return (
    <ModeContextProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ModeContextProvider>
  );
}

const styles = StyleSheet.create({});
