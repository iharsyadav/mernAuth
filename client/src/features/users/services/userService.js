import { apiClient } from "@/api/apiClient";
import { ENDPOINTS } from "@/api/endpoints";

// ======================================
// GET ALL USERS
// ======================================
export const getUsers = async () => {
  return await apiClient(ENDPOINTS.USER.GET_ALL);
};

// ======================================
// GET SINGLE USER
// ======================================
export const getUserById = async (id) => {
  return await apiClient(`${ENDPOINTS.USER.GET_BY_ID}/${id}`);
};

// ======================================
// CREATE USER
// ======================================
export const createUser = async (userData) => {
  return await apiClient(ENDPOINTS.USER.CREATE, {
    method: "POST",
    body: JSON.stringify(userData),
  });
};

// ======================================
// UPDATE USER
// ======================================
export const updateUser = async (id, userData) => {
  return await apiClient(`${ENDPOINTS.USER.UPDATE}/${id}`, {
    method: "PUT",
    body: JSON.stringify(userData),
  });
};

// ======================================
// DELETE USER
// ======================================
export const deleteUser = async (id) => {
  return await apiClient(`${ENDPOINTS.USER.DELETE}/${id}`, {
    method: "DELETE",
  });
};
