import React from "react";

function SingleUser(props) {
  return (
    <div className="user">
      <div>
        <label>Username :</label>
        <p>{props.username}</p>
      </div>
      <div>
        <label>Email : </label>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default SingleUser;
