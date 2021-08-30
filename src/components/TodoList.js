import React from "react";
import Todo from "./Todo";

//The ToDoList.js file is the container that holds all of our todos
const ToDoList = ({ todos }) => {
  return (
    <div>
      {/* map over the state object that was passed down as props to create individual todos */}
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
};

export default ToDoList;
