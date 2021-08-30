import React from "react";
import Todo from "./Todo";

//The ToDoList.js file is the container that holds all of our todos
const ToDoList = ({ todos, handleToggle, handleDeletedTask }) => {
  return (
    <div>
      {/* map over the state object that was passed down as props to create individual todos */}
      {todos.map((todo, i) => {
        return (
          <Todo
            key={i}
            todo={todo}
            handleToggle={handleToggle}
            handleDeletedTask={handleDeletedTask}
          />
        );
      })}

      <button className="listButton" onClick={handleDeletedTask}>
        {" "}
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
