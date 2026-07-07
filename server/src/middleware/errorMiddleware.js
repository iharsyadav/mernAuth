import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const errorMiddleware = (err, req, res, next) => {
  let error = err;

  // Convert unknown errors to ApiError
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";

    error = new ApiError(statusCode, message);
  }

  // Mongoose CastError
  if (err.name === "CastError") {
    error = ApiError.badRequest(`Invalid ${err.path}: ${err.value}`);
  }

  // Mongoose Validation Error
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((item) => item.message);

    error = ApiError.validation("Validation Failed", errors);
  }

  // Duplicate Key Error
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];

    error = ApiError.conflict(`${field} already exists`);
  }

  console.error("======================================");
  console.error("ERROR:", err);
  console.error("======================================");

  return res.status(error.statusCode).json(
    new ApiResponse(
      error.statusCode,
      error.message,
      null,
      false,
      error.errors
    )
  );
};

export default errorMiddleware;