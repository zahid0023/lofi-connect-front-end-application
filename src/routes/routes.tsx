import { createBrowserRouter } from "react-router";

import { DashboardPage } from "@/pages/DashboardPage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import AuthRoute from "@/routes/AuthRoute";
import PrivateRoute from "@/routes/PrivateRoute";
import ErrorPage from "@/pages/ErrorPage";
import { TermsConditionPage } from "@/pages/TermsConditionPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { ApiKeysPage } from "@/pages/ApiKeysPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute />,
    children: [
      { index: true, path: "/", element: <LoginPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
    errorElement: <ErrorPage />,
  },
  { path: "/terms", element: <TermsConditionPage /> },
  { path: "/privacy", element: <PrivacyPolicyPage /> },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      { index: true, path: "/dashboard", element: <DashboardPage /> },
      { path: "/api-keys", element: <ApiKeysPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
