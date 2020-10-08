import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filter from "./Filter";
import HogCont from "./HogCont"

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: hogs
    }
  }

  addHogAttributes = () => {
    this.setState({
      
    })
  }
  

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter />
        <HogCont hogs={this.state.hogs}/>
      </div>
    );
  }
}

export default App;
