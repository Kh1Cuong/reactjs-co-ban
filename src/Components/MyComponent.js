// class components
// function components

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Ngo Khi Cuong",
    address: "Hoi Dan IT",
    age: 26
  }

//     handleClick = (e) => {
//     console.log("Clicked");
//     console.log("My name is ", this.state.name);
//     console.log("Random", Math.floor((Math.random()*100) + 1));
    
//     //merge state (chi xay ra khi co react class)
//     this.setState({
//       name: "Cuong Ngo",
//       age: Math.floor((Math.random()*100) + 1)
//     })
//   }

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

  render () {
    return (
    <div>
      My name is {this.state.name} and I'm from {this.state.address} and my age is {this.state.age} <br></br>
      <form onSubmit={(e) => {this.handleOnSubmit(e)}}>
        <label>Your name: </label><input type="text" onChange={(e) => {this.handleChangeInput(e)}} value={this.state.name}></input>
        <label>Your age: </label><input type="text" onChange={(e) => {this.handleChangeAge(e)}} value={this.state.age}></input>
        <button>Submit</button>
      </form>
    </div>
    );
  }
}

export default MyComponent