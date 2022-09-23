import React, { Component } from 'react'

 class HoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount=()=>{
        this.setState(prevstate=>{
            return{count:prevstate.count+1}
        })
    }
  render() {
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>hovered {this.state.count} times</h2>
      </div>
    )
  }
}

export default HoverCounter