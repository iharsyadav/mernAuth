import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/userRoutes.js";

import notFoundMiddleware from "./middleware/notFound.middleware.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

/* ==========================================================
   CORS
========================================================== */

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

/* ==========================================================
   Built-in Middlewares
========================================================== */

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* ==========================================================
   Health Check
========================================================== */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Running 🚀",
  });
});

/* ==========================================================
   API Routes
========================================================== */

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

/* ==========================================================
   404 Handler
========================================================== */

app.use(notFoundMiddleware);

/* ==========================================================
   Global Error Handler
========================================================== */

app.use(errorMiddleware);

export default app;