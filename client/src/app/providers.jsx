// src/app/providers.jsx

import ThemeProvider from "../context/ThemeProvider";
import { AuthProvider } from "@/features/auth/context/AuthContext";

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Providers;