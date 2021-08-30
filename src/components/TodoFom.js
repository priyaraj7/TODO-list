import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  //This is the function that will handle the local state’s changes.
  //Every time a user types in the input box, the state will change to reflect the most recent input
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  //this function will fire to add the task to the toDoList array.

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task"
      />
      <button>Submit</button>
    </form>
  );
};

export default ToDoForm;
