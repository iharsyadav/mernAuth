import jwt from "jsonwebtoken";

/* ==========================================================
   Generate Access Token
========================================================== */

export const generateAccessToken = (user) => {
  const payload = {
    id: user._id.toString(),
    email: user.email,
    role: user.role,
  };

  return jwt.sign(
    payload,
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES || "15m",
    }
  );
};

/* ==========================================================
   Generate Refresh Token
========================================================== */

export const generateRefreshToken = (user) => {
  const payload = {
    id: user._id.toString(),
  };

  return jwt.sign(
    payload,
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRES || "7d",
    }
  );
};

/* ==========================================================
   Verify Access Token
========================================================== */

export const verifyAccessToken = (token) => {
  return jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET
  );
};

/* ==========================================================
   Verify Refresh Token
========================================================== */

export const verifyRefreshToken = (token) => {
  return jwt.verify(
    token,
    process.env.REFRESH_TOKEN_SECRET
  );
};