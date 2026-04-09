import API from "../services/api";

export default function TaskList({ tasks, fetchTasks }) {

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div>
      {tasks.map((t) => (
        <div
          key={t._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p><b>Task:</b> {t.text}</p>
          <p><b>AI Response:</b> {t.aiResponse}</p>

          {/* 🔥 DELETE BUTTON */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={() => deleteTask(t._id)}
              style={{
              backgroundColor: "#ff4d4d",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "5px",
              cursor: "pointer",
              }}
            >
            Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}