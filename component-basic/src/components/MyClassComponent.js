import React from "react";
import { Component } from "react";

class MyClassComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요 제 이름은 {name} 입니다. <br />
        children은 {children} 입니다. <br />
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

export default MyClassComponent;
