import React from "react";

class UserInfor extends React.Component {
    render() {
        return (
                  <form onSubmit={(e) => {this.handleOnSubmit(e)}}>
        <label>Your name: </label><input type="text" onChange={(e) => {this.handleChangeInput(e)}} value={this.state.name}></input>
        <label>Your age: </label><input type="text" onChange={(e) => {this.handleChangeAge(e)}} value={this.state.age}></input>
        <button>Submit</button>
      </form>
        )
    }
}

export default UserInfor