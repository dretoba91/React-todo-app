import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoLists extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            childHandleChangeProps={this.props.handleChangeProps}
            childDeleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodoLists;
