import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  url = "/api";
  state = { data: "" };

  clickHandler = () => {
    console.log("clicked");
    axios
      .get(this.url)
      .then(res => {
        console.log(res.data.res);
        this.setState({ data: res.data.res });
      })
      .catch(err => console.log(err));
    // fetch(this.url)
    //   .then(res => res.json())
    //   .then(data => this.setState({data : data.res}))
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <p>Hello Nathan Krasney</p>
        <button onClick={this.clickHandler}>Access express server !!!!!</button>
        <p>Got : {this.state.data}</p>
      </div>
    );
  }
}

export default App;
