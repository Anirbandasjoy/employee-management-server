import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routes/routes";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <Toaster position="top-right" reverseOrder={false} />
  </QueryClientProvider>
);
