import { useState } from "react";
import "../App.css";

function Updatetask({ task, onUpdateSuccess }) {
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);

  const handleUpdate = async () => {
    await fetch(`http://localhost:8976/api/task/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, status }),
    });

    onUpdateSuccess();
  };

  return (
  <div className="overlay">
    <div className="center-box">
      <h2>Update Task</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      <button onClick={handleUpdate}>Update</button>
    </div>
  </div>
);

}

export default Updatetask;
