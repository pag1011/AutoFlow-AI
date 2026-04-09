import { useState } from "react";
import API from "../services/api";

export default function TaskForm({ fetchTasks }) {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!task) return;

  try {
    await API.post("/tasks", { text: task });
    setTask("");
    fetchTasks();
  } catch (err) {
    alert("Task already exists ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task..."
        style={{ padding: "10px", width: "250px" }}
      />
      <button type="submit" style={{ padding: "10px", marginLeft: "10px" }}>
        Add
      </button>
    </form>
  );
}