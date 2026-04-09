const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const analyzeTask = require("../services/aiService");

// CREATE TASK + AI
router.post("/", async (req, res) => {
  try {
    const { text } = req.body;

    // 🔥 DUPLICATE CHECK
    const existingTask = await Task.findOne({ text });
    if (existingTask) {
      return res.status(400).json({ message: "Task already exists" });
    }

    const aiResponse = await analyzeTask(text);

    const newTask = new Task({
      text,
      aiResponse,
    });

    await newTask.save();

    res.json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL TASKS
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE TASK
router.delete("/:id", async (req, res) => {
  console.log("DELETE HIT:", req.params.id);
  
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;