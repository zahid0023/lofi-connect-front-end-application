import { createBrowserRouter } from "react-router";

import { DashboardPage } from "@/pages/DashboardPage";
import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import AuthRoute from "@/routes/AuthRoute";
import PrivateRoute from "@/routes/PrivateRoute";
import ErrorPage from "@/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute />,
    children: [
      { index: true, path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [{ index: true, path: "/dashboard", element: <DashboardPage /> }],
    errorElement: <ErrorPage />,
  },
]);
