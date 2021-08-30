import React from "react";
//ToDo.js is one single row in our To Do List
const Todo = ({ todo }) => {
  return <div className={todo.complete ? "strike" : ""}>{todo.task}</div>;
};

export default Todo;
