import { useContext } from "react";
import { TaskContext } from "./TaskContext";

function TaskList() {
  const { tasks, dispatch } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.name} - {task.status}</span>{" "}
          <button onClick={() => dispatch({ type: "toggle", id: task.id })}>
            Toggle Status
          </button>
          <button onClick={() => dispatch({ type: "remove", id: task.id })}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;