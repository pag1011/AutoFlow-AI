const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/tasks", require("./routes/taskRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));