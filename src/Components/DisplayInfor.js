import React from "react";

class DisplayInfor extends React.Component {
    render() {
        // const { age, name } = this.props;
        // destructuring arr/obj
        const { listUsers } = this.props
        console.log(listUsers);

        // props => properties
        return (
            <div>
                {listUsers.map((item) => {
                    return (
                        <div key={item.id}>
                            <p>My name is {item.name}</p>
                            <p>My age is {item.age}</p>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfor