import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div>
        <li>
          <input
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={() =>
              this.props.childHandleChangeProps(this.props.todo.id)
            }
          />
          <button
            onClick={() => this.props.childDeleteTodoProps(this.props.todo.id)}
          >
            Delete
          </button>
          {this.props.todo.title}
        </li>
      </div>
    );
  }
}

export default TodoItem;
