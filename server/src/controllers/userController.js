import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import userService from "../services/userService.js";

/* ==========================================================
   Create User
========================================================== */

export const createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);

  return res.status(201).json(
    ApiResponse.created({
      message: "User created successfully.",
      data: user,
    })
  );
});

/* ==========================================================
   Get Users
========================================================== */

export const getUsers = asyncHandler(async (req, res) => {
  const users = await userService.getUsers();

  return res.status(200).json(
    ApiResponse.success({
      message: "Users fetched successfully.",
      data: users,
    })
  );
});

/* ==========================================================
   Get User
========================================================== */

export const getUserById = asyncHandler(async (req, res) => {
  const user = await userService.getUser(req.params.id);

  return res.status(200).json(
    ApiResponse.success({
      message: "User fetched successfully.",
      data: user,
    })
  );
});

/* ==========================================================
   Update User
========================================================== */

export const updateUser = asyncHandler(async (req, res) => {
  const user = await userService.updateUser(
    req.params.id,
    req.body
  );

  return res.status(200).json(
    ApiResponse.success({
      message: "User updated successfully.",
      data: user,
    })
  );
});

/* ==========================================================
   Delete User
========================================================== */

export const deleteUser = asyncHandler(async (req, res) => {
  await userService.deleteUser(req.params.id);

  return res.status(200).json(
    ApiResponse.success({
      message: "User deleted successfully.",
    })
  );
});