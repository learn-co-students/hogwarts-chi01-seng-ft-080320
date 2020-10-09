import React, { Fragment } from "react";
import HogCard from './HogCard'

class HogContainer extends React.Component {
  
  
    render() {
    return (
      <div className='ui three cards'>
        <HogCard hogs={this.props}/>
      </div>
    );
  }
}

export default HogContainer;
