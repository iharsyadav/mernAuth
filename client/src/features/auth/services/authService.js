import { apiClient } from "@/api/apiClient";
import { ENDPOINTS } from "@/api/endpoints";

/* ==========================================
   Register
========================================== */

export const register = async (userData) => {
  return await apiClient(ENDPOINTS.AUTH.REGISTER, {
    method: "POST",
    body: JSON.stringify(userData),
    credentials: "include",
  });
};

/* ==========================================
   Login
========================================== */

export const login = async (credentials) => {
  return await apiClient(ENDPOINTS.AUTH.LOGIN, {
    method: "POST",
    body: JSON.stringify(credentials),
    credentials: "include",
  });
};

/* ==========================================
   Logout
========================================== */

export const logout = async () => {
  return await apiClient(ENDPOINTS.AUTH.LOGOUT, {
    method: "POST",
    credentials: "include",
  });
};

/* ==========================================
   Current User
========================================== */

export const getCurrentUser = async () => {
  return await apiClient(ENDPOINTS.AUTH.ME, {
    credentials: "include",
  });
};

/* ==========================================
   Refresh Token
========================================== */

export const refreshToken = async () => {
  return await apiClient(ENDPOINTS.AUTH.REFRESH, {
    method: "POST",
    credentials: "include",
  });
};