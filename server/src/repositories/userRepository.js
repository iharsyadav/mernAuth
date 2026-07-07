import User from "../models/User.js";
import BaseRepository from "./BaseRepository.js";

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  /* ==========================================================
     Find User By Email
  ========================================================== */

  async findByEmail(email) {
    return await this.model.findOne({ email });
  }

  /* ==========================================================
     Find User With Password
  ========================================================== */

  async findByEmailWithPassword(email) {
    return await this.model
      .findOne({ email })
      .select("+password +refreshToken");
  }

  /* ==========================================================
     Update Refresh Token
  ========================================================== */

  async updateRefreshToken(userId, refreshToken) {
    return await this.model.findByIdAndUpdate(
      userId,
      {
        refreshToken,
      },
      {
        new: true,
      },
    );
  }

  /* ==========================================================
     Remove Refresh Token
  ========================================================== */

  async removeRefreshToken(userId) {
    return await this.model.findByIdAndUpdate(
      userId,
      {
        refreshToken: null,
      },
      {
        new: true,
      },
    );
  }

  /* ==========================================================
     Update Last Login
  ========================================================== */

  async updateLastLogin(userId) {
    return await this.model.findByIdAndUpdate(
      userId,
      {
        lastLogin: new Date(),
      },
      {
        new: true,
      },
    );
  }

  /* ==========================================================
     Get Active Users
  ========================================================== */

  async getActiveUsers() {
    return await this.model.find({
      isActive: true,
    });
  }

  /* ==========================================================
     Verify Email
  ========================================================== */

  async verifyUser(userId) {
    return await this.model.findByIdAndUpdate(
      userId,
      {
        isVerified: true,
      },
      {
        new: true,
      },
    );
  }

  /* ==========================================================
     Activate / Deactivate User
  ========================================================== */

  async setActiveStatus(userId, isActive) {
    return await this.model.findByIdAndUpdate(
      userId,
      {
        isActive,
      },
      {
        new: true,
      },
    );
  }
}

export default new UserRepository();
