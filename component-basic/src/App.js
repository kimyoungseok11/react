import { Component } from "react";
import MyComponents from "./components/MyComponents.js";
import "./App.css";

class App extends Component {
  render() {
    const name = "react";
    return (
      <div>
        <div className="react">{name}</div>
        <MyComponents name="react">{name}</MyComponents>
      </div>
    );
  }
}

export default App;
