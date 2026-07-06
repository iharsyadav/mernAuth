import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";

import homeRoutes from "../../features/home/routes";
import testRoutes from "../../features/test/routes";
import userRoutes from "../../features/users/routes";

import NotFound from "../../shared/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      ...homeRoutes,
      ...testRoutes,
      ...userRoutes,
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;