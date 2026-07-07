import ApiError from "../utils/ApiError.js";

const notFoundMiddleware = (req, res, next) => {
  next(
    ApiError.notFound(`Cannot ${req.method} ${req.originalUrl}`)
  );
};

export default notFoundMiddleware;