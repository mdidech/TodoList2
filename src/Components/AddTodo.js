import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const onChange = e => {
    setTitle(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type='text'
        name='todo'
        placeholder='Add Todo...'
        value={title}
        onChange={onChange}
        style={{ flex: "10", padding: "5px" }}
      />
      <input
        type='submit'
        value='Submit'
        className='btn'
        style={{ flex: "1" }}
      />
    </form>
  );
};

export default AddTodo;
