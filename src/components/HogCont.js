import React from "react"
import HogTile from "./HogTile"

class HogCont extends React.Component {

    returnHogs = () => {
        return this.props.hogs.map(hogObj => {
            return <HogTile hog={hogObj} />
        })
    }
    
    render() {
      return (
        <div className="ui three cards">
            {this.returnHogs()}
        </div>
      );
    }
  }

export default HogCont

