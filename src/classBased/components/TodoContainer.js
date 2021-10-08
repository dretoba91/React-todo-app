import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoLists from "./TodoLists";

class TodoContainer extends Component {
  // Creating a State
  state = {
    todos: [],
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

  // this will enable us to edit the TodoItems by passing this as props.
  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  /*
  // we want to mount(insert) todo datas from a REST API. we make use of the fetch() to fetch data from the jsonplaceholder API and limit data to 10.
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data }));
  }
  */

  // we will get the stored item(s) and add back to the  after rendering, once component mount
  componentDidMount() {
    const temp = localStorage.getItem("todos");
    const loadTodos = JSON.parse(temp);
    if (loadTodos) {
      this.setState({
        todos: loadTodos,
      });
    }
  }

  // Whenever our application mounts on the screen and the user interact with the app by inputting the to-dos data, we will save the to-dos item(s) in the local storage.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", temp);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <TodoLists
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteTodo}
            setUpdateForEditing={this.setUpdate}
          />
          <InputTodo addTodoProps={this.addTodoItem} />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
