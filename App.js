import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

import navigationTheme from "./src/navigation/navigationTheme";
import AuthNavigator from "./src/navigation/AuthNavigator";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  const [loadedFonts] = useFonts({
    Montserrat_300Light: require("./src/assets/fonts/Montserrat-Light.ttf"),
    Montserrat_400Regular: require("./src/assets/fonts/Montserrat-Regular.ttf"),
    Montserrat_500Medium: require("./src/assets/fonts/Montserrat-Medium.ttf"),
    Montserrat_600SemiBold: require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
    Montserrat_700Bold: require("./src/assets/fonts/Montserrat-Bold.ttf"),
    Urdu_400Regular: require("./src/assets/fonts/NotoNastaliqUrdu-Regular.ttf"),
    Urdu_500Medium: require("./src/assets/fonts/NotoNastaliqUrdu-Medium.ttf"),
    Urdu_600SemiBold: require("./src/assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loadedFonts) {
    return null;
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
}
