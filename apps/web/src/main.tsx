import "./styles/index.css";
import "react-loading-skeleton/dist/skeleton.css";

import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";

import { queryClient } from "./libs/query-client.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
