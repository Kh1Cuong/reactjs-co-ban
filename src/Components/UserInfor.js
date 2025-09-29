import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "Ngo Khi Cuong",
    address: "Hoi Dan IT",
    age: 26
  }

  handleChangeInput = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  handleChangeAge = (e) => {
    this.setState({
      age: e.target.value,
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address} and my age is {this.state.age} <br></br>
        <form onSubmit={(e) => { this.handleOnSubmit(e) }}>
          <label>Your name: </label><input type="text" onChange={(e) => { this.handleChangeInput(e) }} value={this.state.name}></input>
          <label>Your age: </label><input type="text" onChange={(e) => { this.handleChangeAge(e) }} value={this.state.age}></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default UserInfor