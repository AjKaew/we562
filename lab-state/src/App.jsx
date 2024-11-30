import { useState } from "react";
import TaskList from "./TaskList";
import { TaskContext, TaskProvider } from "./TaskContext";

function App() {
  const [task, setTask] = useState("");

  const handleAddTask = (dispatch) => {
    if (!task.trim()) return;
    dispatch({ type: "add", payload: task });
    setTask("");
  };

  return (
    <TaskProvider>
      <div>
        <h1>Task Manager</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <TaskContext.Consumer>
          {({ dispatch }) => (
            <button onClick={() => handleAddTask(dispatch)}>Add Task</button>
          )}
        </TaskContext.Consumer>
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;