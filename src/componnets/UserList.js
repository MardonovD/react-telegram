import React from "react";

const UserList = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.gteData();
          console.log(props.gteData());
        }}
      >
        Start
      </button>
    </div>
  );
};

export default UserList;
