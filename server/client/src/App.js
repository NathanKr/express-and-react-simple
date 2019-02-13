import React, { Component } from "react";
import "./App.css";


class App extends Component {
  url = "http:/api";
  state = {data : ''};

  clickHandler = () => {
    console.log("clicked");
    fetch(this.url)
      .then(res => res.json())
      .then(data => this.setState({data : data.res}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <p>Hello Nathan Krasney</p>
        <button onClick={this.clickHandler}>Access express server</button>
        <p>Got : {this.state.data}</p>
      </div>
    );
  }
}

export default App;
