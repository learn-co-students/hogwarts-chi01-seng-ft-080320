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
    
    
    hogSort = (e) => {
      if(e.target.value === 'name'){
        function compare(a, b){ 
         const nameA = a.name.toUpperCase();
         const nameB = b.name.toUpperCase();
         let comparison = 0;
         if (nameA > nameB) {
           comparison = 1;
         } else if (nameA < nameB) {
           comparison = -1;
         }
         return comparison;}
         this.setState({
           allHogs: this.state.allHogs.sort(compare)
         })
       }
     }


  render() {
    return (
      <div className="App">
        <Nav />
        <Filter hogGreaseFilter ={this.hogGreaseFilter} hogSort={this.hogSort}/>
        {this.hogObj()}
      </div>
    );
  }
}

export default App;
