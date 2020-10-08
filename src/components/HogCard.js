import React, { Fragment } from "react";
import HogDetails from "./HogDetails";

class HogCard extends React.Component {

  state = {
    showingDetails: false
  }

  imgSrcMatcher = (name) => {
    let filename = name.split(' ').join('_').toLowerCase()
    let pigImage = require(`../hog-imgs/${filename}.jpg`)
    return <img src={pigImage} />
  } 
  
  handleClick = () => {
    this.setState((prevState) => ({
       showingDetails: !prevState.showingDetails
    }) 
    )
    // this.setState({
    //   showingDetails: !this.state.showingDetails
    // })
  }

  render() {
      const { name, specialty, weight, greased } = this.props.hogs.hog
     // console.log('IN THE HOG CARD', name)
    return (
      <div className='ui card pigTile' onClick={this.handleClick}>
            { this.state.showingDetails ? 
            (<HogDetails hog={this.props.hogs.hog}/>)
            :
            (<Fragment><div className="image">
            {this.imgSrcMatcher(name)}
            </div> <h1>{name}</h1></Fragment>)}
          
      </div>
    );
  }
}

export default HogCard;



// let pigImage = require('../hog-imgs/piggy_smalls.jpg') 
//how can we dynamically generate the filename?
{/* // return <img src={pigImage} /> */}