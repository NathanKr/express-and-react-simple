import React, { Component } from "react";
import "./App.css";

class App extends Component {
  url = "/api";
  clickHandler = () => {
    console.log("clicked");
    fetch(this.url)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <p>Hello Nathan Krasney</p>
        <button onClick={this.clickHandler}>Access express server</button>
      </div>
    );
  }
}

export default App;
