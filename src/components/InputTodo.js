import React, { Component } from "react";

export class InputTodo extends Component {
  // Adding a State
  state = {
    title: "",
  };

  //After creating the State:
  // 1. We can now take this data(title) and assign it to a value prop in the text input tag.
  // 2. The value is empty as declared in the state object. To change the state, we need to update it through the setState() method.
  // 3. we need to handle the event(onChange) and update the state. We update the state using the setState() in the onChangeValue function.
  //4.For multiple input tag, you add a name attribute to each of the input tags and assign a value with the same name you declared in the state. For instance, in our case, we will have the name="title" included in the text input tag.

  onChangeValue = (e) => {
    // this.setState({
    //   title: e.target.value,
    //updating the onChangeValue method
    this.setState({
      [e.target.name]: e.target.value,
    });

    // What is Happening?: If you type anything inside the input field, the onChange event handler will trigger. This will then call the onChangeValue() class method that will re-render the state using the setState() method.
    // In the setState() method, we are passing the current value of the state (i.e the input text) to the title using e.target.value
  };

  // 5. Updating the Todo-Lists
  // To submit todos items, we will make use of the onSubmit event handler on the form element.

  handleSubmit = (e) => {
    e.preventDefault();
    //passing props(event) to the parent(TodoContainer) component
    //And validating the form submission
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);

      //There is a need to clear the input field once we have submitted a todos item for subsequent entry.
      this.setState({
        title: "",
      });
    } else {
      alert("Please write item.");
    }
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChangeValue}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default InputTodo;
