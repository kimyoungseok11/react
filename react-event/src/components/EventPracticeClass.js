import React, { Component } from "react";

class EventPracticeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      userName: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };

  handleClick = () => {
    this.setState({
      message: "",
      userName: "",
    });
  };
  render() {
    return (
      <div>
        이벤트 클래스 컴포넌트
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="userName"
          placeholder="사용자명"
          value={this.state.userName}
          onChange={this.handleChange}
        ></input>
        <div>{this.state.message}</div>
        <div>{this.state.userName}</div>
        <button
          onClick={() => {
            this.setState({
              message: "",
            });
          }}
        >
          값 초기화
        </button>
        <button onClick={this.handleClick}>값 초기화2</button>
      </div>
    );
  }
}

export default EventPracticeClass;
