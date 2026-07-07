import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import homeRoutes from "@/features/home/routes";
import testRoutes from "@/features/test/routes";
import userRoutes from "@/features/users/routes";
import authRoutes from "@/features/auth/routes";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import NotFound from "@/shared/pages/NotFound";

const router = createBrowserRouter([
  {
    element: <RootLayout />, // Always rendered
    children: [
      // Public auth pages
      {
        element: <PublicRoute />,
        children: [
          {
            element: <AuthLayout />,
            children: [...authRoutes],
          },
        ],
      },

      // Protected application
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <MainLayout />,
            children: [
              ...userRoutes,
              ...homeRoutes,
              ...testRoutes,
              
            ],
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;