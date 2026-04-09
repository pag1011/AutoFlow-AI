export default function Dashboard({ tasks }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Total Tasks: {tasks.length}</h3>
    </div>
  );
}