import React from "react";
import axios from "axios";

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: 0,
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

  handleNameChange = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  handleAgeChange = e => {
    e.preventDefault();
    this.setState({ age: parseInt(e.target.value) });
  };

  handleEmailChange = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios.post("http://localhost:5000/friends", newFriend).then(response => {
      this.setState({ friends: response.data });
      console.log(response.data);
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
      <div>
        <div>
          {this.state.friends.map(friend => (
            <div>
              <h2 key={friend.id}>{friend.name}</h2>
              <button value={friend.id} onClick={this.handleDelete}>
                X
              </button>
            </div>
          ))}
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <h2>Add new friend</h2>
            <input
              type="text"
              placeholder="name"
              onChange={this.handleNameChange}
            />
            <input
              type="number"
              placeholder="age"
              onChange={this.handleAgeChange}
            />
            <input
              type="text"
              placeholder="email"
              onChange={this.handleEmailChange}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default FriendsList;
