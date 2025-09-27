// class components
// function components

import React from "react";

class MyComponent extends React.Component {
    // JSX
    render() {
        return (
            <div> My First Component <br></br>
                {Math.random()}
            </div>
        );
    }
}

export default MyComponent