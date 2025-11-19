import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";

import { Toaster } from "@/components/ui/sonner";
import { TanstackQueryProvider } from "@/providers/TanstackQueryProvider.tsx";
import { AuthProvider } from "@/providers/AuthProvider";
import { router } from "@/routes/routes.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackQueryProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </TanstackQueryProvider>
    <Toaster richColors />
  </StrictMode>
);
