// import { useState, useEffect } from "react";
// import TaskList from "./components/tasklist.jsx";
// import Updatetask from "./components/updatetask.jsx";
// import AddTask from "./components/task.jsx";
// import "./App.css";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [editingTask, setEditingTask] = useState(null);

//   const fetchTasks = async () => {
//     const res = await fetch("http://localhost:8976/api/task");
//     const data = await res.json();
//     setTasks(data);
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   return (
//     <div>
//       <h1>Task Tracker</h1>

//       <AddTask onTaskAdded={fetchTasks} />

//       {editingTask && (
//         <Updatetask
//           task={editingTask}
//           onUpdateSuccess={() => {
//             setEditingTask(null);
//             fetchTasks();
//           }}
//         />
//       )}

//       <TaskList
//         tasks={tasks}
//         fetchTasks={fetchTasks}
//         setEditingTask={setEditingTask}
//       />
//     </div>
//   );
// }

// export default App;
   


import { useState, useEffect } from "react";
import TaskList from "./components/tasklist.jsx";
import Updatetask from "./components/updatetask.jsx";
import AddTask from "./components/task.jsx";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8976/api/task");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app-container">

      <AddTask onTaskAdded={fetchTasks} />

      {editingTask && (
        <Updatetask
          task={editingTask}
          onUpdateSuccess={() => {
            setEditingTask(null);
            fetchTasks();
          }}
        />
      )}

      <TaskList
        tasks={tasks}
        fetchTasks={fetchTasks}
        setEditingTask={setEditingTask}
      />
    </div>
  );
}

export default App;
