import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    AKBold: require("../assets/fonts/Akatab-Bold.ttf"),
    AKMedium: require("../assets/fonts/Akatab-Medium.ttf"),
    AKRegular: require("../assets/fonts/Akatab-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack >
      <Stack.Screen name="home" />
      
    </Stack>
  )
};

export default Layout;