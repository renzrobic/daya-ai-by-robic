import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import connectDB from "./src/config/db.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import chatRoutes from "./src/routes/chatRoutes.js";
import promptRoutes from "./src/routes/promptRoutes.js";
import uploadRoutes from "./src/routes/uploadRoutes.js";
import errorHandler from "./src/middleware/errorMiddleware.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// __filename and __dirname are needed for serving static files in production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Clerk middleware should be first
app.use(clerkMiddleware());

// Allowed origins for CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://daya-ai-by-robic.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      // Otherwise, reject the request
      return callback(new Error(`Not allowed by CORS: ${origin}`));
    },
    credentials: true, // Allows cookies and other credentials
  })
);

app.use(express.json());

// API Routes
app.use("/api", contactRoutes);
app.use("/api", chatRoutes);
app.use("/api", promptRoutes);
app.use("/api", uploadRoutes);

// Global error handler
app.use(errorHandler);

// Serve Frontend for production builds
if (process.env.NODE_ENV === "production") {
  // Serve static files from the frontend build folder
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
  });
}

// Start Server and connect to MongoDB
app.listen(port, () => {
  connectDB();
  console.log(`Server running on port ${port}`);
});
