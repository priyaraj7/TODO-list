import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  let mockState = [
    { id: 1, task: "practice react", complete: false },
    { id: 2, task: "learn CSS counter", complete: false },
    { id: 3, task: "Learn SQL: Update", complete: false },
  ];

  let [todos, setTodos] = useState(mockState);

  //handling if state changes, strike the todo
  //Toggle task completion
  const handleToggle = (id) => {
    let mapped = todos.map((task) => {
      return task.id === id
        ? {
            ...task,
            complete: !task.complete,
          }
        : { ...task };
    });
    setTodos(mapped);
  };

  //Delete completed tasks

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      {/* passing our entire state down to our <ToDoList /> component. */}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
