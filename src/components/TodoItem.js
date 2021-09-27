import React from "react";

function TodoItem(props) {
  return (
    <div>
      <li>{props.todo.title}</li>
    </div>
  );
}

export default TodoItem;
