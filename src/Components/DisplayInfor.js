import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { age, name } = this.props;
        // props => properties
        return (
            <div>
                <p>My name is {name}</p>
                <p>My age is {age}</p>
            </div>
        )
    }
}

export default DisplayInfor