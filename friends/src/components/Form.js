import React from "react";

function Form(props) {
  console.log(props);
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <h2>Add new friend</h2>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={props.handleChange}
          value={props.state.name}
        />
        <input
          type="number"
          placeholder="age"
          name="age"
          onChange={props.handleChange}
          value={props.state.age}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={props.handleChange}
          value={props.state.email}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
