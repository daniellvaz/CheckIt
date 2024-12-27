import "react-native-reanimated";
import "react-native-gesture-handler";

import { QueryClientProvider } from "@tanstack/react-query";

import { Home } from "./screens/home";
import { queryClient } from "./libs/query-client";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
