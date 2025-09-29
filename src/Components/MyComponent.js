// class components
// function components

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <UserInfor></UserInfor>
        <br></br>
        <DisplayInfor name="Ngo Khi Cuong" age="20"></DisplayInfor>
        <hr></hr>
        <DisplayInfor name="Hoi dan it" age="30"></DisplayInfor>

      </div>
    );
  }
}

export default MyComponent