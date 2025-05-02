import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const App = () => {
  const router = createRouter({ routeTree });
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        experimental_prefetchInRender: true,
      },
    },
  });
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
