import React from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";
import { Route, NavLink } from "react-router-dom";
import Form from "./components/Form";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios.post("http://localhost:5000/friends", newFriend).then(response => {
      this.setState({ friends: response.data });
      console.log(response.data);
    });
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  handleDelete = e => {
    e.preventDefault();
    console.log(e.target.value);
    axios
      .delete(`http://localhost:5000/friends/${e.target.value}`)
      .then(response => {
        this.setState({ friends: response.data });
        console.log(this.state.friends);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <NavLink to="/">
          <h2>Home</h2>
        </NavLink>
        <NavLink to="/form">
          <h2>Add A Friend</h2>
        </NavLink>
        {/* <FriendsList /> */}
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              handleDelete={this.handleDelete}
            />
          )}
        />
        <Route
          exact
          path="/form"
          render={props => (
            <Form
              {...props}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              name={this.state.name}
              age={this.state.age}
              email={this.state.email}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
