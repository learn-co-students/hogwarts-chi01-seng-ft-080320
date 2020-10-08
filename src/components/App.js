import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from "./HogContainer";
import Filter from "./Filter";

class App extends Component {

  state = {
    allHogs: hogs,
    filtered: []
  }

  hogObj = () => {
    const hogArray = this.state.allHogs.map(hog => {
      return <HogContainer hog={hog} />
    })
    return hogArray
  }

  hogGreaseFilter = () => {
    const hogGreasedArr = this.state.allHogs.filter(hog => hog.greased)
      this.setState({
        allHogs: hogGreasedArr
      })
   }

  // renderGreased = () => {
  //   this.setState({
  //     allHogs: hogGreasedArr
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter hogGreaseFilter ={this.hogGreaseFilter}/>
        {this.hogObj()}
      </div>
    );
  }
}

export default App;
