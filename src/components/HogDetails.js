import React, { Component } from 'react'

class HogDetails extends Component {
  render() {
    const { name, specialty, weight, greased } = this.props.hog
   // console.log(specialty);
    return (
      <span>
        <h4>Name:</h4><p>{name}</p> 
        <h4>Specialty:</h4><p>{specialty}</p>
        <h4>Weight:</h4><p>{weight}</p>
        <h4>Greased:</h4><p>{greased.toString()}</p>
      </span>
    )
  }
}



export default HogDetails