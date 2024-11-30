import { createContext, useReducer } from "react";

const TaskContext = createContext();

function taskReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), name: action.payload, status: "ยังไม่เสร็จ" }];
    case "toggle":
      return state.map((task) =>
        task.id === action.id
          ? { ...task, status: task.status === "ยังไม่เสร็จ" ? "เสร็จสิ้น" : "ยังไม่เสร็จ" }
          : task
      );
    case "remove":
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
}

function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };