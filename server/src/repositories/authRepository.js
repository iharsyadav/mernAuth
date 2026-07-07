import userRepository from "./userRepository.js";

class AuthRepository {
  /* ==========================================================
     Find User By Email
  ========================================================== */

  async findByEmail(email) {
    return await userRepository.findByEmail(email);
  }

  /* ==========================================================
     Find User With Password
  ========================================================== */

  async findByEmailWithPassword(email) {
    return await userRepository.findByEmailWithPassword(email);
  }

  /* ==========================================================
     Create User
  ========================================================== */

  async createUser(userData) {
    return await userRepository.create(userData);
  }

  /* ==========================================================
     Save Refresh Token
  ========================================================== */

  async saveRefreshToken(userId, refreshToken) {
    return await userRepository.updateRefreshToken(
      userId,
      refreshToken
    );
  }

  /* ==========================================================
     Remove Refresh Token
  ========================================================== */

  async removeRefreshToken(userId) {
    return await userRepository.removeRefreshToken(userId);
  }

  /* ==========================================================
     Update Last Login
  ========================================================== */

  async updateLastLogin(userId) {
    return await userRepository.updateLastLogin(userId);
  }

  /* ==========================================================
     Find User By Id
  ========================================================== */

  async findById(id) {
    return await userRepository.findById(id);
  }
}

export default new AuthRepository();