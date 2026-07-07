class ApiResponse {
  constructor(
    statusCode = 200,
    message = "Success",
    data = null,
    success = true,
    meta = null
  ) {
    this.success = success;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.meta = meta;
    this.timestamp = new Date().toISOString();
  }

  static success({
    statusCode = 200,
    message = "Success",
    data = null,
    meta = null,
  } = {}) {
    return new ApiResponse(statusCode, message, data, true, meta);
  }

  static created({
    message = "Resource created successfully",
    data = null,
  } = {}) {
    return new ApiResponse(201, message, data);
  }

  static noContent() {
    return {
      success: true,
      statusCode: 204,
      message: "No Content",
      data: null,
    };
  }
}

export default ApiResponse;