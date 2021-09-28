import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoLists from "./TodoLists";

class TodoContainer extends Component {
  // Creating a State
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
      },

      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false,
      },

      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  // handleChange is the event to cause the the change.
  // updating the setState() using the prevState
  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  };

  // Delete event to delete an item.

  deleteTodo = (id) => {
    this.setState({
      todos: [
        //   (...) spread operator allows us to grab the current todos item(s) at every point. As this is necessary for the code to work.
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  // logging the user's input (titles) in the TodoContainer from the InputTodo component. We create a method first in the parent(TodoContainer) component. [this is passing props from the child to the parent component].
  // (i) Since we are expecting the todos title from the InputTodo(child) component, you have to include it as the function argument as seen in the code above.
  //(ii) Now, the addTodoItem() method can be accessed through props in the InputTodo component. So update the handleSubmit method in the InputTodo component so you have

  addTodoItem = (title) => {
    // To add the new Todo(manually), we need to update the state.
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div>
        <Header />
        <TodoLists
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.deleteTodo}
        />
        <InputTodo addTodoProps={this.addTodoItem} />
      </div>
    );
  }
}

export default TodoContainer;
