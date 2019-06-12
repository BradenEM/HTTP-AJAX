import React from "react";
import axios from "axios";

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
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

  render() {
    return (
      <div>
        <div>
          {this.state.friends.map(friend => (
            <h2>{friend.name}</h2>
          ))}
        </div>
        <div>
          <form>
            <h2>Add new friend</h2>
            <input typ="text" placeholder="name" />
            <input typ="number" placeholder="age" />
            <input typ="text" placeholder="email" />
          </form>
        </div>
      </div>
    );
  }
}

export default FriendsList;
