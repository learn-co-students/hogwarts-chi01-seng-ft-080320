import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from "./HogContainer";

class App extends Component {

  state = {
    allHogs: hogs
  }

  hogObj = () => {
    const hogArray = this.state.allHogs.map(hog => {
      return <HogContainer hog={hog} />
    })
    return hogArray
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {this.hogObj()}
      </div>
    );
  }
}

export default App;
