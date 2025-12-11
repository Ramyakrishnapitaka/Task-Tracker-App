import { useState } from "react";
import "../App.css";

function AddTask({ onTaskAdded }) {
  const [task, setTask] = useState("");

  const handleTask = async () => {
    if (!task.trim()) return alert("Please enter a task!");

    const newTask = { title: task, status: "pending" };

    await fetch("http://localhost:8976/api/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    setTask("");
    onTaskAdded();
  };

  
    return (
  

  <div className="center-box">
  <h2>Add New Task</h2>

  <div className="form-group">
    <input
      type="text"
      placeholder="Enter task..."
      value={task}
      onChange={(e) => setTask(e.target.value)}
      className="input"
    />

    <div className="button-group">
      <button className="button-add" onClick={handleTask}>
        Add Task
      </button>
      <button
        className="button-clear"
        onClick={() => setTask("")}
      >
        Clear
      </button>
    </div>
  </div>
</div>

);

  
}

export default AddTask;
