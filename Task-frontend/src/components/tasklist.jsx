import "../App.css";

function TaskList({ tasks, fetchTasks, setEditingTask }) {
  const updateStatus = async (id) => {
    await fetch(`https://task-tracker-app-0010.onrender.com/api/task/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "completed" }),
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`https://task-tracker-app-0010.onrender.com/api/task/${id}`, {
      method: "DELETE",
    });
    fetchTasks();
  };

  return (
    <div className="task-list">
  {tasks.map((task) => (
    <div key={task._id} className="task-card">
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>

      <button onClick={() => updateStatus(task._id)}>Complete</button>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
      <button onClick={() => setEditingTask(task)}>Edit</button>
    </div>
  ))}
</div>

  );
}

export default TaskList;
