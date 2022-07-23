import React, { Component } from "react";

class EventRemindClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      name: "",
    };
  }

  handleClick = (e) => {
    this.setState({
      message: "",
      name: "",
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>초기화</button>
        <input
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
        ></input>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <div>{this.state.message}</div>
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default EventRemindClass;
