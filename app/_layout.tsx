import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React from "react";

// SplashScreen.preventAutoHideAsync();

// ================================================
// LAYOUT COMPONENT ===============================
// ================================================
export default function () {
  // load fonts
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // // load font on app start
  // const onLayoutRootView = React.useCallback(async () => {
  //   try {
  //     await SplashScreen.hideAsync();
  //   } catch (e) {
  //     console.warn(e);
  //   }
  // }, [fontsLoaded]);

  // show only if fonts are loaded
  if (!fontsLoaded) return null;

  // RETURN ///////////////////////////////////////
  return <Stack />;
}
