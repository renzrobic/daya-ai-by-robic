import express from "express";
import { requireAuth } from "@clerk/express";
import { getRemainingPrompts } from "../controllers/promptController.js";

const router = express.Router();

router.get("/prompts/remaining", requireAuth(), getRemainingPrompts);

export default router;
