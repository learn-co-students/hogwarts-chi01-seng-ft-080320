import React, { Fragment } from "react";

class HogCard extends React.Component {
  render() {
      const { name, specialty, weight, greased } = this.props.hogs.hog
      console.log(weight)
    return (
      <div className='ui card pigTile'>
        <h1>Hog Card</h1>
      </div>
    );
  }
}

export default HogCard;
