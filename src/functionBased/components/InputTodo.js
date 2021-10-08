import React, { useState } from "react";

const InputTodo = (props) => {
  //to accommodate multiple text fields. we change the initialState in the useState() to an object
  const [inputText, setInputText] = useState({
    title: "",
  });

  /* After creating the State:
    1. We can now take this data(title) and assign it to a value prop in the text input tag.
    2. The value is empty as declared in the state object. To change the state, we need to update it through the setState() method [here we use setTitle].
    3. we need to handle the event(onChange) and update the state. We update the state using the setState()[setTitle()] in the onChangeValue function.
  */

  const onChangeValue = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  /* 5. Updating the Todo-Lists
    To submit todos items, we will make use of the onSubmit event handler on the form element.
    */

  const handleSubmit = (e) => {
    e.preventDefault();
    //passing props(event) to the parent(TodoContainer) component
    //And validating the form submission
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);

      //There is a need to clear the input field once we have submitted a todos item for subsequent entry.
      setInputText({
        title: "",
      });
    } else {
      alert("Please write item.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={inputText.title}
        name="title"
        onChange={onChangeValue}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
