import UserPrompt from "../../models/UserPrompt.js";

export const getRemainingPrompts = async (req, res) => {
  const { userId } = req.auth;
  const DAILY_LIMIT = 5;
  try {
    let userPrompt = await UserPrompt.findOne({ userId });
    const now = new Date();
    if (!userPrompt) {
      return res.json({ remaining: DAILY_LIMIT });
    }
    const lastReset = new Date(userPrompt.lastReset);
    // Reset prompt count if a new day has started
    if (
      lastReset.getFullYear() !== now.getFullYear() ||
      lastReset.getMonth() !== now.getMonth() ||
      lastReset.getDate() !== now.getDate()
    ) {
      userPrompt.promptCount = 0;
      userPrompt.lastReset = now;
      await userPrompt.save();
    }
    res.json({ remaining: DAILY_LIMIT - userPrompt.promptCount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching remaining prompts" });
  }
};

export const checkAndIncrementPrompt = async (userId) => {
  const DAILY_LIMIT = 5;
  let userPrompt = await UserPrompt.findOne({ userId });
  const now = new Date();
  if (!userPrompt) {
    userPrompt = await UserPrompt.create({
      userId,
      promptCount: 0,
      lastReset: now,
    });
  } else {
    const lastReset = new Date(userPrompt.lastReset);
    if (
      lastReset.getFullYear() !== now.getFullYear() ||
      lastReset.getMonth() !== now.getMonth() ||
      lastReset.getDate() !== now.getDate()
    ) {
      userPrompt.promptCount = 0;
      userPrompt.lastReset = now;
    }
  }
  if (userPrompt.promptCount >= DAILY_LIMIT) {
    throw new Error(
      "Daily prompt limit reached. Please recharge for more prompts."
    );
  }
  userPrompt.promptCount += 1;
  await userPrompt.save();
};
