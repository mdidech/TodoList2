import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, markComplete, deleteItem }) => {
  TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  };
  const getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px dotted #ccc",
      textDecoration: todo.completed ? "line-through" : "none"
    };
  };

  return (
    <div style={getStyle()}>
      <p>
        <input type='checkbox' onChange={() => markComplete(todo.id)} />{" "}
        {todo.title}
        <button style={btnStyle} onClick={() => deleteItem(todo.id)}>
          x
        </button>
      </p>
    </div>
  );
};
TodoItem.propTypes = {
  markComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};
const btnStyle = {
  backgroundColor: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
