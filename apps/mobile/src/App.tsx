import "react-native-reanimated";
import "react-native-gesture-handler";

import * as SplashScreen from "expo-splash-screen";
import { QueryClientProvider } from "@tanstack/react-query";

import { Home } from "./screens/home";
import { queryClient } from "./libs/query-client";
import { Splash } from "./screens/splash";
import { useState } from "react";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      {!isLoaded ? <Splash onLoaded={setIsLoaded} /> : <Home />}
    </QueryClientProvider>
  );
}
