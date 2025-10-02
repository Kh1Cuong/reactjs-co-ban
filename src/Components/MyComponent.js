// class components
// function components

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

  state = {
    listUsers: [
      { id: 1, name: "hoidanit1", age: 30 },
      { id: 2, name: "hoidanit2", age: 25 },
      { id: 3, name: "hoidanit3", age: 20 }

    ]
  }

  render() {
    // const array1 = ["a", 1, true, "abc"];
    return (
      <div>
        <UserInfor></UserInfor>
        <br></br>
        <DisplayInfor listUsers={this.state.listUsers} users={this.state.listUsers}></DisplayInfor>
      </div>
    );
  }
}

export default MyComponent