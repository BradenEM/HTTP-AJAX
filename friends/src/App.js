import React from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>Friends List</h1>
      <NavLink to="/form">
        <h2>Add A Friend</h2>
      </NavLink>
      <FriendsList />
      <Route exact path="/" component={FriendsList} />
      <Route
        exact
        path="/form"
        render={props => (
          <Form
            {...props}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      />
    </div>
  );
}

export default App;
