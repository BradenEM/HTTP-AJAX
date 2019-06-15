import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Friend = styled.div`
  width: 33%;
`;

function FriendsList(props) {
  console.log(props);
  return (
    <div>
      <Wrapper>
        <List>
          {props.friends.map(friend => (
            <Friend>
              <h2 key={friend.id}>{friend.name}</h2>
              <button value={friend.id} onClick={props.handleDelete}>
                X
              </button>
            </Friend>
          ))}
        </List>
      </Wrapper>
    </div>
  );
}

export default FriendsList;
