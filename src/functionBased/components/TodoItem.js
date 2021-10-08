import React, { Component } from "react";
import styles from "./TodoItems.module.css";

class TodoItem extends Component {
  state = {
    editing: false,
  };

  // this method will be trigger to allow us edit the TodoItem that was clicked for editing.
  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  //this method will be trigger to submit and hide the input text field
  handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      this.setState({
        editing: false,
      });
    }
  };

  componentWillUnmount() {
    console.log("cleaning up...");
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    // Destructuring the this.props.todo(props coming from TodoLists)
    const { id, completed, title } = this.props.todo;

    // logic that dynamically hides/display the todos/ text field.
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    return (
      <div>
        <li className={styles.item}>
          <div style={viewMode} onDoubleClick={this.handleEditing}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={completed}
              onChange={() => this.props.childHandleChangeProps(id)}
            />
            <button onClick={() => this.props.childDeleteTodoProps(id)}>
              Delete
            </button>
            <span style={completed ? completedStyle : null}>{title}</span>
          </div>
          {/* for editing TodoItems */}
          <input
            type="text"
            // this will popUp the input field for editing
            style={editMode}
            className={styles.textInput}
            value={title}
            // this will trigger and enable us to edit the clicked TodoItems
            onChange={(e) => {
              this.props.setUpdateForEditingItems(e.target.value, id);
            }}
            // when the enter key is pressed to submit the edit, this will trigger a method that reset the edit mode to false thereby hiding the edit field.
            onKeyDown={this.handleUpdatedDone}
          />
        </li>
      </div>
    );
  }
}

export default TodoItem;
