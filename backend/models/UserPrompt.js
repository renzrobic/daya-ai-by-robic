// models/UserPrompt.js
import mongoose from "mongoose";

const UserPromptSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  promptCount: { type: Number, default: 0 },
  lastReset: { type: Date, default: Date.now },
});

export default mongoose.model("UserPrompt", UserPromptSchema);
