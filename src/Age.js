import React from "react";

export default class Age extends React.Component {
    render() {
        return <p>{this.props.age > 18 ? `Your age is ${this.props.age}` : "You are very young!"}</p>;
    }
}