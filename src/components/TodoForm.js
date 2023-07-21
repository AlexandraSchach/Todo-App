import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (value) {
    addTodo(value);

    setValue("");
    }
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit} name="todoForm">
      <input type="text" className="todo-input" 
        value= {value} placeholder="Was steht heute an?"
        onChange={(e) => setValue(e.target.value)} />
      <button type="submit" className="todo-btn" >+</button>
    </form>
  );
};
