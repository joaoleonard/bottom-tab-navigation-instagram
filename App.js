import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./navigator/BottomTabNavigator";
import ModeContextProvider from "./context/Context";
import MyStatusBar from "./components/MyStatusBar";
import DMScreen from "./screens/DMScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ModeContextProvider>
      <MyStatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DMScreen"
            component={DMScreen}
            options={{ 
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ModeContextProvider>
  );
}

const styles = StyleSheet.create({});
