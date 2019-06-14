import React from "react";
import axios from "axios";

class FriendsList extends React.Component {
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
      </div>
    );
  }
}

export default FriendsList;
