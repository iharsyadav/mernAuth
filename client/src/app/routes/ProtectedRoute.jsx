import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuthContext } from "@/features/auth/context/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuthContext();

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-xl font-semibold">Loading...</h1>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
