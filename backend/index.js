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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Clerk middleware should be first
app.use(clerkMiddleware());

// Allowed Origins for CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://daya-ai-by-robic.vercel.app/api",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
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

// Serve Frontend
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

// Start Server
app.listen(port, () => {
  connectDB();
  console.log(`Server running on port ${port}`);
});
