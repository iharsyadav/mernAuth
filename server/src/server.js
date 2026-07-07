import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect Database
    await connectDB();

    // Start Express Server
    const server = app.listen(PORT, () => {
      console.log("==================================");
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌍 Environment : ${process.env.NODE_ENV || "development"}`);
      console.log(`📡 API : http://localhost:${PORT}`);
      console.log("==================================");
    });

    // Graceful Shutdown
    const shutdown = (signal) => {
      console.log(`\n${signal} received. Shutting down server...`);

      server.close(() => {
        console.log("✅ HTTP Server Closed");
        process.exit(0);
      });
    };

    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));
  } catch (error) {
    console.error("==================================");
    console.error("❌ Failed to start server");
    console.error(error);
    console.error("==================================");
    process.exit(1);
  }
};

startServer();