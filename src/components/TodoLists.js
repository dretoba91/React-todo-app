import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoLists extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}

export default TodoLists;
