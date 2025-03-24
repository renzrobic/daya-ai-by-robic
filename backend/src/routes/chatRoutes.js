import express from "express";
import { requireAuth } from "@clerk/express";
import {
  createChat,
  getUserChats,
  getChat,
  updateChat,
  deleteChat,
} from "../controllers/chatController.js";

const router = express.Router();

router.post("/chats", requireAuth(), createChat);
router.get("/userchats", requireAuth(), getUserChats);
router.get("/chats/:id", requireAuth(), getChat);
router.put("/chats/:id", requireAuth(), updateChat);
router.delete("/chats/:id", requireAuth(), deleteChat);

export default router;
