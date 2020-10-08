import React from "react"

class HogTile extends React.Component {

    isGreased = () => {
       return this.props.hog.greased ? <h2>Greased</h2> : <h2>Not Greased</h2>
    }
    
    
    handleClick = (event) => {
        
    }

    render() {
        let reformattedImage = this.props.hog.name.split(' ').join('_').toLowerCase()
        let pigImage = require(`../hog-imgs/${reformattedImage}.jpg`)  
        return (
        <div className="ui card" onClick={this.handleClick}>
            <img src={pigImage}/>
            <h1>{this.props.hog.name}</h1>
            <h3>Specialty: {this.props.hog.specialty}</h3>
            <h3>Weight: {this.props.hog.weight}</h3>
            <h3>Grease Status: {this.isGreased()}</h3>
        </div>
      );
    }
}

export default HogTile 