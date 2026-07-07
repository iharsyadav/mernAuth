import userRepository from "../repositories/userRepository.js";
import ApiError from "../utils/ApiError.js";

class UserService {
  /* ==========================================================
     Create User
  ========================================================== */

  async createUser(userData) {
    console.log("========== CREATE USER ==========");
    console.log("Incoming Data:", userData);

    const { name, email, password } = userData;

    if (!name || !email || !password) {
      throw ApiError.badRequest(
        "Name, email and password are required."
      );
    }

    const exists = await userRepository.findByEmail(email);

    if (exists) {
      throw ApiError.conflict("Email already exists.");
    }

    const user = await userRepository.create({
      name,
      email,
      password,
    });

    console.log("User Created:", user);

    return user;
  }

  /* ==========================================================
     Get All Users
  ========================================================== */

  async getUsers() {
    return await userRepository.findAll();
  }

  /* ==========================================================
     Get User By Id
  ========================================================== */

  async getUser(id) {
    const user = await userRepository.findById(id);

    if (!user) {
      throw ApiError.notFound("User not found.");
    }

    return user;
  }

  /* ==========================================================
     Update User
  ========================================================== */

  async updateUser(id, data) {
    const user = await userRepository.findById(id);

    if (!user) {
      throw ApiError.notFound("User not found.");
    }

    if (data.email && data.email !== user.email) {
      const exists = await userRepository.findByEmail(data.email);

      if (exists) {
        throw ApiError.conflict("Email already exists.");
      }
    }

    return await userRepository.updateById(id, data);
  }

  /* ==========================================================
     Delete User
  ========================================================== */

  async deleteUser(id) {
    const user = await userRepository.findById(id);

    if (!user) {
      throw ApiError.notFound("User not found.");
    }

    await userRepository.deleteById(id);

    return true;
  }
}

export default new UserService();