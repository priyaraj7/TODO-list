import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import ToDoForm from "./components/TodoFom";

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
      return task.id === Number(id)
        ? {
            ...task,
            complete: !task.complete,
          }
        : { ...task };
    });
    setTodos(mapped);
  };

  //Delete completed tasks
  //button is in todolist component
  const handleDeletedTask = () => {
    let filtered = todos.filter((x) => !x.complete);
    setTodos(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...todos];
    copy = [
      ...copy,
      { id: todos.length + 1, task: userInput, complete: false },
    ];
    setTodos(copy);
  };

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      {/* passing our entire state down to our <ToDoList /> component. */}
      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleDeletedTask={handleDeletedTask}
      />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
