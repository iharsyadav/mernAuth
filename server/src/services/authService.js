import ApiError from "../utils/ApiError.js";

import authRepository from "../repositories/authRepository.js";

import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";

class AuthService {
  /* ==========================================================
     Register
  ========================================================== */

  async register(userData) {
    const { name, email, password } = userData;

    if (!name || !email || !password) {
      throw ApiError.badRequest("Name, email and password are required.");
    }

    const existingUser = await authRepository.findByEmail(email);

    if (existingUser) {
      throw ApiError.conflict("Email already exists.");
    }

    const user = await authRepository.createUser({
      name,
      email,
      password,
    });

    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefreshToken(user);

    await authRepository.saveRefreshToken(user._id, refreshToken);

    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  /* ==========================================================
     Login
  ========================================================== */

  async login({ email, password }) {
    if (!email || !password) {
      throw ApiError.badRequest("Email and password are required.");
    }

    const user = await authRepository.findByEmailWithPassword(email);

    if (!user) {
      throw ApiError.unauthorized("Invalid email or password.");
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      throw ApiError.unauthorized("Invalid email or password.");
    }

    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefreshToken(user);

    await authRepository.saveRefreshToken(user._id, refreshToken);

    await authRepository.updateLastLogin(user._id);

    return {
      user,
      accessToken,
      refreshToken,
    };
  }
}

export default new AuthService();
