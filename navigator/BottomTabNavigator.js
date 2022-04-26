import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import PerfilScreen from "../screens/PerfilScreen";
import SearchScreen from "../screens/SearchScreen";
import ReelsScreen from "../screens/ReelsScreen";
import ShopScreen from "../screens/ShopScreen";
import HomeScreen from "../screens/HomeScreen";

import { useContext } from "react";
import { ModeContext } from "../context/Context";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const ctx = useContext(ModeContext);

  const {changeMode, darkMode} = ctx;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: !darkMode ? "#2d2d2d" : "#fff",
        tabBarStyle: {
          backgroundColor: darkMode ? "#2d2d2d" : "#fff",
        },
        headerStyle: {
          backgroundColor: darkMode ? "#2d2d2d" : "#fff",
        },
        headerTintColor: !darkMode ? "#2d2d2d" : "#fff",
        headerStatusBarHeight: 30,
        headerTitleStyle: {
          fontSize: 25,
          paddingBottom: 10,
        },
        headerLeft: ({ tintColor }) => (
          <Ionicons
            name={darkMode ? "md-sunny" : "md-moon"}
            style={{ fontSize: 24, color: tintColor, paddingLeft: 15 }}
            onPress={() => {
              changeMode();
            }}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "md-home" : "md-home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "md-search" : "md-search-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "md-film" : "md-film-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "md-pricetags" : "md-pricetags-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "md-person" : "md-person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
