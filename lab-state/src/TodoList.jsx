import { useReducer, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), task: action.payload }];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "clear":
      return [];
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (!task.trim()) return;
    dispatch({ type: "add", payload: task });
    setTask("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={() => dispatch({ type: "clear" })}>Clear All</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}{" "}
            <button onClick={() => dispatch({ type: "remove", id: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;