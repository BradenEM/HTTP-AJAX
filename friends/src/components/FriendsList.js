import React from "react";

function FriendsList(props) {
  console.log(props);
  return (
    <div>
      <div>
        {props.friends.map(friend => (
          <div>
            <h2 key={friend.id}>{friend.name}</h2>
            <button value={friend.id} onClick={props.handleDelete}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendsList;
