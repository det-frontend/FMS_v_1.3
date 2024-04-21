import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import Screen from "./app/components/Screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import color from "./app/config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DispenserScreen from "./app/screens/DispenserScreen";
import ReportScreen from "./app/screens/ReportsScreen";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import { useEffect, useState } from "react";
import authStore from "./app/auth/storage";
import AppLoading from "expo-app-loading";
import WelcomeScreen from "./app/screens/welcomeScreen";
import WifiScreen from "./app/screens/wifiScreen";

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tap = createBottomTabNavigator();
const TapNavigator = () => (
  <Tap.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: color.button },
      headerTintColor: color.white,
      tabBarStyle: { backgroundColor: "#2a2d35" },
      tabBarActiveTintColor: "#52a950",
      tabBarActiveBackgroundColor: color.button,
      tabBarInactiveTintColor: color.sublight,
    }}
  >
    <Tap.Screen
      name="Dispensers"
      component={DispenserScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="gas-station"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tap.Screen
      name="Reports"
      component={ReportScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="record-circle"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tap.Navigator>
);

export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const retoreToken = async () => {
    const user = await authStore.getUser();
    console.log("user", user);
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={retoreToken}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AuthNavigator /> : <WelcomeScreen />}
        <StatusBar barStyle="light-content" />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
