import React, { useState, useEffect } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoLists from "./TodoLists";
import { v4 as uuidv4 } from "uuid";

function TodoContainer() {
  const [todos, setTodos] = useState(getInitialTodos());

  // handleChange is the event to cause the the change.
  // updating the setTodos() using the prevState

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  // Delete method to delete an item.
  const deleteTodo = (id) => {
    setTodos([
      //   (...) spread operator allows us to grab the current todos item(s) at every point. As this is necessary for the code to work.
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  // logging the user's input (titles) in the TodoContainer from the InputTodo component. We create a method first in the parent(TodoContainer) component. [this is passing props from the child to the parent component].
  // (i) Since we are expecting the todos 'title' from the InputTodo(child) component, you have to include it(title) as the function argument as seen in the code below.
  //(ii) Now, the addTodoItem() method can be accessed through props in the InputTodo component. So update the handleSubmit method in the InputTodo component so you have

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };

    // to add the newTodo, we spread the whole todo items and add the newTodo using the setTodos method.
    setTodos([...todos, newTodo]);
  };

  // the setUpdate method will enable us to edit the TodoItems by passing it as props to the TodoLists then down to the TodoItem.

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  // useEffect(() => {
  //   console.log("test run");

  //   // getting stored items
  //   const temp = localStorage.getItem("todos");
  //   const loadedTodos = JSON.parse(temp);

  //   if (loadedTodos) {
  //     setTodos(loadedTodos);
  //   }
  // }, []);

  // assigning the saved Tods directly to the initialState
  function getInitialTodos() {
    // getting stored todos items
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  useEffect(() => {
    //storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodoLists
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={deleteTodo}
          setUpdateForEditing={setUpdate}
        />
      </div>
    </div>
  );
}

export default TodoContainer;
