import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import authService from "../services/authService.js";

import {
  refreshCookieOptions,
} from "../utils/cookieOptions.js";

/* ==========================================================
   Register
========================================================== */

export const register = asyncHandler(
  async (req, res) => {
    const {
      user,
      accessToken,
      refreshToken,
    } = await authService.register(
      req.body
    );

    res.cookie(
      "refreshToken",
      refreshToken,
      refreshCookieOptions
    );

    return res.status(201).json(
      ApiResponse.created({
        message:
          "User registered successfully.",
        data: {
          user,
          accessToken,
        },
      })
    );
  }
);/* ==========================================================
   Login
========================================================== */

export const login = asyncHandler(async (req, res) => {
  const {
    user,
    accessToken,
    refreshToken,
  } = await authService.login(req.body);

  res.cookie(
    "refreshToken",
    refreshToken,
    refreshCookieOptions
  );

  return res.status(200).json(
    ApiResponse.success({
      message: "Login successful.",
      data: {
        user,
        accessToken,
      },
    })
  );
});